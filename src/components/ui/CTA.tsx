import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend } from "react-icons/fi";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Фоновый градиент */}
      <motion.div 
        className="absolute inset-0 bg-dark opacity-90 z-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.9 } : {}}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className="absolute -left-[20%] bottom-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] opacity-60 z-0"
        animate={{ 
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute -right-[10%] top-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[150px] opacity-60 z-0"
        animate={{ 
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden backdrop-blur-lg border border-gray-800/30 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 z-0"></div>

          {/* 3D эффект с плавающими элементами */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[10%] right-[10%] w-24 h-24 rounded-xl border border-accent/20 bg-dark/40 backdrop-blur-sm"
            />
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                x: [0, -15, 0],
                rotate: [0, -7, 0],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-[15%] left-[15%] w-32 h-32 rounded-full border border-primary/20 bg-dark/30 backdrop-blur-sm"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[30%] left-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-[20%] right-[25%] w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
            />
          </div>

          <div className="relative z-10 px-6 py-16 md:p-20 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl rounded-full" />
                <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full mx-auto relative" />
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-text to-gray-300">Готовы создать свое </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Telegram mini app?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Начните разрабатывать свое мини-приложение уже сегодня и откройте для себя новые возможности для роста бизнеса в Telegram.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <motion.a 
                href="https://t.me/nikita_delo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="btn-primary shadow-lg shadow-accent/20 relative overflow-hidden group flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                <span className="relative z-10">Начать проект</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
              
              <motion.a 
                href="https://t.me/nikita_delo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="btn-secondary backdrop-blur-sm relative overflow-hidden group flex items-center justify-center"
              >
                <span className="relative z-10">Получить консультацию</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
