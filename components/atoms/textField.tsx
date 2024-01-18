import React, { useCallback, useState } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const TextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const handleValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <>
      <div className="mb-3">{label}</div>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        className="w-full border border-black p-3"
      />
    </>
  );
};
