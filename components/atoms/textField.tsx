import clsx from 'clsx';
import React, { InputHTMLAttributes, useCallback, useState } from 'react';

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

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  placeholder?: string;
};

export const TextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  error = false,
  placeholder,
}) => {
  const handleValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  const inputClasses = clsx(
    'w-full border p-3',
    error ? 'border-red-500' : 'border-black',
  );

  return (
    <>
      <div className="mb-3">{label}</div>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        className={inputClasses}
      />
      <div
        className={clsx(
          'text-xs mx-2 mt-1',
          error ? 'text-red-500' : 'text-transparent',
        )}
      >
        必須項目です
      </div>
    </>
  );
};
