import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    number: "01",
    title: "Анализ и стратегия",
    description: "Мы анализируем ваш бизнес и целевую аудиторию, чтобы разработать оптимальное решение, соответствующее вашим целям."
  },
  {
    number: "02",
    title: "UX/UI дизайн",
    description: "Создаем интуитивно понятный интерфейс, который легко использовать и который идеально вписывается в экосистему Telegram."
  },
  {
    number: "03",
    title: "Разработка",
    description: "Используем современные технологии для создания быстрого, безопасного и функционального мини-приложения."
  },
  {
    number: "04",
    title: "Тестирование и запуск",
    description: "Тщательно тестируем каждый аспект приложения перед запуском, чтобы гарантировать бесперебойную работу."
  },
  {
    number: "05",
    title: "Поддержка и обновления",
    description: "Обеспечиваем техническую поддержку и регулярные обновления для поддержания конкурентоспособности вашего приложения."
  }
];

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-start gap-6 relative"
    >
      {/* Соединительная линия между элементами */}
      {index < processSteps.length - 1 && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={inView ? { height: '100%', opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-8 top-16 w-[2px] h-[calc(100%+3rem)] bg-gradient-to-b from-accent via-primary to-transparent"
          style={{ zIndex: 0 }}
        />
      )}
      
      <div className="flex-shrink-0 relative z-10">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary blur-md opacity-30" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dark to-gray-900 flex items-center justify-center text-light-text font-bold text-xl border border-accent/20 shadow-lg relative">
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              {step.number}
            </motion.span>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        className="relative bg-gradient-to-br from-dark/80 to-gray-900/90 p-6 rounded-lg border border-gray-800/30 backdrop-blur-sm flex-1 shadow-xl z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-3 text-light-text">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">{step.title}</span>
          </h3>
          <p className="text-gray-400">{step.description}</p>
        </div>
        
        <motion.div 
          className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl opacity-30"
          animate={{ 
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="process" className="py-16 md:py-28 relative overflow-hidden">
      {/* Фоновые градиенты */}
      <div className="absolute inset-0 bg-dark/90 z-0" />
      <motion.div 
        className="absolute -left-[10%] top-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] opacity-50 z-0"
        animate={{ 
          y: [0, -40, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl rounded-full" />
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full mx-auto relative" />
            </div>
          </motion.div>
          
          <h2 className="text-light-text mb-4 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-text to-light-text">Как мы </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">работаем</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Наш процесс разработки Telegram Mini Apps обеспечивает создание продукта, который точно соответствует вашим потребностям
          </p>
        </motion.div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
