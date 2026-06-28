/**
 * Безопасный логгер: пишет в консоль только в development.
 * В production-сборке всё гасится — это закрывает утечку PII через браузерную консоль
 * и через session-replay (Yandex.Webvisor пишет console.log).
 *
 * Использование:
 *   import logger from '@/lib/logger';
 *   logger.log('debug', data);          // тихо в проде
 *   logger.error('user-facing', err);   // ошибки тоже скрыты в проде
 *   logger.errorSafe('Repair submit failed', err); // безопасно для прод-логов:
 *                                                    // выводит только тип + message
 */

const isDev =
  typeof process !== 'undefined' &&
  process.env &&
  process.env.NODE_ENV !== 'production';

const noop = () => {};

const logger = {
  log: isDev ? console.log.bind(console) : noop,
  info: isDev ? console.info.bind(console) : noop,
  warn: isDev ? console.warn.bind(console) : noop,
  error: isDev ? console.error.bind(console) : noop,

  /**
   * Безопасный вывод ошибки без PII. Можно вызывать и в проде —
   * запишет только сообщение/код/имя ошибки, без тела запроса.
   */
  errorSafe(msg, error) {
    if (!isDev) {
      // в проде ничего не пишем, чтобы вебвизор не подхватил
      return;
    }
    // eslint-disable-next-line no-console
    console.error(msg, {
      name: error?.name,
      message: error?.message,
      status: error?.status,
    });
  },
};

export default logger;
