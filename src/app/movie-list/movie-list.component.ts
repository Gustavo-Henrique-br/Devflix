import { Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';


import { MoviesService } from "../service/api.service";
import { Movie, Res } from "../service/api.interface"

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() title: string = "";

  public carousel: NguCarouselConfig = {
    grid: { xs: 2, sm: 4, md: 5, lg: 1, xl:6, all: 0 },
    speed: 100,
    point: {
      visible: true
    },
    load: 4,
    loop: true,
    touch: true,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  };
  constructor(
    private movieService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.fetchTrending();
  }

  fetchTrending() {
    return this.movieService.getTrending().subscribe((res: Res) => {
      console.log(res.results);
      this.movies = res.results;
    })
  }

}
