import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BackendService } from './services/backend.service';
import { ArticleService } from './services/article.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ArticleTabComponent } from './layout/article/article-tab/article-tab.component';
import { FullstoryComponent } from './layout/article/fullstory/fullstory.component';
import { VideoTabComponent } from './layout/tab-bar/video-tab/video-tab.component';
import { NewsTabComponent } from './layout/tab-bar/news-tab/news-tab.component';
import { ReviewTabComponent } from './layout/tab-bar/review-tab/review-tab.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { CreateArticleComponent } from './layout/article/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArticleTabComponent,
    WrapperComponent,
    FullstoryComponent,
    VideoTabComponent,
    NewsTabComponent,
    ReviewTabComponent,
    NotFoundPageComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ArticleTabComponent },
      { path: 'articles', component: ArticleTabComponent },
      { path: 'news', component: NewsTabComponent },
      { path: 'videos', component: VideoTabComponent },
      { path: 'overviews', component: ReviewTabComponent },
      { path: 'articles/:id', component: FullstoryComponent },
      { path: 'page-not-found', component: NotFoundPageComponent },
      { path: 'create', component: CreateArticleComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [BackendService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
