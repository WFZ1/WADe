import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ShortStoryComponent } from './layout/shortStory/shortStory.component';
import { ContentComponent } from './layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShortStoryComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
