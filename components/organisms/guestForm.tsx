'use client';

import React from 'react';
import clsx from 'clsx';
import { Guest, GuestError } from '@/domain';
import { NameField, Radio, RadioGroup, TextField } from '../atoms';

type Props = {
  value: Guest;
  onChange: (field: string, value: any) => void;
  errors: GuestError;
};
export const GuestForm: React.FC<Props> = ({ value, onChange, errors }) => {
  return (
    <>
      <div className="pb-3">
        <div className="py-9 text-center">
          <div className="flex justify-center">
            <Radio
              value="yes"
              name="ご出席"
              checked={value.attendance === 'yes'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange('attendance', e.target.value)
              }
              className="mx-2"
              labelClassName="text-xl"
            />
            <Radio
              value="no"
              name="ご欠席"
              checked={value.attendance === 'no'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange('attendance', e.target.value)
              }
              className="mx-2"
              labelClassName="text-xl"
            />
          </div>
          <div
            className={clsx(
              'text-xl mx-2 mt-1',
              errors.attendance ? 'text-red-500' : 'text-transparent',
            )}
          >
            ご回答ください
          </div>
        </div>
      </div>
      <div className="pb-3">
        <RadioGroup label="招待元" required error={errors.invitation}>
          <Radio
            value="takashi"
            name="牧野 孝史"
            checked={value.invitation === 'takashi'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange('invitation', e.target.value)
            }
          />
          <Radio
            value="eriko"
            name="鵜川 恵理子"
            checked={value.invitation === 'eriko'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange('invitation', e.target.value)
            }
          />
        </RadioGroup>
      </div>
      <div className="pb-6">
        <div className="pb-3">
          <NameField
            label="姓名"
            value={value.name}
            onChange={(lastName, firstName) =>
              onChange('name', { lastName, firstName })
            }
            firstPlaceholder="姓"
            secondPlaceholder="名"
            errors={errors.name}
            required
          />
        </div>
        <div className="pb-3">
          <NameField
            label="せいめい"
            value={value.kana}
            onChange={(lastName, firstName) =>
              onChange('kana', { lastName, firstName })
            }
            firstPlaceholder="せい"
            secondPlaceholder="めい"
            errors={errors.kana}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label="郵便番号"
            value={value.postCode}
            onChange={(value) => onChange('postCode', value)}
            placeholder="111-1111の形式でご入力ださい"
            error={errors.postCode}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label="ご住所"
            value={value.address}
            onChange={(value) => onChange('address', value)}
            placeholder="神奈川県横浜市都筑区●●-●● ドットマンション101"
            error={errors.address}
            required
          />
        </div>
        <div className="pb-3">
          <TextField
            label="お電話番号"
            value={value.phoneNumber}
            onChange={(value) => onChange('phoneNumber', value)}
            placeholder="1111-111-111の形式でご入力ください"
            error={errors.phoneNumber}
            required
          />
        </div>
        <div className="pb-3">
          <div className="mb-1">アレルギー等</div>
          <textarea
            value={value.note}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange('note', e.target.value)
            }
            placeholder="アレルギーやその他注意事項がございましたらご入力ください"
            className="w-full border border-black p-3"
          />
        </div>
      </div>
    </>
  );
};
