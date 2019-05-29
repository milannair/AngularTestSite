import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRes: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAllRes();
  }

  getAllRes(){
    let observable = this._httpService.getAllRes();
    observable.subscribe(data => {
      console.log("got restaurants");
      this.allRes = data;
    });
  }

  onButtonClick(id){
      let observable = this._httpService.deleteOneRes(id);
      observable.subscribe(data => {
        console.log('deleted restaurant');
      });
      let observable1 = this._httpService.getAllRes();
      observable1.subscribe(data => {
      console.log("got restaurants");
      this.allRes = data;
      });
      this._router.navigate(['/restaurants']);
  }
}
