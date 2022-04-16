import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsSearchComponent } from './builds-search.component';

describe('BuildsSearchComponent', () => {
  let component: BuildsSearchComponent;
  let fixture: ComponentFixture<BuildsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
