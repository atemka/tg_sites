import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiCreditCard, FiLayers, FiBarChart2 } from "react-icons/fi";

const featureData = [
  {
    icon: <FiUsers />,
    title: "Доступ к миллионам пользователей",
    description: "Telegram имеет более 900 миллионов активных пользователей ежемесячно, обеспечивая мгновенный доступ к глобальной аудитории."
  },
  {
    icon: <FiCreditCard />,
    title: "Платежи внутри платформы",
    description: "Встроенные платежные решения позволяют совершать транзакции прямо в приложении, обеспечивая бесшовный опыт покупок для пользователей."
  },
  {
    icon: <FiLayers />,
    title: "Нативный интерфейс",
    description: "Создавайте мини-приложения, которые выглядят и ощущаются как часть Telegram, обеспечивая знакомый и понятный для пользователей опыт."
  },
  {
    icon: <FiBarChart2 />,
    title: "Аналитика и конверсии",
    description: "Отслеживайте взаимодействия пользователей и оптимизируйте конверсии для достижения максимальной эффективности вашего бизнеса."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof featureData[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-dark to-gray-900 rounded-2xl p-6 backdrop-blur-sm border-t border-l border-gray-800/30 shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-dark/80 to-dark flex items-center justify-center text-accent mb-6 text-2xl rounded-xl border border-gray-800/50 shadow-inner">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2
            }}
          >
            {feature.icon}
          </motion.div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-light-text group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.5, 0],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <motion.div 
        className="absolute top-40 left-20 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] opacity-50 z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-40 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] opacity-50 z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-text to-light-text">Преимущества</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Telegram Mini Apps</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Создайте уникальное мини-приложение для вашего бизнеса и воспользуйтесь всеми преимуществами экосистемы Telegram
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
