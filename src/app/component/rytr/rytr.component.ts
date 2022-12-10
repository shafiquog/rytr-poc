import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

import { HttpClient } from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-rytr',
  templateUrl: './rytr.component.html',
  styleUrls: ['./rytr.component.css']
})
export class RytrComponent implements OnInit , OnDestroy{


  editor!: Editor;
  html:any;
context:any;
topic: any;


  data:any


  constructor(private http : HttpClient ,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.editor = new Editor();





  }

  getValue() {

    this.spinner.show();
  this.http.post("https://technoversesms.com/openai-api/api/ai" +this.context , + this.topic).subscribe(
    (res:any) =>{
    console.log(res);


    this.html = res.data;
      this.spinner.hide();
    });

    this.spinner.hide();
    }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
