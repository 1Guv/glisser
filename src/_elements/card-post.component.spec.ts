import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';

import { CardPostComponent } from './card-post.component';

describe('CardPostComponent', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPostComponent ],
      imports: [MatIconModule, MatCardModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
