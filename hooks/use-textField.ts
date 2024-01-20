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

  const validateAndGet = useCallback(() => {
    const invalid = value.length === 0;
    setError(invalid);
    return invalid;
  }, [value]);

  const clear = useCallback(() => {
    setValue('');
  }, []);

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
    validateAndGet,
    clear,
    error,
  };
};
