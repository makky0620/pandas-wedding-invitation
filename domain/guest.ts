import { FullName, FullNameError } from './fullName';

export type Guest = {
  attendance: string; 
  invitation: string;
  name: FullName;
  kana: FullName;
  postCode: string;
  address: string;
  phoneNumber: string;
  note: string;
};

export type GuestError = {
  attendance: boolean;
  invitation: boolean;
  name: FullNameError;
  kana: FullNameError;
  postCode: boolean;
  address: boolean;
  phoneNumber: boolean;
};
