import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';
import * as _ from 'lodash';

@Injectable()
export class ArticleService {

    articles: Array<Model.Article>;
    id = 4; // id каждой статьи

    articlesFull = [
      {
        id: 1,
        title: 'ВИДЕОКУРС ANGULAR CLI',
        titleImg: 'app/images/angular_cli.png',
        // tslint:disable-next-line:max-line-length
        description: 'Angular CLI (command line interface) это инструмент без которого сложно представить разработку Angular приложений. Создать новое angular приложение, настроить маршрутизацию в angular приложении, создать компонент, директиву или pipe – все это можно сделать в два клика с помощью angular cli. Эти видео уроки будут полезными каждому angular разработчику и подойдут, как для тех, кто уже давно работают с одностраничными приложениями, так и для начинающих. Angular CLI решает не только проблемы создания нового кода и настройки компонентов но и тестирования приложения, а также подготовку к публикации.'
      },
      {
        id: 2,
        title: 'ANGULAR2 - MATERIAL DESIGN LITE',
        titleImg: 'app/images/mdl.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Material Design Lite был создан инженерами из Google, следовательно вы можете ожидать строгое следование принципам Material Design. Но, не смотря на высокую популярность фреймворка, поддержка весьма ограниченна так как развитие ушло к «Material Components for the Web».'
      },
      {
        id: 3,
        title: 'GITHUB',
        titleImg: 'app/images/github.png',
        // tslint:disable-next-line:max-line-length
        description: 'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc (ранее Logical Awesome). Сервис абсолютно бесплатен для проектов с открытым исходным кодом и предоставляет им все возможности (включая SSL), а для частных проектов предлагаются различные платные тарифные планы. Слоган сервиса — «Social Coding» — на русский можно перевести как «Пишем код вместе». На футболках же печатают совсем другую фразу: «Fork you!» («Ответвись!»). С одной стороны, она созвучна с англоязычным ругательством и намекает на неформальную атмосферу. С другой, эти слова напоминают, что создавать новые форки с Git можно легко и безболезненно — традиционно, к созданию веток разработчики проектов с открытым исходным кодом относятся негативно — а также созвучна названию одной из возможностей Github — очереди форков. Талисманом GitHub выбран осьмикот (англ. octocat), который, вопреки распространённому заблуждению, не имеет отношения к короткометражке «Octocat Adventure», а просто был найден Томом Престон-Вернером на iStock Photo.'
      }
    ];

    constructor(private router: Router, private backend: BackendService) {
        this.backend.getArticleList().subscribe((data: Model.Article[]) => {
            this.articles = this.articles || data;
        });
     }

     getEmptyArticle(): Model.Article {
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

    getArticle(id: number): Model.Fullstory {
      const article = _.find(this.articlesFull, (a: Model.Article) => a.id === id);

      if (article) {
        return article;
      }

      this.router.navigate(['/page-not-found']);
    }

    save(article: Model.Article) {
        article.id = this.id++;
        this.articles.unshift(article);
        this.router.navigate(['/articles']);
    }

    cancel() {
        this.router.navigate(['/articles']);
    }
}
