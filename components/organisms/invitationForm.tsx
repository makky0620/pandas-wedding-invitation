'use client';

import {
  useNameField,
  useRadioGroup,
  useSpreadsheet,
  useTextField,
} from '@/hooks';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { CircularProgress } from '@nextui-org/react';
import { NameField, TextField, Radio, RadioGroup } from '../atoms';
import { Companion, FullName } from '@/domain';

type FormData = {
  attendance: string;
  invitation: string;
  name: FullName;
  kana: FullName;
  postCode: string;
  address: string;
  phoneNumber: string;
  note: string;
};

export const InvitationForm = () => {
  const { addRow } = useSpreadsheet<FormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const attendaceRadio = useRadioGroup();
  const invitationRadio = useRadioGroup();
  const name = useNameField('お名前', { lastName: '姓', firstName: '名' });
  const kana = useNameField('ふりがな', {
    lastName: 'せい',
    firstName: 'めい',
  });
  const postCode = useTextField('郵便番号', {
    placeholder: '111-1111の形式でご入力ださい',
  });
  const address = useTextField('ご住所', {
    placeholder: '神奈川県横浜市都筑区●●-●● ドットマンション101',
  });
  const phoneNumber = useTextField('お電話番号', {
    placeholder: '1111-111-111の形式でご入力ください',
  });
  const [note, setNote] = useState<string>('');
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [errors, setErrors] = useState<
    {
      name: { lastName: boolean; firstName: boolean };
      kana: { lastName: boolean; firstName: boolean };
    }[]
  >([]);

  const handleNote = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote(e.target.value);
    },
    [],
  );

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

  const handleCompanionNameChange = useCallback(
    (idx: number, field: string, value: FullName) => {
      setCompanions((prev) =>
        prev.map((companion, i) =>
          i === idx ? { ...companion, [field]: value } : companion,
        ),
      );
    },
    [],
  );

  const handleCompanionNoteChange = useCallback(
    (idx: number, value: string) => {
      setCompanions((prev) =>
        prev.map((companion, i) =>
          i === idx ? { ...companion, note: value } : companion,
        ),
      );
    },
    [],
  );

  const clearAll = useCallback(() => {
    attendaceRadio.clear();
    invitationRadio.clear();
    name.clear();
    kana.clear();
    postCode.clear();
    address.clear();
    phoneNumber.clear();
    setNote('');
    setCompanions((prev) =>
      prev.map(() => ({
        name: { lastName: '', firstName: '' },
        kana: { lastName: '', firstName: '' },
        note: '',
      })),
    );
  }, [
    attendaceRadio,
    invitationRadio,
    name,
    kana,
    postCode,
    address,
    phoneNumber,
  ]);

  const onSubmit = useCallback(async () => {
    const invalidAttendance = attendaceRadio.validateAndGet();
    const invalidInvitation = invitationRadio.validateAndGet();
    const invalidName = name.validateAndGet();
    const invalidKana = kana.validateAndGet();
    const invalidPostCode = postCode.validateAndGet();
    const invalidAddress = address.validateAndGet();
    const invalidPhoneNumber = phoneNumber.validateAndGet();
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

    if (
      invalidAttendance ||
      invalidInvitation ||
      invalidName ||
      invalidKana ||
      invalidPostCode ||
      invalidAddress ||
      invalidPhoneNumber ||
      invalidCompanions
    ) {
      return;
    }

    setIsLoading(true);
    await addRow({
      attendance: attendaceRadio.selected,
      invitation: invitationRadio.selected,
      name: name.value,
      kana: kana.value,
      postCode: postCode.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      note: note,
    });

    setIsLoading(false);
    clearAll();
  }, [
    attendaceRadio,
    invitationRadio,
    name,
    kana,
    postCode,
    address,
    phoneNumber,
    note,
    companions,
    addRow,
    clearAll,
  ]);

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
      <div className="pb-3">
        <div className="py-9 text-center">
          <div className="flex justify-center">
            <Radio
              value="yes"
              name="ご出席"
              checked={attendaceRadio.selected === 'yes'}
              onChange={attendaceRadio.onChange}
              className="mx-2"
              labelClassName="text-xl"
            />
            <Radio
              value="no"
              name="ご欠席"
              checked={attendaceRadio.selected === 'no'}
              onChange={attendaceRadio.onChange}
              className="mx-2"
              labelClassName="text-xl"
            />
          </div>
          <div
            className={clsx(
              'text-xl mx-2 mt-1',
              attendaceRadio.error ? 'text-red-500' : 'text-transparent',
            )}
          >
            ご回答ください
          </div>
        </div>
      </div>
      <div className="pb-3">
        <RadioGroup label="招待元" required error={invitationRadio.error}>
          <Radio
            value="takashi"
            name="牧野 孝史"
            checked={invitationRadio.selected === 'takashi'}
            onChange={invitationRadio.onChange}
          />
          <Radio
            value="eriko"
            name="鵜川 恵理子"
            checked={invitationRadio.selected === 'eriko'}
            onChange={invitationRadio.onChange}
          />
        </RadioGroup>
      </div>
      <div className="pb-6">
        <div className="pb-3">
          <NameField
            label={name.label}
            value={name.value}
            onChange={name.onChange}
            firstPlaceholder={name.placeholder?.lastName}
            secondPlaceholder={name.placeholder?.firstName}
            errors={name.errors}
            required
          />
        </div>
        <div className="pb-3">
          <NameField
            label={kana.label}
            value={kana.value}
            onChange={kana.onChange}
            firstPlaceholder={kana.placeholder?.lastName}
            secondPlaceholder={kana.placeholder?.firstName}
            errors={kana.errors}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label={postCode.label}
            value={postCode.value}
            onChange={postCode.onChange}
            placeholder={postCode.placeholder}
            error={postCode.error}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label={address.label}
            value={address.value}
            onChange={address.onChange}
            placeholder={address.placeholder}
            error={address.error}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label={phoneNumber.label}
            value={phoneNumber.value}
            onChange={phoneNumber.onChange}
            placeholder={phoneNumber.placeholder}
            error={phoneNumber.error}
            required
          />
        </div>
        <div className="pb-3">
          <div className="mb-1">アレルギー等</div>
          <textarea
            value={note}
            onChange={handleNote}
            placeholder="アレルギーやその他注意事項がございましたらご入力ください"
            className="w-full border border-black p-3"
          />
        </div>
        <div className="pb-3">
          <div>
            {companions.map((companion, idx) => (
              <div key={idx} className="pb-3">
                <hr className="pb-3" />
                <div className="pb-3">
                  <NameField
                    label="姓名"
                    value={companion.name}
                    onChange={(lastName, firstName) =>
                      handleCompanionNameChange(idx, 'name', {
                        lastName,
                        firstName,
                      })
                    }
                    errors={errors[idx].name}
                    firstPlaceholder="姓"
                    secondPlaceholder="名"
                    required
                  />
                </div>
                <div className="pb-3">
                  <NameField
                    label="ふりがな"
                    value={companion.kana}
                    onChange={(lastName, firstName) =>
                      handleCompanionNameChange(idx, 'kana', {
                        lastName,
                        firstName,
                      })
                    }
                    errors={errors[idx].kana}
                    firstPlaceholder="せい"
                    secondPlaceholder="めい"
                    required
                  />
                </div>
                <div className="pb-3">
                  <div className="mb-1">アレルギー等</div>
                  <textarea
                    value={companion.note}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleCompanionNoteChange(idx, e.target.value)
                    }
                    placeholder="アレルギーやその他注意事項がございましたらご入力ください"
                    className="w-full border border-black p-3"
                  />
                </div>

                <div className="text-right">
                  <button onClick={() => handleRemoveCompanion(idx)}>
                    <span className="mr-2">×</span>削除する
                  </button>
                </div>
              </div>
            ))}
          </div>
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
