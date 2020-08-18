import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlankPageComponent } from './blank-page/blank-page.component';

const routes: Routes = [
  { path: 'blank-page', component: BlankPageComponent },
];

@NgModule({
  declarations: [BlankPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
})
export class GeneralPagesModule { }
