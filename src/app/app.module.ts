import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { IncomingOrderComponent } from './incoming-order/incoming-order.component';
import { IssuingComponent } from './issuing/issuing.component';
import { CreateIssueOrderComponent } from './create-issue-order/create-issue-order.component';
import { IssueOrderListComponent } from './issue-order-list/issue-order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ItemDetailsComponent,
    AddItemComponent,
    ReceivingComponent,
    IncomingOrderComponent,
    IssuingComponent,
    CreateIssueOrderComponent,
    IssueOrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
