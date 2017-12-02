import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-fullstory',
  templateUrl: './fullstory.component.html',
  styleUrls: ['./fullstory.component.css']
})
export class FullstoryComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.routeSubscription = activateRoute.params.subscribe((pars) => this.id = +pars['id']);
  }

  articles: Array<any>;

  ngOnInit() {
    this.articles = [
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
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
