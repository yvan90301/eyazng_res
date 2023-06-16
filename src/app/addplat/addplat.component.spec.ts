import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplatComponent } from './addplat.component';

describe('AddplatComponent', () => {
  let component: AddplatComponent;
  let fixture: ComponentFixture<AddplatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddplatComponent]
    });
    fixture = TestBed.createComponent(AddplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
