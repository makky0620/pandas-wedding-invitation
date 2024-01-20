'use client';

import {
  useNameField,
  useRadioGroup,
  useSpreadsheet,
  useTextField,
} from '@/hooks';
import { useCallback, useEffect, useState } from 'react';
import { NameField, TextField, Radio, RadioGroup } from '../atoms';

type FormData = {
  attendance: string;
  invitation: string;
  lastName: string;
  firstName: string;
  lastKana: string;
  firstKana: string;
  postCode: string;
  address: string;
  phoneNumber: string;
  note: string;
};

type FormError = {
  attendanceRadio: boolean;
  invitationRadio: boolean;
};

const initialError: FormError = {
  attendanceRadio: false,
  invitationRadio: false,
};

const InvitationForm = () => {
  const [formError, setFormError] = useState<FormError>(initialError);
  const { addRow } = useSpreadsheet<FormData>();

  const attendaceRadio = useRadioGroup();
  const invitationRadio = useRadioGroup();
  const name = useNameField('お名前', { last: '姓', first: '名' });
  const kana = useNameField('ふりがな', { last: 'せい', first: 'めい' });
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

  const handleNote = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote(e.target.value);
    },
    [],
  );

  const onSubmit = useCallback(async () => {
    name.validate();
    kana.validate();
    postCode.validate();
    address.validate();
    phoneNumber.validate();
    const errors: FormError = {
      attendanceRadio: attendaceRadio.selected.length === 0,
      invitationRadio: invitationRadio.selected.length === 0,
    };

    if (
      Object.values(name.errors).some((e) => e) ||
      Object.values(kana.errors).some((e) => e) ||
      postCode.error ||
      address.error ||
      phoneNumber.error ||
      Object.values(errors).some((error) => error)
    ) {
      setFormError(errors);
      return;
    }

    await addRow({
      attendance: attendaceRadio.selected,
      invitation: invitationRadio.selected,
      lastName: name.value.lastName,
      firstName: name.value.firstName,
      lastKana: kana.value.lastName,
      firstKana: kana.value.firstName,
      postCode: postCode.value,
      address: address.value,
      phoneNumber: phoneNumber.value,
      note: note,
    });
  }, [
    attendaceRadio.selected,
    invitationRadio.selected,
    name,
    kana,
    postCode,
    address,
    phoneNumber,
    note,
    addRow,
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="text-5xl">
          SAVE
          <br />
          THE DATE!
        </div>
      </div>
      <div className="mb-3">
        <p>お手数ではございますが</p>
        <p>3月25日までに出席のお返事賜りますようお願い申し上げます</p>
      </div>
      <div className="mb-3">
        <div className="flex justify-around my-9">
          <Radio
            value="yes"
            name="ご出席"
            checked={attendaceRadio.selected === 'yes'}
            onChange={attendaceRadio.onChange}
            labelClassName="text-xl"
          />
          <Radio
            value="no"
            name="ご欠席"
            checked={attendaceRadio.selected === 'no'}
            onChange={attendaceRadio.onChange}
            labelClassName="text-xl"
          />
        </div>
      </div>
      <div className="mb-3">
        <RadioGroup label="招待元" required error={formError.invitationRadio}>
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
      <div className="mb-3">
        <NameField
          label={name.label}
          onChange={name.onChange}
          firstPlaceholder={name.placeholder?.last}
          secondPlaceholder={name.placeholder?.first}
          errors={name.errors}
          required
        />
      </div>
      <div className="mb-3">
        <NameField
          label={kana.label}
          onChange={kana.onChange}
          firstPlaceholder={kana.placeholder?.last}
          secondPlaceholder={kana.placeholder?.first}
          errors={kana.errors}
          required
        />
      </div>
      <div className="mb-3">
        <TextField
          label={postCode.label}
          value={postCode.value}
          onChange={postCode.onChange}
          placeholder={postCode.placeholder}
          error={postCode.error}
          required
        />
      </div>
      <div className="mb-3">
        <TextField
          label={address.label}
          value={address.value}
          onChange={address.onChange}
          placeholder={address.placeholder}
          error={address.error}
          required
        />
      </div>
      <div className="mb-3">
        <TextField
          label={phoneNumber.label}
          value={phoneNumber.value}
          onChange={phoneNumber.onChange}
          placeholder={phoneNumber.placeholder}
          error={phoneNumber.error}
          required
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">アレルギー等</div>
        <textarea
          value={note}
          onChange={handleNote}
          placeholder="アレルギーやその他注意事項がございましたらご入力ください"
          className="w-full border border-black p-3"
        />
      </div>
      <div className="w-full">
        <button className="w-full p-3 bg-[#EDE9D0]" onClick={onSubmit}>
          上記の内容で送信する
        </button>
      </div>
    </div>
  );
};

export default InvitationForm;
