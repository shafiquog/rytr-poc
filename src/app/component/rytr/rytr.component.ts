import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-rytr',
  templateUrl: './rytr.component.html',
  styleUrls: ['./rytr.component.css']
})
export class RytrComponent implements OnInit , OnDestroy{


  editor!: Editor;
  html:any;

  data:any
  label1= 'Key Points' ;
  placeholder1 =  'Welcome to Rytr. Are you enjoying the experience?';
  label2= '' ;
  placeholder2 = '';
  public isData = false;

  Businessidea = false;
  hidetopic = true;


  dropdownSettings!: IDropdownSettings ;
  dropdownList :any= [];
 rytrForm : FormGroup;



  constructor(private http : HttpClient , private fb:FormBuilder) {

    this.rytrForm = this.fb.group({
      context : ['', Validators.required],
      topic : ['' ,Validators.required],
      skill : ['',Validators.required],
      interest : ['',Validators.required]


    })
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Blog Idea and Outline' },
      { item_id: 2, item_text: 'Blog Section Writing' },
      { item_id: 3, item_text: 'Brand Name' },
      { item_id: 4, item_text: 'Business Idea' },
      { item_id: 5, item_text: 'Call To Action' },
      { item_id: 6, item_text: 'Email' },
      { item_id: 7, item_text: 'Job Description'},
      { item_id: 8, item_text: 'Call To Action' }

    ];


    this.dropdownSettings = {
      singleSelection: true,
      closeDropDownOnSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.editor = new Editor();





  }
  getcontext() {
          console.log(this.rytrForm.value.context[0]);
    if(this.rytrForm.value.context[0].item_text== 'Business Idea'){
      this.label1 ='Interest';
      this.placeholder1 = 'Marketing Sass';
      this.label2= 'Skills';
      this.placeholder2 = 'copy writing,marketing ,AI'

      this.Businessidea = true;
      this.hidetopic = false;
    }if(this.rytrForm.value.context[0].item_text == 'Email'){
      this.Businessidea = false;
      this.hidetopic = true;
      this.label1= 'Key Points';
      this.placeholder1 = 'Welcome to Rytr. Are you enjoying the experience?'
    }if(this.rytrForm.value.context[0].item_text== 'Cover Letter'){
      this.label1 ='Job Role';
      this.placeholder1 = 'Digital Marketer ';
      this.label2= 'Job Skills';
      this.placeholder2 = 'Blog writing,SEO ,Email'

      this.Businessidea = true;
      this.hidetopic = false;
    }
    if(this.rytrForm.value.context[0].item_text== 'Call To Action'){
      this.Businessidea = false;
      this.hidetopic = true;
      this.label1= 'Description';
      this.placeholder1 = 'An Ai writing assistant that help you automatically generate content for anything.'
    }
    if(this.rytrForm.value.context[0].item_text == 'Job Description'){
      this.Businessidea = false;
      this.hidetopic = true;
      this.label1= 'Job Role';
      this.placeholder1 = 'Product Manager';
    }
  }


  getValue(rytrForm : FormGroup) {


    this.isData = true;

    if(this.rytrForm.value.context[0].item_text == 'Business Idea' ) {

      this.data = {
        "context": 'suggest me the' + ' ' + this.rytrForm.value.context[0].item_text + 'for'+rytrForm.value.interest + 'and'+ rytrForm.value.skill,

      }
    }if(this.rytrForm.value.context[0].item_text == 'Email') {
        this.Businessidea = false;
        this.data = {
          "context": 'write an' + ' ' + this.rytrForm.value.context[0].item_text + ' ' + 'for',
          "topic": rytrForm.value.topic
        }
      }
    if(this.rytrForm.value.context[0].item_text == 'Job Description' ||this.rytrForm.value.context[0].item_text == 'Cover Letter'){
      this.Businessidea = false;
      this.data = {
        "context": 'write a ' + ' ' + this.rytrForm.value.context[0].item_text + ' ' + 'for',
        "topic": rytrForm.value.topic
      }
    } else {
      this.data = {
        "context":  this.rytrForm.value.context[0].item_text  ,
        "topic": rytrForm.value.topic
      }
    }

         console.log('prompt' , this.data);
    this.http.post("https://technoversesms.com/openai-api/api/ai",this.data).subscribe(
      (res:any) =>{
        this.isData = false;
        this.html = res.data;
      });
    this.rytrForm.reset();



    }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
