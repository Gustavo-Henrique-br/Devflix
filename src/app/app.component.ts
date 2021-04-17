import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { MoviesService } from "./service/api.service";
import { Movie, Res } from "./service/api.interface"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public trending: Movie[] = [];
  public top: Movie;

  constructor(
    private movieService: MoviesService,
    @Inject(DOCUMENT) document: HTMLDocument,
  ) { }

  ngOnInit(): void {
    this.fetchTrending();
  }

  fetchTrending() {
    return this.movieService.getTrending().subscribe((res: Res) => {
      console.log(res.results)
      this.trending = res.results;
      this.top = res.results[0];
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    const element = document.querySelector("app-header");
    if (window.pageYOffset > 530) element.classList.add('sticky');
    else element.classList.remove('sticky');
    console.log(element)
  }
}
