import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApsModule } from './aps/aps.module';
import { AppsModule } from './apps/apps.module';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(AppsModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(ApsModule)
  .catch(err => console.error(err));
