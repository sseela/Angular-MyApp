import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from './models/Notes.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public saveNotes(notes: Notes): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:9000/api/saveNotes', notes);
  }

  public getAllNotes(): Observable<Set<Notes>> {
    return this.http.get<Set<Notes>>('http://localhost:9000/api/getNotes');
  }

  public getNotesByTitle(title: string): Observable<Set<Notes>> {
    let params = new HttpParams();
    params =  params.append('title', title);
    return this.http.get<Set<Notes>>('http://localhost:9000/api/getNotes', {params: params});
  }

  public fileUpload(file: File) {
    let name = file.name;
    const formData = new FormData();
    formData.append('file', file, name);
    return this.http.post('http://localhost:9000/api/upload', formData);
  }
}
