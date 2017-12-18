import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-fullstory',
  templateUrl: './fullstory.component.html',
  styleUrls: ['./fullstory.component.css']
})
export class FullstoryComponent implements OnDestroy {

  routeSubscription: Subscription;
  article: Model.Fullstory;
  id: number;

  constructor(private activateRoute: ActivatedRoute, private ar: ArticleService) {
    this.routeSubscription = activateRoute.params.subscribe(pars => this.article = this.ar.getArticle(+pars['id']));
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
