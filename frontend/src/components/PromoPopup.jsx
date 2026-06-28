import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Flame, Check, ArrowRight, Tag, Clock } from 'lucide-react';

const STORAGE_KEY = 'cp_promo_popup_kyocera_v1';
const SHOW_AFTER_MS = 3000;

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch (e) { /* ignore */ }

    const t = setTimeout(() => {
      setIsOpen(true);
      // Триггер анимации появления на следующем кадре
      requestAnimationFrame(() => setVisible(true));
    }, SHOW_AFTER_MS);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const close = () => {
    setVisible(false);
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* ignore */ }
    setTimeout(() => setIsOpen(false), 250);
  };

  const handleCta = () => {
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* ignore */ }
    setVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      navigate('/arenda-kyocera-m2035dn');
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
      data-testid="promo-popup"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={close}
        data-testid="promo-popup-backdrop"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(2,6,23,0.6)] border border-slate-200 transition-all duration-300 ${
          visible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
        }`}
      >
        {/* Close */}
        <button
          onClick={close}
          aria-label="Закрыть"
          data-testid="promo-popup-close"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-slate-200 hover:bg-white hover:border-slate-300 flex items-center justify-center text-slate-700 transition-all hover:rotate-90 duration-300"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left: Image */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 md:p-10 flex items-center justify-center overflow-hidden min-h-[260px] md:min-h-full">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-cyan-300/20 rounded-full blur-2xl" />

            {/* Discount badge */}
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1.5 rounded-full text-[12px] font-bold shadow-lg flex items-center gap-1.5">
              <Tag size={12} />
              −22%
            </div>

            <img
              src="/images/Kyocera-ECOSYS-M2035dn.webp"
              alt="МФУ Kyocera ECOSYS M2035dn"
              className="relative z-[1] w-full h-auto max-h-[280px] object-contain drop-shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Right: Content */}
          <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white to-blue-50/40">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-[12px] font-bold mb-4 shadow-sm">
              <Flame size={12} />
              АКЦИЯ
            </div>

            <h2
              id="promo-popup-title"
              className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight"
            >
              Аренда принтеров{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                от 2 000 ₽/мес.
              </span>
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed mt-3">
              Освободилось <strong className="text-slate-900">40 штук</strong> МФУ
              Kyocera ECOSYS M2035dn
            </p>

            <ul className="mt-5 space-y-2.5">
              {[
                <>Доставка и установка — <strong>бесплатно</strong></>,
                <>Картриджи и ремонт — <strong>включены</strong></>,
                <>Подмена при поломке — <strong>24 часа</strong></>,
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check size={12} className="text-emerald-600" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] text-slate-700">{t}</span>
                </li>
              ))}
            </ul>

            {/* Price block */}
            <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50/50 border border-blue-100">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-slate-400 line-through text-[16px]">4 500 ₽</span>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  3 500 ₽<span className="text-base text-slate-600 font-medium">/мес.</span>
                </span>
              </div>
              <p className="text-[12px] text-slate-500 mt-1">
                по тарифу «Всё включено»
              </p>
            </div>

            <p className="inline-flex items-center gap-1.5 mt-4 text-[13px] text-red-600 font-semibold">
              <Clock size={13} />
              Осталось <strong>40</strong> аппаратов
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button
                onClick={handleCta}
                data-testid="promo-popup-cta"
                className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-5 py-3 rounded-full text-[15px] font-semibold shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Забронировать
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={close}
                data-testid="promo-popup-dismiss"
                className="px-5 py-3 rounded-full text-[14px] font-medium text-slate-500 hover:text-slate-700 transition-colors"
              >
                Не сейчас
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              Работаем с юрлицами и ИП. Официальный договор, безналичный расчёт.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
