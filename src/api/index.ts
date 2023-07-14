import ApiService from '@/api/services/api-service';
import ApiKit from '@/api/apiKit';
import {
  requestMiddlewares,
  responseMiddlewares,
} from './middlewares';

const apiService = new ApiService();

apiService.addRequestMiddleware(...requestMiddlewares);
apiService.addResponseMiddleware(...responseMiddlewares);

export const API = new ApiKit(apiService);
