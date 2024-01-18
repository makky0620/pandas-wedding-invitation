import React, { useCallback, useState } from 'react';

export const useRadioGroup = () => {
  const [selected, setSelected] = useState<string>();
  const handleSelected = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(e.target.value);
    },
    [],
  );
  return {
    selected,
    onChange: handleSelected,
  };
};

type RadioProps = {
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Radio: React.FC<RadioProps> = ({
  value,
  name,
  checked,
  onChange,
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
      <span className="ml-3">{name}</span>
    </label>
  );
};
