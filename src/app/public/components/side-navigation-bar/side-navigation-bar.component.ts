import {Component, inject, OnInit} from '@angular/core';
import {Source} from '../../../news/model/source.entity';
import {Article} from '../../../news/model/article.entity';
import {NewsApiService} from '../../../news/services/news-api.service';
import {LogoApiService} from '../../../shared/services/logo-api.service';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {ArticleListComponent} from '../../../news/components/article-list/article-list.component';
import {FooterContentComponent} from '../footer-content/footer-content.component';
import {SourceListComponent} from '../../../news/components/source-list/source-list.component';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-side-navigation-bar',
  imports: [
    MatSidenavModule,
    MatToolbar,
    ArticleListComponent,
    FooterContentComponent,
    SourceListComponent,
    LanguageSwitcherComponent,
    MatIconButton,
    MatSidenav,
    MatIconModule
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);
  ngOnInit() {
    this.newsApi.getSources().subscribe(sources => {
      console.log(sources);
      this.sources = sources;
      this.sources.forEach(source => source.urlToLogo = this.logoApi.getUrlToLogo(source));
      console.log(this.sources);
      this.searchArticlesForSource(this.sources[0]);
    });
  }

  searchArticlesForSource(source: Source) {
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe( articles => {
        this.articles = articles;
        this.articles.forEach((article: { source: { urlToLogo: any; url: any; }; }) => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      });
  }

  onSourceSelected(source: Source) {
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

}
