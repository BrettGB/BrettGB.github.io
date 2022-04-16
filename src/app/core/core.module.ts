import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './views/core/core.component';
import { ClarityModule } from '@clr/angular';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';



@NgModule({
  declarations: [
    CoreComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
