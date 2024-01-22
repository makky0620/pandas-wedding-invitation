import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  label: string;
  value: { lastName: string; firstName: string };
  onChange: (lastName: string, firstName: string) => void;
  errors?: { lastName: boolean; firstName: boolean };
  required?: boolean;
  firstPlaceholder?: string;
  secondPlaceholder?: string;
};

export const NameField: React.FC<Props> = ({
  label,
  value,
  onChange,
  errors = { lastName: false, firstName: false },
  required = false,
  firstPlaceholder,
  secondPlaceholder,
}) => {
  const lastNameBorder = errors.lastName ? 'border-red-500' : 'border-black';
  const lastNameClasses = clsx('w-full border p-3', lastNameBorder);
  const firstNameBorder = errors.firstName ? 'border-red-500' : 'border-black';
  const firstNameClasses = clsx('w-full border p-3', firstNameBorder);

  return (
    <>
      <div className="mb-1">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </div>
      <div className="flex">
        <div className="mr-2 grow">
          <input
            type="text"
            value={value.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value, value.firstName)
            }
            placeholder={firstPlaceholder}
            className={lastNameClasses}
          />
          <div
            className={clsx(
              'text-xs mx-2 mt-1',
              errors.lastName ? 'text-red-500' : 'text-transparent',
            )}
          >
            必須項目です
          </div>
        </div>
        <div className="mr-2 grow">
          <input
            type="text"
            value={value.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(value.lastName, e.target.value)
            }
            placeholder={secondPlaceholder}
            className={firstNameClasses}
          />
          <div
            className={clsx(
              'text-xs mx-2 mt-1',
              errors.firstName ? 'text-red-500' : 'text-transparent',
            )}
          >
            必須項目です
          </div>
        </div>
      </div>
    </>
  );
};
