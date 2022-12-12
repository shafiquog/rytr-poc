import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rytr',
  templateUrl: './rytr.component.html',
  styleUrls: ['./rytr.component.css']
})
export class RytrComponent implements OnInit , OnDestroy{


  editor!: Editor;
  html:any;
  context = '';
  topic = '';


  data:any






  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.editor = new Editor();





  }
  getcontext() {
    if(this.context == 'Business Idea'){
      this.Businessidea = true;
      this.hidetopic = false;
    }else{
      this.Businessidea = false;
    }
  }

  public isData = true;
  interest: any;
  skill: any;
  Businessidea = false;
  hidetopic = true;
  getValue() {
    console.log('context', this.context);
    console.log('topic', this.topic);
    this.isData = false;

    if(  this.context == 'Business Idea' ) {


      this.data = {
        "context": 'suggest me the' + ' ' + this.context + 'for'+this.interest + 'and'+ this.skill,

      }
    }
      if(this.context == 'Email') {
        this.Businessidea = false;
        this.data = {
          "context": 'write an' + ' ' + this.context + ' ' + 'for',
          "topic": this.topic
        }
      }
    if(this.context == 'Job Description' || this.context == 'Cover Letter'){
      this.Businessidea = false;
      this.data = {
        "context": 'write a ' + ' ' + this.context + ' ' + 'for',
        "topic": this.topic
      }
    }






    this.http.post("https://technoversesms.com/openai-api/api/ai",this.data).subscribe(
      (res:any) =>{
        console.log(res);
        this.isData = true;
        this.html = res.data;
      });



    }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
