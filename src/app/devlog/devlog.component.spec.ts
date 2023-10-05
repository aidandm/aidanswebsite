import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlogComponent } from './devlog.component';

describe('DevlogComponent', () => {
  let component: DevlogComponent;
  let fixture: ComponentFixture<DevlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevlogComponent]
    });
    fixture = TestBed.createComponent(DevlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
