'use client';

import { useSpreadsheet } from '@/hooks';
import { useCallback, useState } from 'react';
import { CircularProgress } from '@nextui-org/react';
import {
  Companion,
  CompanionErrors,
  companionHasErrors,
  emptyGuest,
  FullName,
  guestHasSomeErrors,
  validateCompanion,
  validateGuest,
} from '@/domain';
import { CompanionForm } from './companionForm';
import { GuestForm } from './guestForm';
import { useGuest } from '@/hooks/use-guest';

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
  const { guest, guestErrors, setGuest, setGuestErrors } = useGuest();
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [errors, setErrors] = useState<CompanionErrors[]>([]);

  const handleGuestForm = useCallback((field: string, value: any) => {
    setGuest((prev) => ({ ...prev, [field]: value }));
  }, [setGuest]);

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
  }, [setGuest]);

  const onSubmit = useCallback(async () => {
    const guestErrors = validateGuest(guest);
    const invalidCompanions = companions.some((companion, idx) => {
      const companionErrors = validateCompanion(companion);
      setErrors((prev) =>
        prev.map((es, i) => (i === idx ? companionErrors : es)),
      );
      return companionHasErrors(companionErrors);
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
  }, [guest, companions, addRow, clearAll, setGuestErrors]);

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
