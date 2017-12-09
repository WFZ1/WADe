import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-article-tab',
  templateUrl: './article-tab.component.html',
  styleUrls: ['./article-tab.component.css']
})
export class ArticleTabComponent implements OnInit {

  articles: Array<Model.Article>;

  constructor(private backend: BackendService, private date: DateService) { }

  ngOnInit() {
    this.backend.getArticleList().subscribe((data: Model.Article[]) => this.articles = data);
  }
}
