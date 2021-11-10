import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersContainer} from "./users/users.container";
import {UserEditPageComponent} from "./users/user-edit-page/user-edit-page.component";
import {SpecializationEditPageComponent} from "./specializations/specialization-edit-page/specialization-edit-page.component";
import {SpecializationsContainer} from "./specializations/specializations.container";
import {CurrenciesContainer} from "./currencies/currencies.container";
import {CurrencyEditPageComponent} from "./currencies/currency-edit-page/currency-edit-page.component";
import {TasksContainer} from "./tasks/tasks.container";
import {TaskEditPageComponent} from "./tasks/task-edit-page/task-edit-page.component";
import {ContractsContainer} from "./contracts/contracts.container";
import {ContractEditPageComponent} from "./contracts/contract-edit-page/contact-edit-page.component";

const routes: Routes = [
  {
    path: 'users', component: UsersContainer, pathMatch: 'full',
  }, {
    path: "user/:id",
    component: UserEditPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'specializations', component: SpecializationsContainer, pathMatch: 'full',
  }, {
    path: "specialization/:id",
    component: SpecializationEditPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'currencies', component: CurrenciesContainer, pathMatch: 'full',
  }, {
    path: "currency/:id",
    component: CurrencyEditPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'tasks', component: TasksContainer, pathMatch: 'full',
  }, {
    path: "task/:id",
    component: TaskEditPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'contracts', component: ContractsContainer, pathMatch: 'full',
  }, {
    path: "contract/:id",
    component: ContractEditPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
