import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { TechnologyComponent } from './technology/technology.component';
import { MyPostComponent } from './my-post/my-post.component';
import { MyPostBannerComponent } from './my-post-banner/my-post-banner.component';
import { MyPostDirective } from './my-post.directive';
import { MyPostService } from './my-post.service';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { CpColorDirective } from './cp-color.directive';
import { CpColorParentComponent } from './cp-color-parent/cp-color-parent.component';
import { WriterComponent } from './writer/writer.component';
import { ViewchildrendemoComponent } from './viewchildrendemo/viewchildrendemo.component';



@NgModule({
  declarations: [
    ArticleComponent,
    TechnologyComponent,
    MyPostComponent,
    MyPostBannerComponent,
    MyPostDirective,
    NumberComponent,
    NumberParentComponent,
    CpColorDirective,
    CpColorParentComponent,
    WriterComponent,
    ViewchildrendemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyPostBannerComponent,NumberParentComponent,CpColorParentComponent,ViewchildrendemoComponent,WriterComponent],
  providers: [MyPostService]
})
export class LoadModule { }
