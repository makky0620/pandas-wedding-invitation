import { Companion, CompanionErrors, FullName } from '@/domain';
import { useEffect, useState } from 'react';

export const useCompanions = () => {
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [companionErrors, setCompanionErrors] = useState<CompanionErrors[]>([]);

  useEffect(() => {
    const updateErrors = (
      idx: number,
      key: keyof CompanionErrors,
      field: keyof FullName,
    ) => {
      if (
        companions[idx][key][field].length > 0 &&
        companionErrors[idx][key][field]
      ) {
        setCompanionErrors((prev) =>
          prev.map((crs, i) =>
            i === idx
              ? {
                  ...crs,
                  [key]: {
                    ...crs[key],
                    [field]: false,
                  },
                }
              : crs,
          ),
        );
      }
    };

    for (let idx = 0; idx < companions.length; idx++) {
      updateErrors(idx, 'name', 'firstName');
      updateErrors(idx, 'name', 'lastName');
      updateErrors(idx, 'kana', 'firstName');
      updateErrors(idx, 'kana', 'lastName');
    }
  }, [companions, companionErrors]);

  return {
    companions,
    companionErrors,
    setCompanions,
    setCompanionErrors,
  };
};
