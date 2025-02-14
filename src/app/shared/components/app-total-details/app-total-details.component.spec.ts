import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTotalDetailsComponent } from './app-total-details.component';

describe('AppTotalDetailsComponent', () => {
  let component: AppTotalDetailsComponent;
  let fixture: ComponentFixture<AppTotalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTotalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTotalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
