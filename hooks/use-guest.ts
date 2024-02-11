import {
  emptyGuest,
  FullName,
  Guest,
  GuestError,
  initialGuestError,
} from '@/domain';
import { useEffect, useState } from 'react';

export const useGuest = () => {
  const [guest, setGuest] = useState<Guest>(emptyGuest);
  const [guestErrors, setGuestErrors] = useState<GuestError>(initialGuestError);

  useEffect(() => {
    const updateFullNameErrors = (
      key: 'name' | 'kana',
      field: keyof FullName,
    ) => {
      if (guest[key][field].length > 0 && guestErrors[key][field]) {
        setGuestErrors((prev) => ({
          ...prev,
          [key]: { ...prev[key], [field]: false },
        }));
      }
    };

    const updateErrors = (key: keyof Omit<GuestError, 'name' | 'kana'>) => {
      if (guest[key].length > 0 && guestErrors[key]) {
        setGuestErrors((prev) => ({
          ...prev,
          [key]: false,
        }));
      }
    };

    updateFullNameErrors('name', 'firstName');
    updateFullNameErrors('name', 'lastName');
    updateFullNameErrors('kana', 'firstName');
    updateFullNameErrors('kana', 'lastName');
    updateErrors('attendance');
    updateErrors('invitation');
    updateErrors('postCode');
    updateErrors('address');
    updateErrors('phoneNumber');
  }, [guest, guestErrors]);

  return {
    guest,
    guestErrors,
    setGuest,
    setGuestErrors,
  };
};
