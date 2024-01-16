import React from 'react';

type Props = {
label: string;
firstPlaceholder?: string;
secondPlaceholder?: string;
}

const NameField: React.FC<Props> = (props) => {
  return (
    <>
      <div className="mb-3">{props.label}</div>
      <div className="flex">
        <input
          type="text"
          placeholder={props.firstPlaceholder}
          className="w-full border border-black px-4 mr-2"
        />
        <input
          type="text"
          placeholder={props.secondPlaceholder}
          className="w-full border border-black p-3 ml-2"
        />
      </div>
    </>
  );
};

export default NameField;
