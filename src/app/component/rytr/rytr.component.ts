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
  public isData = true;
  getValue() {
    console.log('context', this.context);
    console.log('topic', this.topic);
    this.isData = false;
    let data = {
      "context": this.context,
      "topic": this.topic
    }
  this.http.post("https://technoversesms.com/openai-api/api/ai",data).subscribe(
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
