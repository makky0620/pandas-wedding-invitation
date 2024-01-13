import clsx from 'clsx';

const Title = ({
  align,
  children,
}: {
  align: 'left' | 'right';
  children: React.ReactNode;
}) => {
  const justify = align === 'left' ? 'justify-start' : 'justify-end';
  const containerClasses = clsx('flex pb-6', justify);

  return (
    <div className={containerClasses}>
      <div className="mr-3">
        <Circle />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="pb-3">{children}</div>
        <div className="border border-black w-2/5" />
      </div>
    </div>
  );
};

const Circle = () => <div className="w-6 h-6 rounded-full bg-black" />;

export default Title;
