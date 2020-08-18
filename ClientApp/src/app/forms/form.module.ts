import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BasicElementsComponent } from './basic-elements/basic-elements.component';

const routes: Routes = [
  { path: 'basic-elements', component: BasicElementsComponent },
];

@NgModule({
  declarations: [BasicElementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
})
export class FormModule { }
