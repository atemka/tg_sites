import { useState, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiCreditCard, FiMessageCircle, FiBarChart2, FiGrid, FiPenTool, FiZap, FiClock, FiSend } from 'react-icons/fi';
import { HiCreditCard, HiChatAlt, HiChartBar, HiViewGrid } from 'react-icons/hi';

// Определяем типы для данных
type FeatureId = 'payments' | 'bot' | 'analytics' | 'catalog';
type DesignId = 'basic' | 'standard' | 'custom';
type IntegrationId = 'telegram' | 'stripe' | 'crm';
type TimelineId = 'standard' | 'fast' | 'urgent';

interface FormData {
  features: FeatureId[];
  design: DesignId;
  integrations: IntegrationId[];
  timeline: TimelineId;
}

// Базовые цены для расчета
const PRICING = {
  base: 40000,
  features: {
    payments: 50000,
    bot: 30000,
    analytics: 40000,
    catalog: 35000
  } as Record<FeatureId, number>,
  design: {
    basic: 0,
    standard: 30000,
    custom: 50000
  } as Record<DesignId, number>,
  integrations: {
    telegram: 0,
    stripe: 25000,
    crm: 35000
  } as Record<IntegrationId, number>,
  timeline: {
    standard: 0,
    fast: 20000,
    urgent: 40000
  } as Record<TimelineId, number>
};

// Мемоизированный компонент опции
const OptionItem = memo(({ 
  isSelected, 
  onClick, 
  icon, 
  label, 
  description, 
  price,
  colorClass = 'accent' 
}: { 
  isSelected: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string; 
  description?: string;
  price?: string;
  colorClass?: 'accent' | 'primary' | 'secondary'; 
}) => {
  // Мемоизируем стили для предотвращения перерисовок
  const itemStyle = useMemo(() => ({
    backgroundColor: isSelected 
      ? `rgba(var(--${colorClass === 'accent' ? 'accent' : colorClass}-rgb), 0.1)` 
      : '#0a0e17',
    borderColor: isSelected 
      ? `rgba(var(--${colorClass === 'accent' ? 'accent' : colorClass}-rgb), 0.3)` 
      : '#161C2C',
    boxShadow: isSelected 
      ? `0 4px 12px -2px rgba(var(--${colorClass === 'accent' ? 'accent' : colorClass}-rgb), 0.1)` 
      : 'none',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
    transform: 'translateZ(0)',
  }), [isSelected, colorClass]);

  const iconStyle = useMemo(() => ({
    color: isSelected 
      ? `var(--${colorClass}-color)` 
      : '#4B5563',
    backgroundColor: isSelected 
      ? `rgba(var(--${colorClass === 'accent' ? 'accent' : colorClass}-rgb), 0.1)` 
      : 'rgba(31, 41, 55, 0.2)',
    transition: 'color 0.2s ease, background-color 0.2s ease',
  }), [isSelected, colorClass]);

  const textStyle = useMemo(() => ({
    color: isSelected ? 'var(--light-text)' : '#9CA3AF',
    transition: 'color 0.2s ease',
  }), [isSelected]);
  
  return (
    <div
      className="option-item p-4 rounded-xl cursor-pointer border min-h-[80px] flex items-center"
      onClick={onClick}
      style={itemStyle}
      role="button"
      tabIndex={0}
    >
      <div 
        className="icon-container flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-xl"
        style={iconStyle}
      >
        {icon}
      </div>
      <div className="text-container flex-1">
        <div style={textStyle}>{label}</div>
        {description && (
          <div className="text-xs text-gray-500 mt-1">{description}</div>
        )}
      </div>
      {price && (
        <div className="price-container text-sm text-right ml-2 min-w-[60px]">
          {price}
        </div>
      )}
      {isSelected && (
        <div className="ml-2 text-accent text-lg">
          <FiCheck />
        </div>
      )}
    </div>
  );
});

OptionItem.displayName = 'OptionItem';

const PriceCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    features: [],
    design: 'standard',
    integrations: ['telegram'],
    timeline: 'standard'
  });

  // Мемоизированный расчет стоимости
  const price = useMemo(() => {
    let total = PRICING.base;
    
    // Добавляем стоимость функций
    formData.features.forEach(feature => {
      total += PRICING.features[feature];
    });
    
    // Добавляем стоимость дизайна
    total += PRICING.design[formData.design];
    
    // Добавляем стоимость интеграций
    formData.integrations.forEach(integration => {
      total += PRICING.integrations[integration];
    });
    
    // Добавляем стоимость за сроки
    total += PRICING.timeline[formData.timeline];
    
    return total;
  }, [formData]);

  // Направление анимации
  const [direction, setDirection] = useState(0);

  // Мемоизированные обработчики
  const nextStep = useCallback(() => {
    setDirection(1);
    setStep(prevStep => prevStep + 1);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setStep(prevStep => prevStep - 1);
  }, []);

  const resetToFirstStep = useCallback(() => {
    setDirection(-1);
    setStep(1);
  }, []);

  // Стили для компонентов при выходе
  const exitStyle = { 
    position: 'absolute', 
    width: '100%', 
    top: 0, 
    left: 0,
    visibility: 'hidden',
    pointerEvents: 'none'
  } as const;

  // Мемоизированные варианты анимации
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  // Варианты анимации для дочерних элементов
  const childVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  }), []);

  // Мемоизированные обработчики изменения данных формы
  const handleFeatureToggle = useCallback((featureId: FeatureId) => {
    setFormData(prev => {
      const newFeatures = prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId];
      return { ...prev, features: newFeatures };
    });
  }, []);

  const handleDesignChange = useCallback((designId: DesignId) => {
    setFormData(prev => ({ ...prev, design: designId }));
  }, []);

  const handleIntegrationToggle = useCallback((integrationId: IntegrationId) => {
    // Telegram API всегда должен быть включен
    if (integrationId === 'telegram') return;
    
    setFormData(prev => {
      const newIntegrations = prev.integrations.includes(integrationId)
        ? prev.integrations.filter(i => i !== integrationId)
        : [...prev.integrations, integrationId];
      return { ...prev, integrations: newIntegrations };
    });
  }, []);

  const handleTimelineChange = useCallback((timelineId: TimelineId) => {
    setFormData(prev => ({ ...prev, timeline: timelineId }));
  }, []);

  // Компонент для первого шага (выбор функционала)
  const Step1: React.FC<{
    formData: FormData;
    onSelect: (feature: FeatureId) => void;
  }> = ({ formData, onSelect }) => {
    const features = [
      { id: 'payments' as FeatureId, label: 'Платежи', icon: <FiCreditCard />, price: `+${(PRICING.features.payments / 1000).toFixed(0)}т ₽` },
      { id: 'bot' as FeatureId, label: 'Чат-бот', icon: <FiMessageCircle />, price: `+${(PRICING.features.bot / 1000).toFixed(0)}т ₽` },
      { id: 'analytics' as FeatureId, label: 'Аналитика', icon: <FiBarChart2 />, price: `+${(PRICING.features.analytics / 1000).toFixed(0)}т ₽` },
      { id: 'catalog' as FeatureId, label: 'Каталог', icon: <FiGrid />, price: `+${(PRICING.features.catalog / 1000).toFixed(0)}т ₽` }
    ];

    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="space-y-6 min-h-[350px] w-full"
      >
        <motion.h3 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-light-text text-xl font-semibold mb-4"
        >
          Выберите необходимый <span className="text-accent">функционал</span>
        </motion.h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <OptionItem
                isSelected={formData.features.includes(feature.id)}
                onClick={() => onSelect(feature.id)}
                icon={feature.icon}
                label={feature.label}
                price={feature.price}
                colorClass="accent"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const Step2: React.FC<{
    formData: FormData;
    onSelect: (design: DesignId) => void;
  }> = ({ formData, onSelect }) => {
    const designOptions = [
      { id: 'basic' as DesignId, label: 'Базовый', description: 'Стандартные компоненты Telegram', price: PRICING.design.basic === 0 ? 'Включено' : `+${(PRICING.design.basic / 1000).toFixed(0)}т ₽` },
      { id: 'standard' as DesignId, label: 'Стандартный', description: 'Уникальные элементы и анимации', price: `+${(PRICING.design.standard / 1000).toFixed(0)}т ₽` },
      { id: 'custom' as DesignId, label: 'Премиум', description: 'Полностью кастомный дизайн', price: `+${(PRICING.design.custom / 1000).toFixed(0)}т ₽` }
    ];

    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="space-y-6 min-h-[350px] w-full"
      >
        <motion.h3 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-light-text text-xl font-semibold mb-4"
        >
          Выберите уровень <span className="text-primary">дизайна</span>
        </motion.h3>
        <div className="space-y-4">
          {designOptions.map((option, index) => (
            <motion.div
              key={option.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <OptionItem
                isSelected={formData.design === option.id}
                onClick={() => onSelect(option.id)}
                icon={<FiPenTool />}
                label={option.label}
                description={option.description}
                price={option.price}
                colorClass="primary"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const Step3: React.FC<{
    formData: FormData;
    onSelect: (integration: IntegrationId) => void;
  }> = ({ formData, onSelect }) => {
    const integrationOptions = [
      { id: 'telegram' as IntegrationId, label: 'Telegram Bot API', description: 'Обязательная интеграция', price: PRICING.integrations.telegram === 0 ? 'Включено' : `+${(PRICING.integrations.telegram / 1000).toFixed(0)}т ₽` },
      { id: 'stripe' as IntegrationId, label: 'Платежные системы', price: `+${(PRICING.integrations.stripe / 1000).toFixed(0)}т ₽` },
      { id: 'crm' as IntegrationId, label: 'CRM / Базы данных', price: `+${(PRICING.integrations.crm / 1000).toFixed(0)}т ₽` }
    ];

    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="space-y-6 min-h-[350px] w-full"
      >
        <motion.h3 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-light-text text-xl font-semibold mb-4"
        >
          Выберите <span className="text-secondary">интеграции</span>
        </motion.h3>
        <div className="space-y-4">
          {integrationOptions.map((option, index) => (
            <motion.div
              key={option.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <OptionItem
                isSelected={formData.integrations.includes(option.id)}
                onClick={() => onSelect(option.id)}
                icon={<FiZap />}
                label={option.label}
                description={option.id === 'telegram' ? 'Обязательная интеграция' : undefined}
                price={option.price}
                colorClass="secondary"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const Step4: React.FC<{
    formData: FormData;
    onSelect: (timeline: TimelineId) => void;
  }> = ({ formData, onSelect }) => {
    const timelineOptions = [
      { id: 'standard' as TimelineId, label: 'Стандартные', description: '2-3 недели', price: PRICING.timeline.standard === 0 ? 'Стандарт' : `+${(PRICING.timeline.standard / 1000).toFixed(0)}т ₽` },
      { id: 'fast' as TimelineId, label: 'Быстрые', description: '7-10 дней', price: `+${(PRICING.timeline.fast / 1000).toFixed(0)}т ₽` },
      { id: 'urgent' as TimelineId, label: 'Срочные', description: '3-5 дней', price: `+${(PRICING.timeline.urgent / 1000).toFixed(0)}т ₽` }
    ];

    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="space-y-6 min-h-[350px] w-full"
      >
        <motion.h3 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-light-text text-xl font-semibold mb-4"
        >
          Выберите <span className="text-accent">сроки</span> разработки
        </motion.h3>
        <div className="space-y-4">
          {timelineOptions.map((option, index) => (
            <motion.div
              key={option.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <OptionItem
                isSelected={formData.timeline === option.id}
                onClick={() => onSelect(option.id)}
                icon={<FiClock />}
                label={option.label}
                description={option.description}
                price={option.price}
                colorClass="accent"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const Results: React.FC<{
    formData: FormData;
    totalPrice: number;
    onBack: () => void;
  }> = ({ formData, totalPrice, onBack }) => {
    return (
      <motion.div
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="text-center min-h-[350px] w-full"
      >
        <motion.h3 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-light-text text-xl font-semibold mb-6"
        >
          Предварительная стоимость разработки
        </motion.h3>
        
        <motion.div 
          className="my-8 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary"
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {totalPrice.toLocaleString()} ₽
        </motion.div>
        
        <motion.p 
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-gray-400 mb-8 text-sm max-w-md mx-auto"
        >
          Это ориентировочная стоимость. Для точного расчета и обсуждения деталей свяжитесь с нами через Telegram.
        </motion.p>
        
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a 
            href="https://t.me/nikita_delo"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-accent rounded-full shadow-lg shadow-accent/20 relative overflow-hidden group flex items-center justify-center px-6 py-2.5"
          >
            <FiSend className="mr-2" />
            <span className="relative z-10">Получить точный расчет</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <button
            className="btn-secondary rounded-full backdrop-blur-sm group flex items-center justify-center px-6 py-2.5"
            onClick={onBack}
          >
            <span className="relative z-10">Изменить параметры</span>
          </button>
        </motion.div>
      </motion.div>
    );
  };

  // Мемоизированный прогресс-бар
  const ProgressBar = useMemo(() => {
    const totalSteps = 5;
    // Изменяем формулу расчета, чтобы на первом шаге было 0%
    const progress = ((step - 1) / (totalSteps - 1)) * 100;
    
    return (
      <div className="w-full bg-[#131C2E] h-2 rounded-full mb-8">
        <motion.div 
          className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 25, 
          }}
        />
      </div>
    );
  }, [step]);

  // Функция для рендеринга текущего шага
  const renderCurrentStep = useCallback(() => {
    const key = `step-${step}`;
    return (
      <motion.div
        key={key}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {step === 1 && <Step1 formData={formData} onSelect={(feature) => handleFeatureToggle(feature as FeatureId)} />}
        {step === 2 && <Step2 formData={formData} onSelect={(design) => handleDesignChange(design as DesignId)} />}
        {step === 3 && <Step3 formData={formData} onSelect={(integration) => handleIntegrationToggle(integration as IntegrationId)} />}
        {step === 4 && <Step4 formData={formData} onSelect={(timeline) => handleTimelineChange(timeline as TimelineId)} />}
        {step === 5 && <Results formData={formData} totalPrice={price} onBack={resetToFirstStep} />}
      </motion.div>
    );
  }, [step, formData, handleFeatureToggle, handleDesignChange, handleIntegrationToggle, handleTimelineChange, price, resetToFirstStep]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] opacity-70" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Рассчитайте </span>
            <span className="text-accent">стоимость</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Пройдите простой опрос, чтобы получить предварительную оценку стоимости разработки вашего Telegram Mini App
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark/50 backdrop-blur-lg rounded-2xl border border-gray-800/50 p-6 md:p-8 shadow-xl relative overflow-hidden"
          >
            {/* Шаги прогресса */}
            <div className="mb-8 relative">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Функционал</span>
                <span>Дизайн</span>
                <span>Интеграции</span>
                <span>Сроки</span>
                <span>Результат</span>
              </div>
            </div>
            
            {/* Содержимое шага */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {renderCurrentStep()}
              </AnimatePresence>
            </div>
            
            {/* Кнопки навигации - перенесены в отдельный блок со своим отступом */}
            {step < 5 && (
              <div className="pt-6 mt-4 border-t border-gray-800/30 flex justify-end">
                <div className="flex items-center">
                  {step > 1 && (
                    <button 
                      onClick={prevStep}
                      className="px-5 py-2.5 mr-4 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300"
                    >
                      Назад
                    </button>
                  )}
                  
                  <button 
                    onClick={nextStep}
                    className="px-8 py-2.5 rounded-lg text-white font-medium bg-accent hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/10 flex items-center"
                  >
                    <span>Далее</span>
                    <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PriceCalculator; 