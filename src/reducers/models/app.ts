export interface AppState {
    routes: {name: string, path: string}[];
    guestSessionId: string | null;
    errorMessage: string | null;
  }