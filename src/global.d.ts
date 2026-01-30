export {};

declare global {
  interface Window {
    APP_CONFIG?: {
      SERVER_URL: string;
    };
  }
}
