import { A11yModule } from '@angular/cdk/a11y';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';
import { CustomTitleStrategy } from './app/a11y-title-strategy';
import { AppComponent } from './app/app.component';
import { routes } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),importProvidersFrom(BrowserModule, ReactiveFormsModule, A11yModule),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
}).catch((err) => console.error(err));
