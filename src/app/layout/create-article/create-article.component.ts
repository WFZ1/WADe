import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Model.Article;

  constructor(private router: Router) { }

  ngOnInit() {
    this.article = this.getArticle(null);
  }

  getArticle(paramId: number | null): Model.Article {
    return {
      id: -1,
      title: '',
      titleImg: '',
      publishedOn: new Date(),
      section: '',
      summary: '',
      author: '',
      infoType: 'Cтатья',
      rating: 0,
      infoView: 0,
      infoComment: 0,
      comments: [
        {
          id: 1,
          author: 'author1',
          publishedOn: new Date(),
          text: 'bla-bla'
        },
        {
          id: 2,
          author: 'author2',
          publishedOn: new Date(),
          text: 'bla-bla'
        }
      ],
      tags: [
        {
          id: 1,
          title: 'tag1'
        },
        {
          id: 2,
          title: 'tag2'
        }
      ]
    };
  }

  onTitleChanging() {
    this.article.title = this.article.title.toUpperCase();
  }

  save() {
    console.log(this.article);
  }

  cancel() {
    this.router.navigate(['/articles']);
  }
}
