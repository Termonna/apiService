import { AxiosResponse } from 'axios';

import { API } from '@/api';

import { INewPassword, IUserInfo } from '@/interfaces/user';
import { IBooleanResponse, IUserId } from '@/interfaces/general';
import { IBalance, ICreditCard, IPayPayload } from '@/interfaces/payment';

type TButton = HTMLElement | null;

function bindListener(button: HTMLElement, callback: () => void): void {
  button.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();

    callback();
  });
}

const getUsersButton: TButton = document.querySelector('.get-users');

getUsersButton && bindListener(getUsersButton, () => {
  API.user.getUsers()
    .then((response: AxiosResponse<IUserInfo[]>) => {
      console.log(response);
    });
});

const getUserButton: TButton = document.querySelector('.get-user');

getUserButton && bindListener(getUserButton, () => {
  const userId: IUserId = {
    userId: 5,
  };

  API.user.getUser(userId)
    .then((response: AxiosResponse<IUserInfo>) => {
      console.log(response);
    });
});

const updateUserButton: TButton = document.querySelector('.update-user');

updateUserButton && bindListener(updateUserButton, () => {
  const updatedData: Partial<IUserInfo> = {
    age: 22,
  };

  API.user.updateUser(updatedData)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});

const updatePasswordButton: TButton = document.querySelector('.update-password');

updatePasswordButton && bindListener(updatePasswordButton, () => {
  const newPasswordData: INewPassword = {
    userId: 5,
    password: 'iddqd',
  };

  API.user.updatePassword(newPasswordData)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});

const deleteUserButton: TButton = document.querySelector('.delete-user');

deleteUserButton && bindListener(deleteUserButton, () => {
  const userId: IUserId = {
    userId: 5,
  };

  API.user.deleteUser(userId)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});

const getBalanceButton: TButton = document.querySelector('.get-balance');

getBalanceButton && bindListener(getBalanceButton, () => {
  const userId: IUserId = {
    userId: 5,
  };

  API.payment.getBalance(userId)
    .then((response: AxiosResponse<IBalance>) => {
      console.log(response);
    });
});

const payButton: TButton = document.querySelector('.pay');

payButton && bindListener(payButton, () => {
  const payData: IPayPayload = {
    cost: 666,
    creditCard: {
      number: '4111 1111 1111 1111',
      date: '24-03-2029',
      cvv: 333,
    },
  };

  API.payment.pay(payData)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});

const addCardButton: TButton = document.querySelector('.add-card');

addCardButton && bindListener(addCardButton, () => {
  const creditCardData: ICreditCard = {
    number: '4111 1111 1111 1111',
    date: '24-03-2029',
    cvv: 333,
  };

  API.payment.addCard(creditCardData)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});

const validateCardButton: TButton = document.querySelector('.validate-card');

validateCardButton && bindListener(validateCardButton, () => {
  const creditCardData: ICreditCard = {
    number: '4111 1111 1111 1111',
    date: '24-03-2029',
    cvv: 333,
  };

  API.payment.validateCard(creditCardData)
    .then((response: AxiosResponse<IBooleanResponse>) => {
      console.log(response);
    });
});
