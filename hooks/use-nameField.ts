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
  placeholder?: { last?: string; first?: string },
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [lastName, setLastName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [errors, setErrors] = useState<Errors>(initialErrors);

  const handleField = useCallback((lastName: string, firstName: string) => {
    setLastName(lastName);
    setFirstName(firstName);
  }, []);

  const validate = useCallback(() => {
    setErrors({
      lastName: lastName.length === 0,
      firstName: firstName.length === 0,
    });
  }, [firstName, lastName]);

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
    validate,
    errors,
  };
};
