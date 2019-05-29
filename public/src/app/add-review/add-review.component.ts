import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  currentId: any;
  newReview : any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentId = params.id;
    });
    this.newReview = {name:"", stars:"", review:""}
  }

  onSubmit(){
    let observable = this._httpService.addReview(this.currentId, this.newReview);
    observable.subscribe(data => {
      console.log("added review")
      this.newReview = data;
    });
    this.newReview = {name:"", stars:"", review:""};
    this._router.navigate(['/restaurants']);

  }

}
