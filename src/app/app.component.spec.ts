import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Configure and initialize the TestBed with required modules and component declarations
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act & Assert
    expect(app).toBeTruthy();
    // The component should be successfully created
  });

  it(`should have a title of 'Angular Todo Application'`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Act & Assert
    expect(app.title).toEqual('Angular Todo Application');
    // The component's title property should match the expected value
  });

  it('should render the title', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // Act & Assert
    expect(compiled.querySelector('.title')?.textContent).toContain('Angular Todo Application');
    // The rendered HTML should contain the component's title
  });
});
