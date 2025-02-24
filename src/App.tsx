import React from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChefPreview } from './components/ChefPreview';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Testimonials } from './components/Testimonials';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SchemaMarkup } from './components/SchemaMarkup';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup />
      <Navbar />
      
      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>
      
      <Element name="features">
        <Features />
      </Element>
      <Element name="menu">
        <FeaturedMenu />
      </Element>

      <Element name="chefs">
        <ChefPreview />
      </Element>

     

      <Element name="plans">
        <SubscriptionPlans />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Element name="blog">
        <Blog />
      </Element>

      <Element name="faq">
        <FAQ />
      </Element>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;