import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(private http : HttpClient ) { }


  generateText( data:any){
   return  this.http.post(environment.apiBaseUrl+ 'openai-api/api/ai',data);

  }

  generateImg (data:any){

    return this.http.post( 'http://127.0.0.1:8000/api/ai/img' , data);
  }


  getUsecases(){
    return this.http.get( 'http://127.0.0.1:8000/api/usecase' );
  }

  getActionlist(){
    return this.http.get( 'http://127.0.0.1:8000/api/action' );
  }
}
