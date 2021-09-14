import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { StoreModule } from '@ngrx/store';
import {DashLikeAHogReducer} from "./Core/Store/dash-like-a-hog/reducers";
import {StoreEffectsModule} from "./Core/Store/effects.module";
import {ContractorsContainer} from "./contractors/contractors.container";
import {metaReducers} from "./Core/Store/root-reducer";

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ContractorsComponent,
    ContractorsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    StoreModule.forRoot({dashLikeAHog: DashLikeAHogReducer}, { metaReducers }),
    StoreEffectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
