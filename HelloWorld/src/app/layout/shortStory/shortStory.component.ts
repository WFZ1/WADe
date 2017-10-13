import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortstory',
  templateUrl: './shortstory.component.html',
  styleUrls: ['./shortstory.component.css']
})
export class ShortstoryComponent implements OnInit {

  news: Array<Model.News>;

  constructor() { }

  ngOnInit() {
    this.news = this.getNews();
    // console.log(this.news);
  }

  getNews() {
    return [
      {
        id: 1,
        title: 'Видеокурс ANGULAR CLI',
        titleImg: 'https://i1.wp.com/keyholesoftware.com/wp-content/uploads/Angular-CLI-logo.png?fit=700%2C400&ssl=1',
        publishedOn: new Date(2017, 10, 3),
        section: 'Angular',
        // tslint:disable-next-line:max-line-length
        summary: 'Angular CLI (command line interface) это инструмент без которого сложно представить разработку Angular приложений. Создать новое angular приложение, настроить маршрутизацию в angular приложении, создать компонент, директиву или pipe – все это можно сделать в два клика с помощью angular cli.',
        author: 'Pasha',
        infoType: 'Статья',
        rating: 3,
        infoView: 77,
        infoComment: 12,
        readMore: '',
        tags: [
          {
            id: 1,
            title: 'tag1'
          },
          {
            id: 2,
            title: 'tag2'
          },
        ],
        comments: [
          {
            id: 1,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          },
          {
            id: 2,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          }
        ]
      },
      {
        id: 2,
        title: 'Angular2 - Material Design Lite',
        titleImg: 'app/images/mdl.jpg',
        publishedOn: new Date(2017, 11, 2),
        section: 'Angular',
        // tslint:disable-next-line:max-line-length
        summary: 'Angular2 MDL представляет собой библиотеку компонентов для Angular2, базирующуюся на Material Design Lite. Она поддерживает AOT и tree shaking. Компоненты которые доступны прямо сейчас: значки, кнопки, карты, чипы, диалоги, значки, загрузка, тень, переключение, списки, реактивные формы, слайдер, закусочная, стол, подсказки , Меню, макет, вкладки, текстовые поля.',
        author: 'Pasha',
        infoType: 'Статья',
        rating: 8,
        infoView: 250,
        infoComment: 23,
        readMore: '',
        tags: [
          {
            id: 1,
            title: 'tag1'
          },
          {
            id: 2,
            title: 'tag2'
          },
        ],
        comments: [
          {
            id: 1,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          },
          {
            id: 2,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          }
        ]
      },
      {
        id: 1,
        title: 'GitHub',
        titleImg: 'app/images/github.png',
        publishedOn: new Date(2017, 10, 10),
        section: 'Angular',
        // tslint:disable-next-line:max-line-length
        summary: 'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc (ранее Logical Awesome).',
        author: 'Pasha',
        infoType: 'Статья',
        rating: 11,
        infoView: 83,
        infoComment: 9,
        readMore: '',
        tags: [
          {
            id: 1,
            title: 'tag1'
          },
          {
            id: 2,
            title: 'tag2'
          },
        ],
        comments: [
          {
            id: 1,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          },
          {
            id: 2,
            author: 'sf',
            publishedOn: new Date(2017, 11, 2),
            text: 'sdfsdf'
          }
        ]
      }
    ];
  }
}
