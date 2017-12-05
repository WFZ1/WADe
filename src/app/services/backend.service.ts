import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
    constructor(private http: HttpClient) {}

    public getArticleList():  Observable<Model.Article[]> {
        return this.http.get('../../assets/article-list.json').map(data  => {
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
        });
    }
}
