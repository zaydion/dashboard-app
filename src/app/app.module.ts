import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleModule } from 'angular2-collapsible';
import { ReplacePipe } from 'app/replace.pipe';

import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { DataSourceService } from './datasource.service';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import { DataSourceDetailComponent } from './data-source-detail/data-source-detail.component';
import { DataSetListComponent } from './data-set-list/data-set-list.component';
import { DataSetDetailComponent } from './data-set-detail/data-set-detail.component';
import { ChartBuilderComponent } from './chart-builder/chart-builder.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FieldListComponent } from './field-list/field-list.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: ChartDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    SidebarMenuComponent,
    DataSourceListComponent,
    DataSourceDetailComponent,
    DataSetListComponent,
    DataSetDetailComponent,
    ChartBuilderComponent,
    NavBarComponent,
    FieldListComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule,
    MaterializeModule,
    BrowserAnimationsModule,
    CollapsibleModule
  ],
  providers: [DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
