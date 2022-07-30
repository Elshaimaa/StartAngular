import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({
    'fName':new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'phone':new FormControl('',[Validators.required]),
    'message':new FormControl('',[Validators.required])
  })
  submitForm(){
    if(this.registerForm.invalid){
      // print(this.registerForm.controls['fName'].invalid)
      return;
    }
    alert("submited")
    console.log(this.registerForm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
