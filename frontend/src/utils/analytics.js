// Утилита для отправки целей в Yandex.Metrica и Google Analytics
// Безопасна к отсутствию счётчиков (try/catch).

const YM_ID = 105245584;

export const trackGoal = (goalName, params = {}) => {
  try {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(YM_ID, 'reachGoal', goalName, params);
    }
  } catch (e) { /* noop */ }

  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', goalName, params);
    }
  } catch (e) { /* noop */ }
};
