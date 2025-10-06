import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  function loadScript(url: string, callback: (() => void) | null) {
  const node = document.createElement('script');
  node.src = url;
  node.type = 'text/javascript';
  node.charset = 'utf-8';
  if (callback) {
    node.onload = callback;
  }
  document.getElementsByTagName('head')[0].appendChild(node);
}

const dynamicScripts = [
  {
    url: '/apps/amp/scripts/ampsdk-min.js',
    callback: null,
  },
];

for (const script of dynamicScripts) {
  loadScript(script.url, script.callback);
}