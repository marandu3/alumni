import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { ToastModule } from 'primeng/toast';
import { importProvidersFrom } from '@angular/core';
import { MessageService } from 'primeng/api';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    importProvidersFrom(ToastModule, MessageService), // 👈 Import PrimeNG Toast globally
    MessageService ,// 👈 Make MessageService available to inject
    provideHttpClient() // 👈 Provide HttpClient globally
  ]
};
