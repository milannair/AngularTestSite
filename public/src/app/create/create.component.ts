import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newRes: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.newRes= {name :"", cuisine :"", reviews: []}
  }

  onSubmit(){
    let observable = this._httpService.addRes(this.newRes);
    observable.subscribe(data => {
      console.log("got res")
      this.newRes = data;
    });
    this.newRes = {name :"", type :"", description:"", skill: []};
    this._router.navigate(['/restaurants']);
  }


}
