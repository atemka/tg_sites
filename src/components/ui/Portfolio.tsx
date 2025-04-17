import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  gradient?: string;
  iconGradient?: string;
  icon?: React.ReactNode;
  features?: string[];
}

// Примеры работ
const projects: Project[] = [
  {
    title: 'Знакомства',
    description: 'Приложение для поиска новых знакомств с интерактивным интерфейсом и системой геолокации',
    image: '/dating-app.png',
    category: 'Услуги',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconGradient: 'from-purple-500 to-pink-500',
    icon: <FiHeart />,
    features: ['Геолокация', 'Чат', 'Профили', 'Уведомления']
  },
  {
    id: 1,
    title: "Платежное решение",
    category: "Финансы",
    description: "Приложение для быстрых платежей и переводов, интегрированное с банковским API",
    image: "/pay.png"
  },
  {
    id: 2,
    title: "Онлайн магазин",
    category: "E-commerce",
    description: "Магазин с каталогом товаров и корзиной для покупок внутри Telegram",
    image: "/online-shop.png"
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
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
      className="bg-gradient-to-br from-dark to-gray-900 border border-gray-800/30 rounded-2xl overflow-hidden group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="aspect-[4/3] relative bg-gray-900/50 overflow-hidden">
        {/* Фоновый градиент для изображения */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-dark/80"></div>
        
        {/* Здесь должно быть изображение проекта */}
        <div className="absolute inset-0 flex items-center justify-center">
          {project.title === 'Знакомства' ? (
            <>
              {/* Фон для приложения знакомств */}
              <motion.div 
                className="absolute inset-0 bg-[#1A0030]"
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Отображение реального изображения */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/dating-app.png"
                  alt="Приложение для знакомств"
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : project.title === 'Онлайн магазин' ? (
            <>
              {/* Фон для онлайн магазина */}
              <motion.div 
                className="absolute inset-0 bg-[#0A1F2F]"
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Отображение реального изображения */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/online-shop.png"
                  alt="Онлайн магазин в Telegram"
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : project.title === 'Платежное решение' ? (
            <>
              {/* Фон для платежного решения */}
              <motion.div 
                className="absolute inset-0 bg-[#121212]"
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Отображение реального изображения */}
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/pay.png"
                  alt="Платежное решение для Telegram"
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : (
            <>
              <motion.div 
                className="w-[160px] h-[160px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-[60px]"
                animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-light-text"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                <div className="w-16 h-16 bg-dark/80 backdrop-blur-sm rounded-xl border border-gray-800/50 shadow-inner flex items-center justify-center">
                  <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    {project.category?.charAt(0) || ''}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-2 px-6 text-sm shadow-lg shadow-accent/20 backdrop-blur-sm"
          >
            Подробнее
          </motion.button>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary text-sm font-medium mb-2"
        >
          {project.category}
        </motion.span>
        
        <motion.h3 
          initial={{ y: 10, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          className="text-xl font-semibold mb-3 text-light-text group-hover:text-accent transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="text-gray-400"
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="portfolio" className="py-16 md:py-28 relative overflow-hidden">
      {/* Фоновые градиенты */}
      <motion.div 
        className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] opacity-50 z-0"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 15, 
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-text to-light-text">Наши </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">проекты</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Примеры Telegram Mini Apps, которые мы разработали для наших клиентов
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
