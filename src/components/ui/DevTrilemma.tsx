import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';

const DevTrilemma = () => {
  const [selected, setSelected] = useState<string[]>(['quality']);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      if (selected.length > 1) {
        setSelected(selected.filter(item => item !== id));
      }
    } else {
      if (selected.length < 2) {
        setSelected([...selected, id]);
      } else {
        setSelected([...selected.filter((_, i) => i !== 0), id]);
      }
    }
  };

  const options = [
    {
      id: 'quality',
      label: 'Качественно',
      icon: <FiCheckCircle />,
      color: 'accent'
    },
    {
      id: 'fast',
      label: 'Быстро',
      icon: <FiClock />,
      color: 'primary'
    },
    {
      id: 'affordable',
      label: 'Доступно',
      icon: <FiDollarSign />,
      color: 'secondary'
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark opacity-80 z-0" />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-black/30 backdrop-blur-xl rounded-3xl border border-gray-800/50 p-6 md:p-10 relative z-10 overflow-hidden"
        >
          {/* Декоративный элемент */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-50" />
          
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              <span className="text-white">Трилемма </span>
              <span className="text-accent">разработки</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
            >
              Выберите любые <span className="text-accent font-medium">два</span> критерия
            </motion.p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            {options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`relative rounded-xl border transition-all duration-300 ${
                  selected.includes(option.id)
                    ? option.id === 'quality' 
                      ? 'bg-accent/10 border-accent/30' 
                      : option.id === 'fast' 
                        ? 'bg-primary/10 border-primary/30'
                        : 'bg-secondary/10 border-secondary/30'
                    : 'bg-black/30 border-gray-800/50'
                }`}
              >
                <button
                  onClick={() => toggleOption(option.id)}
                  className="w-full p-4 md:p-5 flex items-center justify-between group outline-none"
                >
                  <div className="flex items-center">
                    <span className={`text-xl md:text-2xl mr-3 md:mr-4 ${
                      option.id === 'quality' 
                        ? 'text-accent' 
                        : option.id === 'fast' 
                          ? 'text-primary'
                          : 'text-secondary'
                    }`}>
                      {option.icon}
                    </span>
                    <span className={`font-medium text-base md:text-lg ${
                      selected.includes(option.id) ? 'text-white' : 'text-gray-400'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                      selected.includes(option.id) 
                        ? option.id === 'quality' 
                          ? 'bg-accent/30' 
                          : option.id === 'fast' 
                            ? 'bg-primary/30'
                            : 'bg-secondary/30'
                        : 'bg-gray-800/50'
                    }`} />
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 ${
                      selected.includes(option.id)
                        ? option.id === 'quality' 
                          ? 'bg-accent transform translate-x-4' 
                          : option.id === 'fast' 
                            ? 'bg-primary transform translate-x-4'
                            : 'bg-secondary transform translate-x-4'
                        : 'bg-gray-600'
                    }`} />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 md:mt-10 text-center text-gray-400 text-sm md:text-base relative z-10"
          >
            <p className="mb-2">
              Вы выбрали <span className="text-white">{options.find(o => o.id === selected[0])?.label || ''}{selected.length > 1 ? ` и ${options.find(o => o.id === selected[1])?.label || ''}` : ''}</span>
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              В проектной разработке можно одновременно достичь только двух из трех критериев
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevTrilemma; 