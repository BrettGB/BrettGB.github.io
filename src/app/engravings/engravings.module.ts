import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngravingsSearchComponent } from './views/engravings-search/engravings-search.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ClarityIcons } from '@clr/icons';
import { EngravingsStatsSearchComponent } from './views/engravings-stats-search/engravings-stats-search.component';



@NgModule({
  declarations: [
    EngravingsSearchComponent,
    EngravingsStatsSearchComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule
    ]
})
export class EngravingsModule { }
