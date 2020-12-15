import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getLocaleDateTimeFormat, DatePipe, formatDate } from '@angular/common';
import { ServiceService } from '../service.service';
import { Notes } from '../models/Notes.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm: FormGroup;
  todayDate: string;
  notes: Notes = new Notes();
  message: string;
  count: number = 1;
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private service: ServiceService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: this.fb.control("", [Validators.required]),
      description: this.fb.control("", [Validators.required]),
      tags: this.fb.control(""),
      remainder: this.fb.control("")
    });
  }

  onSubmit() {
   this.todayDate = this.datePipe.transform(new Date().toDateString(), 'yyyy-MM-dd');
   if (this.todayDate === this.myForm.controls['remainder'].value) {
     alert('remainder is set for today only');
   }

   this.notes.id = this.count++;
   this.notes.title = this.myForm.controls['title'].value;
   this.notes.description = this.myForm.controls['description'].value;
   this.notes.tags = this.myForm.controls['tags'].value;
   this.notes.remainder = this.myForm.controls['remainder'].value;
   this.notes.creationDate = this.todayDate;

   this.service.saveNotes(this.notes).subscribe(
     res => console.log(res),
     e => {
       if (e.status !== 200) {
        this.message = e.error.message;
       } else {
        this.message = e.error.text;
       }
      });
  }

}
