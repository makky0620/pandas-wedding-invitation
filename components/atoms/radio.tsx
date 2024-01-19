import clsx from 'clsx';
import React from 'react';

type RadioGroupProps = {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: boolean;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  children,
  required = false,
  error = false,
}) => {
  return (
    <>
      <div className="mb-1">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </div>
      {children}
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

type RadioProps = {
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelClassName?: string;
};

export const Radio: React.FC<RadioProps> = ({
  value,
  name,
  checked,
  onChange,
  labelClassName,
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        {checked ? (
          <div className="w-4 h-4 border border-black bg-black" />
        ) : (
          <div className="w-4 h-4 border border-black" />
        )}
        <input
          type="radio"
          value={value}
          className="hidden"
          onChange={onChange}
          checked={checked}
        />
      </div>
      <span className={clsx('ml-3', labelClassName)}>{name}</span>
    </label>
  );
};
