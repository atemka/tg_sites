import Layout from "./components/layout/Layout";
import Hero from "./components/ui/Hero";
import Features from "./components/ui/Features";
import Process from "./components/ui/Process";
import Portfolio from "./components/ui/Portfolio";
import PriceCalculator from "./components/ui/PriceCalculator";
import CTA from "./components/ui/CTA";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Process />
      <PriceCalculator />
      <Portfolio />
      <CTA />
    </Layout>
  );
};

export default App;
