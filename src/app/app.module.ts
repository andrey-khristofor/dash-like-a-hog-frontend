import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import {DashLikeAHogReducer} from "./Core/Store/dash-like-a-hog/reducers";
import {StoreEffectsModule} from "./Core/Store/effects.module";
import {UsersContainer} from "./users/users.container";
import {metaReducers} from "./Core/Store/root-reducer";
import { UserEditPageComponent } from './users/user-edit-page/user-edit-page.component';
import {MaterialModule} from "./material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SpecializationEditPageComponent} from "./specializations/specialization-edit-page/specialization-edit-page.component";
import {SpecializationsComponent} from "./specializations/specializations.component";
import {SpecializationsContainer} from "./specializations/specializations.container";
import {CurrencyEditPageComponent} from "./currencies/currency-edit-page/currency-edit-page.component";
import {CurrenciesContainer} from "./currencies/currencies.container";
import {CurrenciesComponent} from "./currencies/currencies.component";
import {TasksComponent} from "./tasks/tasks.component";
import {TasksContainer} from "./tasks/tasks.container";
import {TaskEditPageComponent} from "./tasks/task-edit-page/task-edit-page.component";
import {ContractEditPageComponent} from "./contracts/contract-edit-page/contact-edit-page.component";
import {ContractsContainer} from "./contracts/contracts.container";
import {ContractsComponent} from "./contracts/contracts.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersContainer,
    UserEditPageComponent,
    SpecializationEditPageComponent,
    SpecializationsComponent,
    SpecializationsContainer,
    CurrenciesComponent,
    CurrenciesContainer,
    CurrencyEditPageComponent,
    TasksComponent,
    TasksContainer,
    TaskEditPageComponent,
    ContractEditPageComponent,
    ContractsContainer,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({dashLikeAHog: DashLikeAHogReducer}, { metaReducers }),
    StoreEffectsModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
