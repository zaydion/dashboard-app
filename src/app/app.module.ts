import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplacePipe } from 'app/replace.pipe';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { DataSourceService } from './datasource.service';
import { ChartBuilderComponent } from './chart-builder/chart-builder.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DataSourcesComponent } from './data-sources/data-sources.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { DataSetsComponent } from './data-sets/data-sets.component';
import { DataSetComponent } from './data-set/data-set.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: ChartDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    ChartBuilderComponent,
    SidebarMenuComponent,
    DataSourcesComponent,
    DataSourceComponent,
    DataSetsComponent,
    DataSetComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule,
    MaterializeModule,
    BrowserAnimationsModule
  ],
  providers: [DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
