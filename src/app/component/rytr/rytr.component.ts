import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-rytr',
  templateUrl: './rytr.component.html',
  styleUrls: ['./rytr.component.css']
})
export class RytrComponent implements OnInit , OnDestroy{
 

  editor!: Editor;
  html:any;
usecase: any;
keypoint: any;


// data
data= [
  {
    "id": "cmpl-6L38aQOlrkDoCIwn9js1du5QPP7xR",
    "object": "text_completion",
    "created": 1670474968,
    "choices": [
      {
        "text": "The",
        "index": 0,
        "logprobs": null,
        "finish_reason": null
      }
    ],
    "model": "text-davinci-003"
  },
  {
    "id": "cmpl-6L38aQOlrkDoCIwn9js1du5QPP7xR",
    "object": "text_completion",
    "created": 1670474968,
    "choices": [
      {
        "text": "Angular",
        "index": 0,
        "logprobs": null,
        "finish_reason": null
      }
    ],
    "model": "text-davinci-003"
  },
 {
    "id": "cmpl-6L38aQOlrkDoCIwn9js1du5QPP7xR",
    "object": "text_completion",
    "created": 1670474968,
    "choices": [
      {
        "text": "Devloper",
        "index": 0,
        "logprobs": null,
        "finish_reason": null
      }
    ],
    "model": "text-davinci-003"
  },
 {
    "id": "cmpl-6L38aQOlrkDoCIwn9js1du5QPP7xR",
    "object": "text_completion",
    "created": 1670474968,
    "choices": [
      {
        "text": "code",
        "index": 0,
        "logprobs": null,
        "finish_reason": null
      }
    ],
    "model": "text-davinci-003"
  }
]










  constructor( ) { }

  ngOnInit(): void {
    this.editor = new Editor();
     
    
    
    
     

// concat string
let test = '';
this.data.forEach((currentValue, index) => {
  test+=currentValue.choices[0].text;
  this.html = test
});



  }

  getValue() {
   console.log(this.usecase , this.keypoint);
   console.log(this.html);

   
   
    }
 
  ngOnDestroy(): void {
    this.editor.destroy();
  }
 
}
