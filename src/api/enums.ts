export enum RESPONSE_CODE {
  UNAUTHORIZED = 401,
  AUTHENTICATION_TIMEOUT = 419,
  UNPROCESSABLE_ENTITY = 422,
  FAILED_DEPENDENCY = 424,
}

export enum USER_URL {
  GET_USERS = '/api/users',
  GET_USER = '/api/users/random_user',
  UPDATE_USER = '/api/users/random_user/update',
  UPDATE_PASSWORD = '/api/users/random_user/update_password',
  DELETE_USER = '/api/users/random_user/delete',
}

export enum PAYMENT_URL {
  GET_BALANCE = '/api/payment/balance',
  PAY = '/api/payment/pay',
  ADD_CARD = '/api/payment/add-card',
  VALIDATE_CARD = '/api/payment/validate-card',
}
