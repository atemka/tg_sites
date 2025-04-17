import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import DevTrilemma from "./DevTrilemma";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Абстрактные фоновые элементы */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-[20%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[20%] w-[250px] h-[250px] rounded-full bg-accent/10 blur-[70px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <h1 className="mb-6 text-light-text relative z-10">
                <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Telegram Mini Apps</span> для вашего бизнеса
              </h1>
              <motion.div 
                className="absolute -top-2 -left-4 w-20 h-8 bg-primary/20 blur-xl rounded-full"
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-400 mb-8 text-lg max-w-xl"
            >
              Вовлекайте свою аудиторию там, где они уже находятся. Создайте мини-приложение внутри Telegram для вашего бизнеса и расширьте охват до миллионов активных пользователей.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://t.me/nikita_delo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-lg shadow-accent/20 relative overflow-hidden group flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                <span className="relative z-10">Начать проект</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <a 
                href="https://t.me/nikita_delo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary backdrop-blur-sm relative overflow-hidden group flex items-center justify-center"
              >
                <span className="relative z-10">Узнать больше</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-12 -right-10 z-10 w-24 h-24 rounded-full bg-accent/20 backdrop-blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-16 -left-10 z-10 w-28 h-28 rounded-full bg-primary/20 backdrop-blur-xl"
            />
            
            <div className="-mt-16 -mb-16">
              <DevTrilemma />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
