import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotetransComponent } from './remotetrans.component';

describe('RemotetransComponent', () => {
  let component: RemotetransComponent;
  let fixture: ComponentFixture<RemotetransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemotetransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemotetransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
