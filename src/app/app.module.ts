import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveRequestFormComponent } from './leave-request-form/leave-request-form.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveBalanceDisplayComponent } from './leave-balance-display/leave-balance-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveRequestFormComponent,
    LeaveHistoryComponent,
    LeaveBalanceDisplayComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
