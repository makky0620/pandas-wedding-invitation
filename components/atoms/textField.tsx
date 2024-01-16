import React from 'react';

type Props = {
  label: string;
  placeholder?: string;
};

const TextField: React.FC<Props> = (props) => {
  return (
    <>
      <div className="mb-3">{props.label}</div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full border border-black p-3"
      />
    </>
  );
};

export default TextField;
