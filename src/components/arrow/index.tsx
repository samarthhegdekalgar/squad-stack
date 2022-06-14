import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

const Arrow = ({
  children,
  disabled,
  onClick,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
  className?: string;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        right: '1%',
        userSelect: 'none',
      }}
      className={` flex flex-col justify-center ${
        disabled ? 'cursor-default opacity-0' : 'cursor-pointer opacity-100'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export const LeftArrow = () => {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()} className='mr-8'>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 4L7 12L15 20'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Arrow>
  );
};

export function RightArrow({
  limit,
  pushNewItems,
  hasMore,
}: {
  limit: number;
  pushNewItems: VoidFunction;
  hasMore: boolean;
}) {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators,
    items,
  } = React.useContext(VisibilityContext);
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (isLastItemVisible) {
      pushNewItems();
    }
    if (items.toItemsWithoutSeparators().length >= limit) {
      setDisabled(isLastItemVisible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, isLastItemVisible, items]);

  return (
    <Arrow
      disabled={disabled && !hasMore}
      onClick={() => scrollNext()}
      className='ml-8'
    >
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 4L16 12L8 20'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Arrow>
  );
}
