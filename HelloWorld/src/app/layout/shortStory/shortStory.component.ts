import { Component, OnInit } from '@angular/core';
// import * as Model from '../../model/model'; 

@Component({
  selector: 'app-shortstory',
  templateUrl: './shortStory.component.html',
  styleUrls: ['./shortStory.component.css']
})
export class ShortStoryComponent implements OnInit {

  news: Array<any>;

  constructor() { }

  ngOnInit() {
    this.news = this.getNews();
    console.log(this.news);
  }


  getNews() {
    return [
      {
        id: 1,
        title: 'blal',
        publishedOn: new Date(2017, 11, 2),
        summary: 'srgfdgfdg',
        titleImg: '',
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
        author: 'Pasha',
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
        title: 'aaaaaa',
        publishedOn: new Date(2017, 11, 2),
        summary: 'srgfdgfdg',
        titleImg: '',
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
        author: 'Pasha',
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
