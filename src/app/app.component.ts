import { Component,OnInit,OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
     ngOnInit(): void {
       alert("Hi");
     }
     @ViewChild("f")  frm:NgForm;

     constructor(frm:NgForm) {this.frm=frm;}
     ngOnDestroy(): void {
       alert("bye bye");
     }
     onsubmit(frm:NgForm) {
        console.log(frm.value.courseName+" "+frm.value.courseDesc);
     }
     onclear(frm:NgForm) {
        frm.reset();
     }
}
