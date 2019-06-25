import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCitySelectorComponent } from './newest-city-selector.component';

describe('NewestCitySelectorComponent', () => {
  let component: NewestCitySelectorComponent;
  let fixture: ComponentFixture<NewestCitySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestCitySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestCitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
