import { InputHTMLAttributes, useCallback, useState } from 'react';

export const useTextField = (
  label: string,
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [value, setValue] = useState<string>('');

  const handleValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  return {
    ...inputProps,
    label,
    value,
    onChange: handleValue,
  };
};
