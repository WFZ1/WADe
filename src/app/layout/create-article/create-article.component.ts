import { Component, OnInit } from '@angular/core';
import { CreateArticleService } from '../../services/create-article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Model.Article;

  constructor(public create: CreateArticleService) { }

  ngOnInit() {
    this.article = this.create.getArticle(null);
  }

  onTitleChanging() {
    this.article.title = this.article.title.toUpperCase();
  }
}
