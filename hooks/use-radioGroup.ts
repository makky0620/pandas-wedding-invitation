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

  const validateAndGet = useCallback(() => {
    const invalid = selected.length === 0;
    setError(invalid);
    return invalid;
  }, [selected]);

  const clear = useCallback(() => {
    setSelected('');
  }, []);

  return {
    selected,
    onChange: handleSelected,
    validateAndGet,
    clear,
    error,
  };
};
