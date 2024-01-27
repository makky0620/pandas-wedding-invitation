import { FullName, FullNameError } from './fullName';

export type Companion = {
  name: FullName;
  kana: FullName;
  note: string;
};

export type CompanionErrors = {
  name: FullNameError;
  kana: FullNameError;
};

export const validateCompanion = (value: Companion): CompanionErrors => {
  const invalidLastName = value.name.lastName.length === 0;
  const invalidFirstName = value.name.firstName.length === 0;
  const invalidLastKana = value.kana.lastName.length === 0;
  const invalidFirstKana = value.kana.firstName.length === 0;
  return {
    name: { lastName: invalidLastName, firstName: invalidFirstName },
    kana: { lastName: invalidLastKana, firstName: invalidFirstKana },
  };
};

export const companionHasErrors = (errors: CompanionErrors): boolean => {
  return errors.name.firstName ||
    errors.name.lastName ||
    errors.kana.firstName ||
    errors.kana.lastName;

}
