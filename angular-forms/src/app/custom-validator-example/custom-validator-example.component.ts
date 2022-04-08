import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { oddNumValidator } from './oddnum-validator';
import { TeamService } from './team.service';
import { teamNameValidator } from './teamname-validator.directive';

@Component({
  selector: 'app-custom-validator-example',
  templateUrl: './custom-validator-example.component.html',
  styleUrls: ['./custom-validator-example.component.scss']
})
export class CustomValidatorExampleComponent implements OnInit {

  teamNamePrefix = 'CP';
  teamForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: TeamService  ) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      teamName : ['', [Validators.required,teamNameValidator(this.teamNamePrefix)]],
      numOfPerson: ['', [Validators.required, oddNumValidator()]]
    });
  }
  onFormSubmit() {
    if(this.teamForm.valid) {
      this.service.createUser(this.teamForm.value);
      this.teamForm.reset();
    }
  }
}
