import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngravingsSearchComponent } from './views/engravings-search/engravings-search.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ClarityIcons } from '@clr/icons';



@NgModule({
  declarations: [
    EngravingsSearchComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule
    ]
})
export class EngravingsModule { }
