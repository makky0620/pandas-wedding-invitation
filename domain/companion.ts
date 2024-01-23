import { FullName } from './fullName';

export type Companion = {
  name: FullName;
  kana: FullName;
  note: string;
};

export type CompanionErrors = {
  name?: { lastName: boolean; firstName: boolean };
  kana?: { lastName: boolean; firstName: boolean };
  note?: boolean;
};
