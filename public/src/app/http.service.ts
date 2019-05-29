import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllRes(){
    return this._http.get('/allRes');
  }

  addRes(newRes){
    return this._http.post('/res/create', newRes);
  }

  getOneRes(id){
    return this._http.get('/res/' + id.toString());
  }

  deleteOneRes(id){
    return this._http.delete('/res/' + id)
  }

  updateRes(id, update){
    return this._http.patch('/res/' + id, update);
  }

  addReview(id, review){
    return this._http.post('/res/' + id + '/review/create', review);
  }




}
