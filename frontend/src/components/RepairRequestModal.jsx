import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';
import RepairRequestFormBody from './RepairRequestFormBody';

const RepairRequestModalContext = createContext({
  open: () => {},
  close: () => {},
});

export const useRepairRequestModal = () => useContext(RepairRequestModalContext);

export const RepairRequestModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Слушаем глобальное событие из статичной кнопки «Получить помощь» в index.html,
  // чтобы открывать модалку вместо скролла к секции.
  useEffect(() => {
    window.__appScrollToRepairRequestReady = true;
    const handler = () => open();
    window.addEventListener('app:scroll-to-repair-request', handler);
    return () => {
      window.removeEventListener('app:scroll-to-repair-request', handler);
      window.__appScrollToRepairRequestReady = false;
    };
  }, [open]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <RepairRequestModalContext.Provider value={value}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          data-testid="repair-request-modal"
          className="max-w-2xl w-[calc(100vw-2rem)] max-h-[90vh] overflow-y-auto p-0"
        >
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white p-6 sm:p-8 rounded-t-lg">
            <DialogHeader className="space-y-3 text-left">
              <Badge className="w-fit bg-pink-100 text-pink-700 hover:bg-pink-200">
                Получить помощь сейчас
              </Badge>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                Заявка на ремонт{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  оборудования
                </span>
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                Заполните форму — мы свяжемся с вами в течение 24 часов и подберём удобное время.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6 sm:p-8 pt-2">
            <RepairRequestFormBody compact onSuccess={() => { /* keep modal open to show success state */ }} />
          </div>
        </DialogContent>
      </Dialog>
    </RepairRequestModalContext.Provider>
  );
};

export default RepairRequestModalProvider;
