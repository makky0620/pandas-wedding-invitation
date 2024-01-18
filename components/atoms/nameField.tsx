import clsx from 'clsx';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const useNameField = (
  label: string,
  placeholder?: { last?: string; first?: string },
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
) => {
  const [lastName, setLastName] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');

  const handleField = useCallback(
    (lastName: string, firstName: string) => {
      setLastName(lastName);
      setFirstName(firstName);
    },

    [],
  );

  return {
    ...inputProps,
    label,
    placeholder,
    value: { lastName: lastName, firstName: firstName },
    onChange: handleField,
  };
};

type Props = {
  label: string;
  onChange: (last: string, first: string) => void;
  error?: { last: boolean; first: boolean };
  firstPlaceholder?: string;
  secondPlaceholder?: string;
};

export const NameField: React.FC<Props> = ({
  label,
  onChange,
  error = { last: false, first: false },
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
  const lastNameClasses = clsx('w-full border p-3 mr-2', lastNameBorder);
  const firstNameBorder = error.first ? 'border-red-500' : 'border-black';
  const firstNameClasses = clsx('w-full border p-3 mr-2', firstNameBorder);

  return (
    <>
      <div className="mb-3">{label}</div>
      <div className="flex">
        <input
          type="text"
          value={lastName}
          onChange={handleLastName}
          placeholder={firstPlaceholder}
          className={lastNameClasses}
        />
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder={secondPlaceholder}
          className={firstNameClasses}
        />
      </div>
    </>
  );
};
