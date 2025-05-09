import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoteComponent } from './home-note.component';

describe('HomeNoteComponent', () => {
  let component: HomeNoteComponent;
  let fixture: ComponentFixture<HomeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
