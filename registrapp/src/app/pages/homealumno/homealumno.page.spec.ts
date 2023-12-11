import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomealumnoPage } from './homealumno.page';

describe('HomealumnoPage', () => {
  let component: HomealumnoPage;
  let fixture: ComponentFixture<HomealumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomealumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
