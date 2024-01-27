'use client';

import { useSpreadsheet } from '@/hooks';
import { useCallback, useState } from 'react';
import { CircularProgress } from '@nextui-org/react';
import {
  Companion,
  CompanionErrors,
  emptyGuest,
  FullName,
  Guest,
  GuestError,
  guestHasSomeErrors,
  initialGuestError,
  validateGuest,
} from '@/domain';
import { CompanionForm } from './companionForm';
import { GuestForm } from './guestForm';

type FormData = {
  attendance: string;
  invitation: string;
  name: FullName;
  kana: FullName;
  postCode: string;
  address: string;
  phoneNumber: string;
  note: string;
  companions: Companion[];
};

export const InvitationForm = () => {
  const { addRow } = useSpreadsheet<FormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [guest, setGuest] = useState<Guest>(emptyGuest);
  const [guestErrors, setGuestErrors] = useState<GuestError>(initialGuestError);
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [errors, setErrors] = useState<CompanionErrors[]>([]);

  const handleGuestForm = useCallback((field: string, value: any) => {
    setGuest((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAddCompanion = useCallback(() => {
    setCompanions((prev) => [
      ...prev,
      {
        name: { lastName: '', firstName: '' },
        kana: { lastName: '', firstName: '' },
        note: '',
      },
    ]);
    setErrors((prev) => [
      ...prev,
      {
        name: { lastName: false, firstName: false },
        kana: { lastName: false, firstName: false },
      },
    ]);
  }, []);

  const handleRemoveCompanion = useCallback((idx: number) => {
    setCompanions((prev) => prev.filter((_, i) => i !== idx));
    setErrors((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const handleChangeCompanion = useCallback(
    (index: number, field: string, value: FullName | string) => {
      setCompanions((prev) =>
        prev.map((companion, i) =>
          i === index ? { ...companion, [field]: value } : companion,
        ),
      );
    },
    [],
  );

  const clearAll = useCallback(() => {
    setGuest(emptyGuest);
    setCompanions((prev) =>
      prev.map(() => ({
        name: { lastName: '', firstName: '' },
        kana: { lastName: '', firstName: '' },
        note: '',
      })),
    );
  }, []);

  const onSubmit = useCallback(async () => {
    const guestErrors = validateGuest(guest);
    const invalidCompanions = companions.some((companion, idx) => {
      const invalidLastName = companion.name.lastName.length === 0;
      const invalidFirstName = companion.name.firstName.length === 0;
      const invalidLastKana = companion.kana.lastName.length === 0;
      const invalidFirstKana = companion.kana.firstName.length === 0;
      setErrors((prev) =>
        prev.map((es, i) =>
          i === idx
            ? {
                name: {
                  lastName: invalidLastName,
                  firstName: invalidFirstName,
                },
                kana: {
                  lastName: invalidLastKana,
                  firstName: invalidFirstKana,
                },
              }
            : es,
        ),
      );
      return (
        invalidLastName ||
        invalidFirstName ||
        invalidLastKana ||
        invalidFirstKana
      );
    });

    if (guestHasSomeErrors(guestErrors) || invalidCompanions) {
      setGuestErrors(guestErrors);
      return;
    }

    setIsLoading(true);
    await addRow({
      attendance: guest.attendance,
      invitation: guest.invitation,
      name: guest.name,
      kana: guest.kana,
      postCode: guest.postCode,
      address: guest.address,
      phoneNumber: guest.phoneNumber,
      note: guest.note,
      companions: companions,
    });

    setIsLoading(false);
    clearAll();
  }, [guest, companions, addRow, clearAll]);

  return (
    <div className="p-6">
      <div className="pb-6">
        <div className="text-5xl">
          SAVE
          <br />
          THE DATE!
        </div>
      </div>
      <div className="pb-3">
        <p>お手数ではございますが</p>
        <p>3月25日までに出席のお返事賜りますようお願い申し上げます</p>
      </div>
      <div>
        <GuestForm
          value={guest}
          onChange={handleGuestForm}
          errors={guestErrors}
        />
        <div className="pb-3">
          {companions.map((companion, idx) => (
            <div key={idx} className="pb-3">
              <CompanionForm
                index={idx}
                value={companion}
                onChange={handleChangeCompanion}
                onDelete={handleRemoveCompanion}
                errors={errors[idx]}
              />
            </div>
          ))}
          <div>
            <button onClick={handleAddCompanion}>
              <span className="mr-2">+</span>お連れ様を追加する
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="w-full p-3 bg-[#EDE9D0]" onClick={onSubmit}>
          上記の内容で送信する
        </button>
      </div>
      {isLoading && (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-10">
          <CircularProgress color="default" size="lg" />
        </div>
      )}
    </div>
  );
};
