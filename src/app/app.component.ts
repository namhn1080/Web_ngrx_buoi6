import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Article, ArticlesState } from 'src/states/articles.state';
import * as ArticleActions from '../action/articles.action';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$: Observable<Article[]>;
  constructor(private store: Store<{ articles:ArticlesState}>){
    this.articles$=this.store.select((state)=>state.articles.list)
  }
  title = 'ngrx';

  loadArticles(){
    this.store.dispatch(ArticleActions.getPaginate({
      page: 1,
      perPage:10,
    }));
  }

}
