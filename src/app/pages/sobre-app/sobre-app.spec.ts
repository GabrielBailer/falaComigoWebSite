import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreApp } from './sobre-app';

describe('SobreApp', () => {
  let component: SobreApp;
  let fixture: ComponentFixture<SobreApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreApp],
    }).compileComponents();

    fixture = TestBed.createComponent(SobreApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
