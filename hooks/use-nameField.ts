import { InputHTMLAttributes, useCallback, useState } from 'react';

export const useNameField = (
  label: string,
  placeholder?: { last?: string; first?: string },
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [lastName, setLastName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const handleField = useCallback((lastName: string, firstName: string) => {
    setLastName(lastName);
    setFirstName(firstName);
  }, []);

  return {
    ...inputProps,
    label,
    placeholder,
    value: { lastName: lastName, firstName: firstName },
    onChange: handleField,
  };
};
