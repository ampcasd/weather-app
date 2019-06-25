import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCitySelectorComponent } from './new-city-selector.component';

describe('NewCitySelectorComponent', () => {
  let component: NewCitySelectorComponent;
  let fixture: ComponentFixture<NewCitySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCitySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
