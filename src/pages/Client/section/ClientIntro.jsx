const ClientIntro = () => {
  return (
    <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/clienthero.jpg')" }} 
      />

      {/* Blue + Orange Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/60 to-orange-500/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 lg:px-24 text-white">
        
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Trusted <span className="text-orange-400">Electro-Mechanical</span> & Industrial Clients
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl text-white">
          We deliver reliable <span className="text-orange-300 font-medium">electro-mechanical</span>, 
          electrical, and mechanical engineering solutions to leading industrial 
          and infrastructure organizations.
        </p>

      </div>
    </section>
  );
};

export default ClientIntro;