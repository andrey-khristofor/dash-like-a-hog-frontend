import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationEditPageComponent } from './specialization-edit-page.component';

describe('UserEditPageComponent', () => {
  let component: SpecializationEditPageComponent;
  let fixture: ComponentFixture<SpecializationEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
