import { DatePipe } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonService } from '../person.service';
import { Person } from './person'
@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  public formGrp:FormGroup = {} as FormGroup;
  public locVal = ['TN','KL'];
  private date: Date = new Date();
  submitted = false;
  money:number = 0;
  person = {} as Person;
  errorMsg : string = '';
  selectedFiles?: FileList;
  currentFiles?: File;
  progressInfos:any = [];
  message:any = [];
  fileInfos?: Observable<any>;
  constructor(private group:FormBuilder,private datePipe: DatePipe,private service:PersonService) { }

  ngOnInit(): void {
    this.buildForm();
    this.submitted = false;
    this.money = 12220000.199;
    this.service.getPersonDetails().subscribe(
      response => this.person = response,
      error => this.errorMsg = error
    );
  }
  buildForm() {
    this.formGrp = this.group.group({
      id:2,
      name:'',
      dob:[this.datePipe.transform(this.date,'yyyy-MM-dd')],
      gender:'male',
      location:'0',
      address:this.group.array([])
    });
  }
  get address() : FormArray {
    return this.formGrp.get('address') as FormArray;
  }
  addAddress() {
    this.address.push(this.newAddress);
  }
  get newAddress() : FormGroup {
    return this.group.group({
      state:'',
      country:''
    })
  }
  save() {
    this.submitted = true;
    this.person= this.formGrp.value;
    this.service.savePerson(this.person).subscribe(
      response => {
        this.service.getPerson().subscribe(
          resp => console.log(resp)
        );
      }
    );
    console.log(this.person);
  }
  callPut() {
    this.service.putPerson(this.person).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  callPatch() {
    this.service.patchPerson(this.person).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  callError() {
    this.service.postErrorCall(this.person).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('error: '+ error);
      }
    )
  }
  selectFiles(event:any) : void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }
  uploadFiles() {
    this.message = [];
    if(this.selectedFiles) {
      for(let i=0;i<this.selectedFiles.length;i++) {
        this.upload(i, this.selectedFiles[i]);
      }
  }
  }
  upload(idx: number, file:File) {
    this.progressInfos[idx] = {value:0, fileName:file.name};
      if(file) {
        this.service.upload(file).subscribe({
         next: (event:any) =>  {
            if(event.type === HttpEventType.UploadProgress) {
              this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
            } else if(event instanceof HttpResponse) {
              if(event?.body?.message){
              const msg: any | null = event?.body?.message;
              this.message.push(msg);
              this.fileInfos = this.service.getFiles();
              }
            }
          },
          error: (err:any) => {
            console.log(err);
            this.progressInfos[idx].value = 0;
            const msg = 'Could not upload file: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.service.getFiles();
            if(err.error && err.error.message) {
              this.message = err.error.message
            } else {
              this.message = 'could not upload the file!';
            }
            this.currentFiles =  undefined;
          }
        })
      }
      //this.selectedFiles = undefined;
  }
}
