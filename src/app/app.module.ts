import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { DataSourceService } from './datasource.service';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { ChartBuilderComponent } from './chart-builder/chart-builder.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: ChartDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    SimpleDropdownComponent,
    ChartBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule
  ],
  providers: [DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
