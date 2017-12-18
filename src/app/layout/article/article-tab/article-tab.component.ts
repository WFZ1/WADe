import { Component } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-tab',
  templateUrl: './article-tab.component.html',
  styleUrls: ['./article-tab.component.css']
})
export class ArticleTabComponent {

  constructor(public create: ArticleService) { }
}
