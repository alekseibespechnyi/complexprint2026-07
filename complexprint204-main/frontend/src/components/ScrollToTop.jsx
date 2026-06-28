import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Если переход с явным запросом проскроллить к секции (например, к форме
    // заявки) — НЕ скроллим наверх, иначе перебиваем smartScrollTo и
    // пользователь оказывается то на главной, то на разделе посередине.
    if (state && state.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}
