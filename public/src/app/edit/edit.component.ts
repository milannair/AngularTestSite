import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentId: any;
  editRes: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currentId = params.id;
    });
    this.editRes = {name :"", cuisine :"", reviews: []}
    this.getCurrentRes(this.currentId);

  }

  getCurrentRes(id){
    let observable = this._httpService.getOneRes(id);
    observable.subscribe(data => {
      this.editRes = data;
    });
  }

  onSubmit(){
    let observable = this._httpService.updateRes(this.currentId, this.editRes);
    observable.subscribe(data => {
      this.editRes = data;
    });
    this.editRes = {name :"", cuisine :"", reviews: []};
    this._router.navigate(['restaurants']);
  }

}
