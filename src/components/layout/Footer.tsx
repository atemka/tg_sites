import { FiTwitter, FiInstagram, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    { icon: <FiTwitter size={20} />, url: "#" },
    { icon: <FiInstagram size={20} />, url: "#" },
    { icon: <FiLinkedin size={20} />, url: "#" },
    { icon: <FiGithub size={20} />, url: "#" },
    { icon: <FiSend size={20} />, url: "https://t.me/nikita_delo" }
  ];

  const footerLinks = {
    services: [
      { name: "Telegram mini apps", url: "#" },
      { name: "Веб-разработка", url: "#" },
      { name: "UX/UI Дизайн", url: "#" },
      { name: "Mobile App", url: "#" }
    ],
    company: [
      { name: "О нас", url: "#" },
      { name: "Карьера", url: "#" },
      { name: "Блог", url: "#" },
      { name: "Контакты", url: "#" }
    ],
    contacts: [
      { text: "Telegram: @nikita_delo" },
      { text: "+7 (999) 123-45-67" },
      { text: "Москва, Россия" }
    ]
  };

  return (
    <footer className="relative overflow-hidden pt-20 pb-10 border-t border-gray-800/30">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute top-0 right-[10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">NV Agency</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Разработка Telegram mini apps и веб-приложений для вашего бизнеса
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-light/10 backdrop-blur-sm border border-gray-800/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Услуги */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <h4 className="font-semibold text-lg mb-5 text-light-text relative inline-block">
              Услуги
              <motion.span 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent to-primary rounded-full"
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Компания */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1"
          >
            <h4 className="font-semibold text-lg mb-5 text-light-text relative inline-block">
              Компания
              <motion.span 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent to-primary rounded-full"
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Контакты */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1"
          >
            <h4 className="font-semibold text-lg mb-5 text-light-text relative inline-block">
              Контакты
              <motion.span 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent to-primary rounded-full"
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.contacts.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  className={`text-gray-400 flex items-center ${index === 0 ? "hover:text-accent transition-colors" : ""}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mr-2"></span>
                  {index === 0 ? (
                    <a href="https://t.me/nikita_delo" target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NV Agency. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
