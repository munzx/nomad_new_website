import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomadVideoComponent } from './nomad-video.component';

describe('NomadVideoComponent', () => {
  let component: NomadVideoComponent;
  let fixture: ComponentFixture<NomadVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomadVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomadVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
