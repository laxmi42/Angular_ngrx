import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNgrxComponent } from './sample-ngrx.component';

describe('SampleNgrxComponent', () => {
  let component: SampleNgrxComponent;
  let fixture: ComponentFixture<SampleNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleNgrxComponent]
    });
    fixture = TestBed.createComponent(SampleNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
