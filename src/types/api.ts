export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  country: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
}

export interface RateLimitEntry {
  count: number;
  reset: number;
}
