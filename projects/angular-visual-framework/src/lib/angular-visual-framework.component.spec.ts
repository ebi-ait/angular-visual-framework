import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVisualFrameworkComponent } from './angular-visual-framework.component';

describe('AngularVisualFrameworkComponent', () => {
  let component: AngularVisualFrameworkComponent;
  let fixture: ComponentFixture<AngularVisualFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularVisualFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularVisualFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
