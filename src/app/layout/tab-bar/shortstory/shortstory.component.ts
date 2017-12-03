import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-shortstory',
  templateUrl: './shortstory.component.html',
  styleUrls: ['./shortstory.component.css']
})
export class ShortstoryComponent implements OnInit {

  articles: Array<Model.Article>;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.backend.getArticleList().subscribe((data: Model.Article[]) => this.articles = data);
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
