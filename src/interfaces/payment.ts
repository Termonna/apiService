export interface ICreditCard {
  number: string;
  date: string;
  cvv: number;
}

export interface IBalance {
  available: number;
  frozen: number;
  total: number;
  lastChange: string;
}

export interface IPayPayload {
  cost: number;
  creditCard: ICreditCard;
}
