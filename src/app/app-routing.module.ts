import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractorsComponent} from "./contractors/contractors.component";
import {CustomersComponent} from "./customers/customers.component";
import {ContractorsContainer} from "./contractors/contractors.container";

const routes: Routes = [{ path: 'customers', component: CustomersComponent },
  { path: 'contractors', component: ContractorsContainer },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
