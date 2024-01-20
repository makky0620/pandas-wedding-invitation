import React, { useCallback, useState } from 'react';

export const useRadioGroup = () => {
  const [selected, setSelected] = useState<string>('');
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
