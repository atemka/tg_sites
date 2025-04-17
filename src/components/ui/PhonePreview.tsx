import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PhonePreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[150px] h-[150px] rounded-full bg-primary/5 blur-[50px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mx-auto">
          {/* Phone Device */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto w-[280px] h-[500px] rounded-[30px] overflow-hidden border-[10px] border-dark-light/20 shadow-xl shadow-dark/50"
          >
            {/* Phone Background */}
            <div className="absolute inset-0 bg-dark">
              <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] rounded-full bg-primary/10 blur-[40px]" />
              <div className="absolute bottom-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full bg-accent/10 blur-[40px]" />
            </div>

            {/* Phone Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Status Bar */}
              <div className="h-12 px-4 flex items-center gap-3">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary"
                />
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={inView ? { width: 100, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="h-2 bg-gray-400/30 rounded-full"
                />
              </div>

              {/* Content Area */}
              <div className="flex-grow p-4 flex flex-col gap-4">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="w-full p-4 rounded-xl bg-dark-light/20 border border-gray-800/30"
                >
                  <div className="h-2 w-3/4 bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-full bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-4/5 bg-gray-400/30 rounded-full" />
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="w-full p-4 rounded-xl bg-dark-light/20 border border-gray-800/30"
                >
                  <div className="h-2 w-1/2 bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-full bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-3/5 bg-gray-400/30 rounded-full" />
                </motion.div>
                
                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="w-full p-4 rounded-xl bg-dark-light/20 border border-gray-800/30"
                >
                  <div className="h-2 w-2/3 bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-full bg-gray-400/30 rounded-full mb-2" />
                  <div className="h-2 w-4/5 bg-gray-400/30 rounded-full" />
                </motion.div>
              </div>

              {/* Bottom Navigation */}
              <div className="h-16 flex justify-center items-center gap-8 border-t border-gray-800/30">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="w-8 h-8 rounded-md bg-gradient-to-r from-accent to-accent/80"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="w-8 h-8 rounded-md bg-gray-700/50"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="w-8 h-8 rounded-md bg-gray-700/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PhonePreview; 