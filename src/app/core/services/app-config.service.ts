import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

export interface AppConfig {
  production: boolean;
  apiUrl: string;
  version: string;
  features: {
    enableAnalytics: boolean;
    enableLogging: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: AppConfig = {
    production: environment.production,
    apiUrl: environment.apiUrl || 'https://api.example.com',
    version: '1.0.0',
    features: {
      enableAnalytics: environment.production,
      enableLogging: !environment.production
    }
  };

  getConfig(): AppConfig {
    return this.config;
  }

  isFeatureEnabled(feature: keyof AppConfig['features']): boolean {
    return this.config.features[feature];
  }
}
