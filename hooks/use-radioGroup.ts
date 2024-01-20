import React, { useCallback, useState } from 'react';

export const useRadioGroup = () => {
  const [selected, setSelected] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleSelected = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelected(e.target.value);
    },
    [],
  );

  const validate = useCallback(() => {
    setError(selected.length === 0);
  }, [selected]);

  return {
    selected,
    onChange: handleSelected,
    validate,
    error
  };
};
