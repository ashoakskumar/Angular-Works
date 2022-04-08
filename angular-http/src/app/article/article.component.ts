import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  allArticles: Article[] = [];
  statusCode: number = 0;
  requestProcessing = false;
  articleIdToUpdate = 0;
  processValidation = false;
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('',Validators.required)
  })
  constructor(private articleService: ArticleService) { }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(
      data => {
        this.allArticles = data;
        console.log(this.allArticles)
      },
      errorCode => this.statusCode = errorCode,
      () => console.log('...and it is done!')
    );
  }
  ngOnInit(): void {
    this.getAllArticles();
  }
  preProcessingConfiguration() {
    this.statusCode = 0;
    this.requestProcessing = true;
  }
  backToCreateArticle() {
    this.articleIdToUpdate =0;
    this.articleForm.reset();
    this.processValidation = false;
  }
  deleteArticle(articleId: number) {
    this.preProcessingConfiguration();
    this.articleService.deleteArticleById(articleId).subscribe(
      successCode => {
        //this.statusCode = successCode;
				//Expecting success code 204 from server
        this.statusCode = 204;
        this.getAllArticles();
        this.backToCreateArticle();
      },
      errorCode => this.statusCode =errorCode
    );
  }
  loadArticleToEdit(articleId:number) {
    this.preProcessingConfiguration();
    this.articleService.getArticleById(articleId).subscribe(
      article => {
        this.articleIdToUpdate = article.id;
        this.articleForm.setValue({title: article.title,category:article.category});
        this.processValidation = true;
        this.requestProcessing = false;
      },
      errorCode => this.statusCode = errorCode
    );
  }
  onArticleFormSubmit() {
    this.processValidation = true;
    let article = this.articleForm.value;
    if(this.articleIdToUpdate === 0) {
      this.articleService.getAllArticles().subscribe(
        articles=> {
          article.id = articles[articles.length-1].id +1;
          this.articleService.createArticle(article).subscribe(
            statusCode => {
              this.statusCode = statusCode;
              this.getAllArticles();
              this.backToCreateArticle();
            },
            errorCode => this.statusCode = this.statusCode
          )
        }
      )
    } else {
      article.id = this.articleIdToUpdate;
      this.articleService.updateArticle(article).subscribe(
        statusCode => {
          this.statusCode = 200;
          this.getAllArticles();
          this.backToCreateArticle();
        },
        errorCode => this.statusCode = errorCode
      )
    }
  }
}
