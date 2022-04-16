import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildsSearchComponent } from './builds/views/builds-search/builds-search.component';
import { HomeComponent } from './core/views/home/home.component';
import { EngravingsSearchComponent } from './engravings/views/engravings-search/engravings-search.component';
import { EngravingsStatsSearchComponent } from './engravings/views/engravings-stats-search/engravings-stats-search.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'engravings',
		component: EngravingsSearchComponent,
		loadChildren: () => import('../app/engravings/engravings.module').then(m => m.EngravingsModule)
	},
    {
		path: 'engravings-stats',
		component: EngravingsStatsSearchComponent,
		loadChildren: () => import('../app/engravings/engravings.module').then(m => m.EngravingsModule)
	},
	{
		path: 'builds',
		component: BuildsSearchComponent,
		loadChildren: () => import('../app/builds/builds.module').then(m => m.BuildsModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
