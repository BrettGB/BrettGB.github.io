import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/views/home/home.component';
import { EngravingsSearchComponent } from './engravings/views/engravings-search/engravings-search.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'engravings',
		component: EngravingsSearchComponent,
		loadChildren: () => import('../app/engravings/engravings.module').then(m => m.EngravingsModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
