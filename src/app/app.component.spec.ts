import { TestBed, async } from '@angular/core/testing';
import { MatCardModule, MatIconModule } from '@angular/material';
import { CardPostComponent } from 'src/_elements/card-post.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardPostComponent],
      imports: [MatCardModule, MatIconModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
