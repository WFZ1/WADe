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
  }

  // Фон новости: старые закрашиваются светло зеленым
  isOld(month: Date): boolean {
    if (month.getMonth() + 1 < 11) {
      return true;
    }
    return false;
  }

  readDate(dd: Date): string {
    let str: string = '';

    str += (dd.getDate() < 10) ? '0' : '';
    str += dd.getDate() + '-';

    str += (dd.getMonth() < 9) ? '0' : '';
    str += dd.getMonth() + 1 + '-';

    str += dd.getFullYear() + ', ';

    str += (dd.getHours() < 10) ? '0' : '';
    str += dd.getHours() + ':';

    str += (dd.getMinutes() < 10) ? '0' : '';
    str += dd.getMinutes();

    return str;
  }

  getNews() {
    return [
      {
        id: 1,
        title: 'Видеокурс ANGULAR CLI',
        titleImg: 'app/images/angular_cli.png',
        publishedOn: new Date(2017, 8, 3, 16, 35),
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
        publishedOn: new Date(2017, 9, 2, 12, 57),
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
        publishedOn: new Date(2017, 10, 10, 23, 59),
        section: 'Git',
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
