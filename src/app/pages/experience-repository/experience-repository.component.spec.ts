import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRepositoryComponent } from './experience-repository.component';

describe('ExperienceRepositoryComponent', () => {
  let component: ExperienceRepositoryComponent;
  let fixture: ComponentFixture<ExperienceRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
