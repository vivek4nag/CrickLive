const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 shadow-lg">
      <div className="flex flex-col justify-center items-center h-14 md:h-24 text-white">
        <h1 className="text-2xl md:text-5xl md:mb-2 animate-pulse drop-shadow-lg font-extrabold">🏏 CrickLive Score 🏏</h1>
        <p className="text-sm md:text-lg italic font-light tracking-wider opacity-90">Follow cricket score around the world live !</p>
      </div>
    </div>
  );
};

export default Header;
