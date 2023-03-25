export class ApiConfig {
  static readonly API_URL = 'http://127.0.0.1/angular_php_backend/server';

  static createURL(query: string): string {
    return `${this.API_URL}/${query}`;
  }
}
