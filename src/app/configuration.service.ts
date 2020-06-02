import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  logging: boolean;

  constructor(private httpClient: HttpClient) {}

  async loadConfiguration(): Promise<any> {
    const config = await this.httpClient
      .get('./assets/config/app.json')
      .toPromise();
    Object.assign(this, config);
    return config;
  }
}
