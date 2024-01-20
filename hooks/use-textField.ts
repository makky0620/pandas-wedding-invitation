import { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

export const useTextField = (
  label: string,
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const validate = useCallback(() => {
    setError(value.length === 0);
  }, [value]);

  useEffect(() => {
    if (value.length > 0 && error) {
      setError(false);
    }
  }, [value, error]);

  return {
    ...inputProps,
    label,
    value,
    onChange: handleValue,
    validate,
    error,
  };
};
