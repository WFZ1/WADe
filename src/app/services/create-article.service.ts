import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';

@Injectable()
export class CreateArticleService {

    articles: Array<Model.Article> = [];
    i = 4; // id каждой задачи

    constructor(private router: Router, private backend: BackendService) {
        this.backend.getArticleList().subscribe((data: Model.Article[]) => {
            for (let i = 0; i < data.length; i++) {
              this.articles.push(data[i]);
            }
        });
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
              author: 'autthor2',
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

    save(article: Model.Article) {
        article.id = this.i++;
        this.articles.push(article);
        this.router.navigate(['/articles']);
    }

    cancel() {
        this.router.navigate(['/articles']);
    }
}
