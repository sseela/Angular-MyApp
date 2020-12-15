import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Notes } from '../models/Notes.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  notesList: Set<Notes>;
  searchText: string;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAllNotes().subscribe(
      res => this.notesList = res
    );

  }

  search() {
    this.service.getNotesByTitle(this.searchText).subscribe(
      res => this.notesList = res
    );
  }

}
