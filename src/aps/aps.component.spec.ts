import { TestBed } from '@angular/core/testing';
import { ApsComponent } from './aps.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ApsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ApsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NikhilKumarAman'`, () => {
    const fixture = TestBed.createComponent(ApsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NikhilKumarAman');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ApsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('NikhilKumarAman app is running!');
  });
});
