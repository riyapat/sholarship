import { TestBed } from '@angular/core/testing';
import { AppsComponent } from './apps.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NikhilKumarAman'`, () => {
    const fixture = TestBed.createComponent(AppsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NikhilKumarAman');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('NikhilKumarAman app is running!');
  });
});
