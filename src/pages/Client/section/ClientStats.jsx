const ClientStats = () => {
  return (
    <section
      className="relative py-24 px-6 lg:px-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/Service2.png')", // change to your image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-5xl font-bold text-orange-500">250+</h3>
          <p className="text-white mt-2 tracking-wide">
            Projects Completed
          </p>
        </div>

        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-5xl font-bold text-orange-500">100+</h3>
          <p className="text-white mt-2 tracking-wide">
            Satisfied Clients
          </p>
        </div>

        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-5xl font-bold text-orange-500">7+</h3>
          <p className="text-white mt-2 tracking-wide">
            Years Experience
          </p>
        </div>

        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-5xl font-bold text-orange-500">5+</h3>
          <p className="text-white mt-2 tracking-wide">
            Industries Served
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClientStats;