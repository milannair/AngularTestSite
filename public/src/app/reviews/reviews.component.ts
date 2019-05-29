import { HttpService } from './../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  currentId: any;
  currentRes: any;
  listOfReviews : any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentId = params.id;
    });
    this.currentRes = {name:"", cuisine:"", reviews: []  }
    this.getReviews(this.currentId);
  }

  getReviews(id){
    let observable = this._httpService.getOneRes(this.currentId);
    observable.subscribe(data => {
      this.currentRes = data;
      this.listOfReviews = this.currentRes.reviews;
    });
  }

}
