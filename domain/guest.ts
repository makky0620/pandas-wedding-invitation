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

export const emptyGuest = {
  attendance: '',
  invitation: '',
  name: { lastName: '', firstName: '' },
  kana: { lastName: '', firstName: '' },
  postCode: '',
  address: '',
  phoneNumber: '',
  note: '',
};

export const initialGuestError = {
  attendance: false,
  invitation: false,
  name: { lastName: false, firstName: false },
  kana: { lastName: false, firstName: false },
  postCode: false,
  address: false,
  phoneNumber: false,
};

export const validateGuest = (value: Guest): GuestError => {
  const invalidAttendance = value.attendance.length === 0;
  const invalidInvitation = value.invitation.length === 0;
  const invalidFirstName = value.name.firstName.length === 0;
  const invalidLastName = value.name.lastName.length === 0;
  const invalidFirstKana = value.kana.firstName.length === 0;
  const invalidLastKana = value.kana.lastName.length === 0;
  const invalidPostCode = value.postCode.length === 0;
  const invalidAddress = value.address.length === 0;
  const invalidPhoneNumber = value.phoneNumber.length === 0;
  return {
    attendance: invalidAttendance,
    invitation: invalidInvitation,
    name: { lastName: invalidLastName, firstName: invalidFirstName },
    kana: { lastName: invalidLastKana, firstName: invalidFirstKana },
    postCode: invalidPostCode,
    address: invalidAddress,
    phoneNumber: invalidPhoneNumber,
  };
};

export const guestHasSomeErrors = (errors: GuestError) => {
  return errors.attendance ||
    errors.invitation ||
    errors.name.firstName ||
    errors.name.lastName ||
    errors.kana.firstName ||
    errors.kana.lastName ||
    errors.postCode ||
    errors.address ||
    errors.phoneNumber;
}


