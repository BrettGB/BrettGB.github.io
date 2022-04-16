import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildsSearchComponent } from './views/builds-search/builds-search.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuildsSearchComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule
  ]
})
export class BuildsModule { }
