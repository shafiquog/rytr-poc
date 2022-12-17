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
}
