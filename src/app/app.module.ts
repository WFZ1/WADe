import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { WrapperComponent } from './layout/wrapper/wrapper.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ContentComponent } from './layout/content/content.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ShortstoryComponent } from './layout/tab-bar/shortstory/shortstory.component';
import { FullstoryComponent } from './layout/fullstory/fullstory.component';
import { VideoTabComponent } from './layout/tab-bar/video-tab/video-tab.component';
import { NewsTabComponent } from './layout/tab-bar/news-tab/news-tab.component';
import { ReviewTabComponent } from './layout/tab-bar/review-tab/review-tab.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

import { LoginDialogComponent } from './layout/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShortstoryComponent,
    ContentComponent,
    LoginDialogComponent,
    WrapperComponent,
    FullstoryComponent,
    VideoTabComponent,
    NewsTabComponent,
    ReviewTabComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ShortstoryComponent },
      { path: 'articles', component: ShortstoryComponent },
      { path: 'news', component: NewsTabComponent },
      { path: 'videos', component: VideoTabComponent },
      { path: 'overviews', component: ReviewTabComponent },
      { path: 'articles/:id', component: FullstoryComponent },
      { path: 'page-not-found', component: NotFoundPageComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }
