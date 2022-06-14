import type { VisibilityContext } from 'react-horizontal-scrolling-menu';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
export const onWheel = (
  apiObj: scrollVisibilityApiType,
  ev: React.WheelEvent
): void => {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
};
