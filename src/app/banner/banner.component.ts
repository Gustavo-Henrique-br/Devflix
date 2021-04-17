import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../service/api.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() movie: Movie = {
    backdrop_path: "",
    title: "",
    id: 0,
    original_language: "",
    release_date: "",
    overview: "",
    original_title: ""
  };

  public title: string = "";

  ngOnInit(): void {
    if(this.movie) {
      this.title = this.movie.title || this.movie.original_title;
    }
  }

}
