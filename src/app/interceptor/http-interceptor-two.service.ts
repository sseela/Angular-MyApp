import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorTwoService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({headers: req.headers.set('Accept', 'application/json')});
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse) {
        console.log(event);
      }
      return event;
    }))}


}
