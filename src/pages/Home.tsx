import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/3ec2fd23-beb3-4d57-b278-9ed7cdd39d2d.png"
            alt="Luxury Mediterranean courtyard with fountain and outdoor seating"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/90 text-white text-sm mb-6 rounded-full">
              Welcome to Hotel Victoria
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Experience Luxury & Comfort
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Discover authentic Texas hospitality in our luxurious ranch-style boutique hotel just outside of Victoria
            </p>
            <button className="bg-white text-foreground px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors duration-300">
              Book Your Stay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;