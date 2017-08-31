import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterComponent } from './adopter.component';

describe('AdopterComponent', () => {
  let component: AdopterComponent;
  let fixture: ComponentFixture<AdopterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});