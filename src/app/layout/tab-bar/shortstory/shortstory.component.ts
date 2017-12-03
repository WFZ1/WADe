import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shortstory',
  templateUrl: './shortstory.component.html',
  styleUrls: ['./shortstory.component.css']
})
export class ShortstoryComponent implements OnInit {

  news: Array<Model.News>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../../assets/article-list.json').map(data  => {

      const arr = data as Array<any>; // преобразование к типу Array

      for (let i = 0; i < arr.length; i++) {
          const dd = arr[i].publishedOn;
          const dd2 = arr[i].comments[0].publishedOn;
          const dd3 = arr[i].comments[1].publishedOn;

          arr[i].publishedOn = new Date(dd[0], dd[1], dd[2], dd[3], dd[4]);
          arr[i].comments[0].publishedOn = new Date(dd2[0], dd2[1], dd2[2]);
          arr[i].comments[1].publishedOn = new Date(dd3[0], dd3[1], dd3[2]);
      }
      return arr;
    }).subscribe((data: Model.News[]) => this.news = data);
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
}
