import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {DashLikeAHogSelectors} from "../../Core/Store/dash-like-a-hog/selectors";
import {DashLikeAHogActions} from "../../Core/Store/dash-like-a-hog/actions";
import {Observable} from "rxjs";
import {Specialization, Contract, User, ITask} from "../../types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-edit-page',
  templateUrl: './contract-edit-page.component.html',
  styleUrls: ['./contract-edit-page.component.css']
})
export class ContractEditPageComponent implements OnInit, OnDestroy {
  contract$: Observable<Contract>;
  customersList$: Observable<User[]>;
  contractorsList$: Observable<User[]>;
  tasksList$: Observable<ITask[]>


  contract: Contract | null = null;
  mode: 'Edit' | 'Create' = 'Edit';
  customersList: User[] = [];
  contractorsList: User[] = [];
  tasksList: ITask[] = [];

  form: FormGroup = new FormGroup({
    Contractor: new FormControl(),
    Customer: new FormControl(),
    TaskId: new FormControl(),
    ContractorId: new FormControl(),
    CustomerId: new FormControl()
  })
  constructor(
    private store: Store) {
    this.form.get('Contractor')?.valueChanges.subscribe(value => {
      (value.length > 2) && (this.store.dispatch(new DashLikeAHogActions.GetContractorsRequest(value)))
      this.form.patchValue({
        ContractorId: this.contractorsList.find(contractor => contractor.name === value)
      })
    })
    this.form.get('Customer')?.valueChanges.subscribe(value => {
      (value.length > 2) && (this.store.dispatch(new DashLikeAHogActions.GetCustomersRequest(value)))
      this.form.patchValue({
        CustomerId: this.customersList.find(customers => customers.name === value)
      })
    })





    // @ts-ignore
    this.customersList$ = this.store.select(DashLikeAHogSelectors.customers);
    this.customersList$.subscribe((list) => {
      this.customersList = [...list];
      if(list.length === 1 && !this.form.get('Customer')?.value){
        this.form.patchValue({
          Customer: list[0].name
          }
        )
      }
    })
    // @ts-ignore
    this.contractorsList$ = this.store.select(DashLikeAHogSelectors.contractors);
    this.contractorsList$.subscribe((list) => {
      this.contractorsList = [...list];
      if(list.length === 1 && !this.form.get('Contractor')?.value){
        this.form.patchValue({
            Contractor: list[0].name
          }
        )
      }

    })

    // @ts-ignore
    this.contract$ = this.store.select(DashLikeAHogSelectors.contract);
    this.contract$.subscribe(contract => {
      this.contract = contract;
      this.mode = contract?.id ? 'Edit' : 'Create';
      if(contract) {
        this.store.dispatch(new DashLikeAHogActions.GetContractorsRequest(contract.contractorId));
        this.store.dispatch(new DashLikeAHogActions.GetCustomersRequest(contract.customerId));
        this.form.patchValue({
          TaskId: contract.taskId
        })
      }
    })
    // @ts-ignore
    this.tasksList$ = this.store.select(DashLikeAHogSelectors.tasks);
    this.tasksList$.subscribe(list => {
      this.tasksList = [...list];
    })
    this.store.dispatch(new DashLikeAHogActions.GetTasksRequest(''));

    const id = location.href.split('/').pop();
    if (id !== '0'){
      this.mode = 'Edit';
      this.store.dispatch(new DashLikeAHogActions.GetContractRequest(id))
    } else {
      this.contract = {} as Contract;
      this.mode = 'Create'
    }

  }

  ngOnInit(): void {

  }

  save() {
    const a = {
      contractorId: this.form.get('ContractorId')?.value,
      taskId: this.form.get('TaskId')?.value,
      customerId: this.form.get('CustomerId')?.value,
    }
    if(this.mode === 'Create'){
      this.store.dispatch(new DashLikeAHogActions.CreateContractRequest(a))
    } else {
      this.store.dispatch(new DashLikeAHogActions.UpdateContractRequest({...this.contract, ...a }));
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new DashLikeAHogActions.ResetCurrentContract(''));
    this.store.dispatch(new DashLikeAHogActions.ResetContractors(''));
    this.store.dispatch(new DashLikeAHogActions.ResetCustomers(''));
  }

  public get isSaveEnabled () {
    return this.form.valid && this.form.get('ContractorId')?.value && this.form.get('TaskId')?.value;
  }

}
