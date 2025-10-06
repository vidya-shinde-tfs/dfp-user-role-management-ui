import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  
  get production(): boolean {
    return environment.production;
  }
  
  get apiUrl(): string {
    return environment.apiUrl || '';
  }
  
  get version(): string {
    return environment.version || '1.0.0';
  }
}
