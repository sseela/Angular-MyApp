import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DisplayComponent } from './display/display.component';
import { FileUploadDownloadComponent } from './file-upload-download/file-upload-download.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'display', component: DisplayComponent},
  {path: 'file', component: FileUploadDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
