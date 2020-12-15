import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DatePipe } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { FileUploadDownloadComponent } from './file-upload-download/file-upload-download.component';
import { HttpInterceptorService } from './interceptor/http-interceptor.service';
import { HttpInterceptorTwoService } from './interceptor/http-interceptor-two.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DisplayComponent,
    FileUploadDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe,
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTwoService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
