import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleuresComponent } from './meilleures.component';

describe('MeilleuresComponent', () => {
  let component: MeilleuresComponent;
  let fixture: ComponentFixture<MeilleuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeilleuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
