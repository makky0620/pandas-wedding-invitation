'use client';

import { useCallback, useEffect, useState } from 'react';
import { NameField, TextField, useNameField } from '../atoms';

type FormInput = {
  postCode: string;
  address: string;
  phoneNumber: string;
  note: string;
};

type FormError = {
  firstName: boolean;
  lastName: boolean;
  firstKana: boolean;
  lastKana: boolean;
  postCode: boolean;
  address: boolean;
  phoneNumber: boolean;
  note: boolean;
};

const initialInput: FormInput = {
  postCode: '',
  address: '',
  phoneNumber: '',
  note: '',
};

const initialError: FormError = {
  firstName: false,
  lastName: false,
  firstKana: false,
  lastKana: false,
  postCode: false,
  address: false,
  phoneNumber: false,
  note: false,
};

const InvitationForm = () => {
  const [formInput, setFormInput] = useState<FormInput>(initialInput);
  const [formError, setFormError] = useState<FormError>(initialError);
  const name = useNameField('お名前', { last: '姓', first: '名' });
  useEffect(() => {
    if (name.value.firstName.length > 0 && formError.firstName) {
      setFormError((prev) => ({ ...prev, firstName: false }));
    }
    if (name.value.lastName.length > 0 && formError.lastName) {
      setFormError((prev) => ({ ...prev, lastName: false }));
    }
  }, [name.value, formError.firstName, formError.lastName]);

  const kana = useNameField('ふりがな', { last: 'せい', first: 'めい' });
  useEffect(() => {
    if (kana.value.firstName.length > 0 && formError.firstKana) {
      setFormError((prev) => ({ ...prev, firstKana: false }));
    }
    if (kana.value.lastName.length > 0 && formError.lastKana) {
      setFormError((prev) => ({ ...prev, lastKana: false }));
    }
  }, [kana.value, formError.firstKana, formError.lastKana]);

  const handlePostCode = useCallback((postCode: string) => {
    setFormInput((prev) => ({ ...prev, postCode: postCode }));
  }, []);

  const handleAddress = useCallback((address: string) => {
    setFormInput((prev) => ({ ...prev, address: address }));
  }, []);

  const handlePhoneNumber = useCallback((phoneNumber: string) => {
    setFormInput((prev) => ({ ...prev, phoneNumber: phoneNumber }));
  }, []);

  const handleNote = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormInput((prev) => ({ ...prev, note: e.target.value }));
    },
    [],
  );

  const onSubmit = useCallback(() => {
    const errors: FormError = { ...initialError };
    if (name.value.firstName.length === 0) {
      errors.firstName = true;
    }
    if (name.value.lastName.length === 0) {
      errors.lastName = true;
    }
    if (kana.value.firstName.length === 0) {
      errors.firstKana = true;
    }
    if (kana.value.lastName.length === 0) {
      errors.lastKana = true;
    }
    if (formInput.postCode.length === 0) {
      errors.postCode = true;
    }

    if (formInput.address.length === 0) {
      errors.address = true;
    }

    if (formInput.phoneNumber.length === 0) {
      errors.phoneNumber = true;
    }

    setFormError(errors);
  }, [formInput, name, kana]);

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
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="w-4 h-4 border border-black"></div>
              <input id="radio" type="radio" className="hidden" />
            </div>
            <span className="ml-3 text-xl">ご出席</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <div className="w-4 h-4 border border-black"></div>
              <input id="radio" type="radio" className="hidden" />
            </div>
            <span className="ml-3 text-xl">ご欠席</span>
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3">招待元</div>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <div className="w-4 h-4 border border-black"></div>
            <input id="radio" type="radio" className="hidden" />
          </div>
          <span className="ml-3">牧野 孝史</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <div className="w-4 h-4 border border-black"></div>
            <input id="radio" type="radio" className="hidden" />
          </div>
          <span className="ml-3">鵜川 恵理子</span>
        </label>
      </div>
      <div className="mb-3">
        <NameField
          label={name.label}
          onChange={name.onChange}
          firstPlaceholder={name.placeholder?.last}
          secondPlaceholder={name.placeholder?.first}
          error={{ last: formError.lastName, first: formError.firstName }}
        />
      </div>
      <div className="mb-3">
        <NameField
          label={kana.label}
          onChange={kana.onChange}
          firstPlaceholder={kana.placeholder?.last}
          secondPlaceholder={kana.placeholder?.first}
          error={{ last: formError.lastKana, first: formError.firstKana }}
        />
      </div>
      <div className="mb-3">
        <TextField
          label="郵便番号"
          value={formInput.postCode}
          onChange={handlePostCode}
          placeholder="111-1111の形式でご入力ください"
        />
      </div>
      <div className="mb-3">
        <TextField
          label="ご住所"
          value={formInput.address}
          onChange={handleAddress}
          placeholder="神奈川県横浜市都筑区●●-●● ドットマンション101"
        />
      </div>

      <div className="mb-3">
        <TextField
          label="お電話番号"
          value={formInput.phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="1111-111-111の形式でご入力ください"
        />
      </div>
      <div className="mb-3">
        <div className="mb-3">アレルギー等</div>
        <textarea
          value={formInput.note}
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
