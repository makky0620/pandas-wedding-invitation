'use client';

import { useCallback, useEffect, useState } from 'react';
import { NameField, TextField } from '../atoms';

type FormInput = {
  firstName: string;
  lastName: string;
  firstKana: string;
  lastKana: string;
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
  firstName: '',
  lastName: '',
  firstKana: '',
  lastKana: '',
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

  const handleName = useCallback((lastName: string, firstName: string) => {
    setFormInput((prev) => ({
      ...prev,
      lastName: lastName,
      firstName: firstName,
    }));
  }, []);

  useEffect(() => {
    if (formInput.lastName.length > 0) {
      setFormError((prev) => ({ ...prev, lastName: false }));
    }
    if (formInput.firstName.length > 0) {
      setFormError((prev) => ({ ...prev, firstName: false }));
    }
  }, [formInput.lastName, formInput.firstName]);

  const handleKana = useCallback((lastKana: string, firstKana: string) => {
    setFormInput((prev) => ({
      ...prev,
      lastKana: lastKana,
      firstKana: firstKana,
    }));
  }, []);

  useEffect(() => {
    if (formInput.lastKana.length > 0) {
      setFormError((prev) => ({ ...prev, lastKana: false }));
    }
    if (formInput.firstKana.length > 0) {
      setFormError((prev) => ({ ...prev, firstKana: false }));
    }
  }, [formInput.lastKana, formInput.firstKana]);

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
    if (formInput.firstName.length === 0) {
      errors.firstName = true;
    }
    if (formInput.lastName.length === 0) {
      errors.lastName = true;
    }
    if (formInput.firstKana.length === 0) {
      errors.firstKana = true;
    }
    if (formInput.lastKana.length === 0) {
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
  }, [formInput]);

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
          label="お名前"
          onChange={handleName}
          firstPlaceholder="姓"
          secondPlaceholder="名"
          error={{ last: formError.lastName, first: formError.firstName }}
        />
      </div>
      <div className="mb-3">
        <NameField
          label="ふりがな"
          onChange={handleKana}
          firstPlaceholder="せい"
          secondPlaceholder="めい"
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
