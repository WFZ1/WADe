import { Component } from '@angular/core';
import { DateService } from '../../../services/date.service';
import { CreateArticleService } from '../../../services/create-article.service';

@Component({
  selector: 'app-article-tab',
  templateUrl: './article-tab.component.html',
  styleUrls: ['./article-tab.component.css']
})
export class ArticleTabComponent {

  constructor(private date: DateService, public create: CreateArticleService) { }
}
