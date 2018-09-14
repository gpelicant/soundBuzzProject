import { apiRoutes } from './api.config';

export const baseUrl = (domain => apiRoutes[domain] || 'soundbuzz.local/app_dev.php')(window.document.domain);
