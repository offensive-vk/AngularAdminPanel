import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoadingSkeletonComponent } from './form-loading-skeleton.component';

describe('FormLoadingSkeletonComponent', () => {
  let component: FormLoadingSkeletonComponent;
  let fixture: ComponentFixture<FormLoadingSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoadingSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoadingSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
