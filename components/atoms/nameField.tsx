import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  label: string;
  onChange: (last: string, first: string) => void;
  error?: { last: boolean; first: boolean };
  required?: boolean;
  firstPlaceholder?: string;
  secondPlaceholder?: string;
};

export const NameField: React.FC<Props> = ({
  label,
  onChange,
  error = { last: false, first: false },
  required = false,
  firstPlaceholder,
  secondPlaceholder,
}) => {
  const [lastName, setLastName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const handleLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    },
    [],
  );

  const handleFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    },
    [],
  );

  useEffect(() => {
    onChange(lastName, firstName);
  }, [onChange, lastName, firstName]);

  const lastNameBorder = error.last ? 'border-red-500' : 'border-black';
  const lastNameClasses = clsx('w-full border p-3', lastNameBorder);
  const firstNameBorder = error.first ? 'border-red-500' : 'border-black';
  const firstNameClasses = clsx('w-full border p-3', firstNameBorder);

  return (
    <>
      <div className="mb-1">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </div>
      <div className="flex">
        <div className="mr-2">
          <input
            type="text"
            value={lastName}
            onChange={handleLastName}
            placeholder={firstPlaceholder}
            className={lastNameClasses}
          />
          <div
            className={clsx(
              'text-xs mx-2 mt-1',
              error.last ? 'text-red-500' : 'text-transparent',
            )}
          >
            必須項目です
          </div>
        </div>
        <div className="mr-2">
          <input
            type="text"
            value={firstName}
            onChange={handleFirstName}
            placeholder={secondPlaceholder}
            className={firstNameClasses}
          />
          <div
            className={clsx(
              'text-xs mx-2 mt-1',
              error.first ? 'text-red-500' : 'text-transparent',
            )}
          >
            必須項目です
          </div>
        </div>
      </div>
    </>
  );
};
