import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Model.Article;

  constructor(public create: ArticleService) { }

  ngOnInit() {
    this.article = this.create.getEmptyArticle();
  }

  onTitleChanging() {
    this.article.title = this.article.title.toUpperCase();
  }
}
