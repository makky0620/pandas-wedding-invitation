import {FullName} from '@/domain';
import { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

type Errors = {
  lastName: boolean;
  firstName: boolean;
};

const initialErrors = {
  lastName: false,
  firstName: false,
};

export const useNameField = (
  label: string,
  placeholder?: FullName,
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [lastName, setLastName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const handleField = useCallback((lastName: string, firstName: string) => {
    setLastName(lastName);
    setFirstName(firstName);
  }, []);

  const validateAndGet = useCallback(() => {
    const invalidLastName = lastName.length === 0;
    const invalidFistName = firstName.length === 0;
    setErrors({
      lastName: invalidLastName,
      firstName: invalidFistName,
    });
    return invalidLastName || invalidFistName;
  }, [firstName, lastName]);

  const clear = useCallback(() => {
    setLastName('');
    setFirstName('');
  }, []);

  useEffect(() => {
    if (firstName.length > 0 && errors.firstName) {
      setErrors((prev) => ({ ...prev, firstName: false }));
    }
    if (lastName.length > 0 && errors.lastName) {
      setErrors((prev) => ({ ...prev, lastName: false }));
    }
  }, [firstName, lastName, errors]);

  return {
    ...inputProps,
    label,
    placeholder,
    value: { lastName: lastName, firstName: firstName },
    onChange: handleField,
    validateAndGet,
    clear,
    errors,
  };
};
