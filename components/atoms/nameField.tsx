import React, { useCallback, useEffect, useState } from 'react';

type Props = {
  label: string;
  onChange: (last: string, first: string) => void;
  firstPlaceholder?: string;
  secondPlaceholder?: string;
};

export const NameField: React.FC<Props> = ({
  label,
  onChange,
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

  return (
    <>
      <div className="mb-3">{label}</div>
      <div className="flex">
        <input
          type="text"
          value={lastName}
          onChange={handleLastName}
          placeholder={firstPlaceholder}
          className="w-full border border-black px-4 mr-2"
        />
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder={secondPlaceholder}
          className="w-full border border-black p-3 ml-2"
        />
      </div>
    </>
  );
};
