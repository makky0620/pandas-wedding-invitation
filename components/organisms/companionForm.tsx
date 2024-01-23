import { Companion, CompanionErrors } from '@/domain';
import React from 'react';
import { NameField } from '../atoms';

type Props = {
  index: number;
  value: Companion;
  onChange: (index: number, field: string, value: any) => void;
  onDelete: (index: number) => void;
  errors?: CompanionErrors;
};

export const CompanionForm: React.FC<Props> = ({
  index,
  value,
  onChange,
  onDelete,
  errors,
}) => {
  return (
    <>
      <hr className="pb-3" />
      <div className="pb-3">
        <NameField
          label="姓名"
          value={value.name}
          onChange={(lastName, firstName) =>
            onChange(index, 'name', { lastName, firstName })
          }
          firstPlaceholder="姓"
          secondPlaceholder="名"
          required
          errors={errors?.name}
        />
      </div>
      <div className="pb-3">
        <NameField
          label="ふりがな"
          value={value.kana}
          onChange={(lastName, firstName) =>
            onChange(index, 'kana', { lastName, firstName })
          }
          firstPlaceholder="せい"
          secondPlaceholder="めい"
          required
          errors={errors?.kana}
        />
      </div>
      <div className="pb-3">
        <div className="mb-1">アレルギー等</div>
        <textarea
          value={value.note}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(index, 'note', e.target.value)
          }
          placeholder="アレルギーやその他注意事項がございましたらご入力ください"
          className="w-full border border-black p-3"
        />
      </div>

      <div className="text-right">
        <button onClick={() => onDelete(index)}>
          <span className="mr-2">×</span>削除する
        </button>
      </div>
    </>
  );
};
