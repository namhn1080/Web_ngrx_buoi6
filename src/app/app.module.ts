import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { articlesReducer } from 'src/reducer/articles.reducer';
import{HttpClientModule} from '@angular/common/http';
import { ArticleEffects } from 'src/effects/articles.effect';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        articles: articlesReducer,

      },
      {}
    ),
    EffectsModule.forRoot([
     ArticleEffects, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
