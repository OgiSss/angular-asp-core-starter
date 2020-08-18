import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicTableComponent } from './basic-table/basic-table.component';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent },
];

@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class TablesModule { }
