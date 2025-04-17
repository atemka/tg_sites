/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#F8F9FF",  // Светло-синий фон
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#2A27C9",     // Основной синий (акцент заголовков)
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#6C63FF",   // Фиолетовый (градиенты, подзаголовки)
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#00BF63",      // Зеленый (кнопки, прогресс-бары)
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        dark: "#0d0d15",        // Темный фон (из скриншота)
        "dark-light": "#2D2D2D", // Основной текст на светлом фоне
        "light-text": "#FFFFFF", // Текст на темном фоне
        hover: "rgba(108, 99, 255, 0.1)" // Для эффектов наведения
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': '80px',
        'h2': '48px',
        'h3': '24px',
        'body': '16px',
        'button': '18px'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #2A27C9 0%, #6C63FF 100%)',
        'gradient-accent': 'linear-gradient(45deg, #00BF63 0%, #2A27C9 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    'bg-accent/20',
    'bg-primary/20', 
    'bg-secondary/20',
    'border-accent/30',
    'border-primary/30',
    'border-secondary/30',
    'shadow-accent/5',
    'shadow-primary/5',
    'shadow-secondary/5',
    'text-accent',
    'text-primary',
    'text-secondary',
    'bg-accent/10',
    'bg-primary/10',
    'bg-secondary/10'
  ]
};
