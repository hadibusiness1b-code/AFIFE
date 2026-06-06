export interface Branch {
  id: string;
  name: string;
  status: 'online' | 'busy' | 'offline';
  statusText: string;
  whatsappLink: string;
}

export type DiagnosticStep = 'idle' | 'analyzing' | 'complete';

export interface DiagnosticResult {
  issue: string;
  estimation: string;
  timeRequired: string;
  queueToken: string;
}
