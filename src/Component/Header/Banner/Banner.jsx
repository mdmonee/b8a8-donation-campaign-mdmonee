const Banner = () => {
    return (
      <div className="relative">
        <img
          className="opacity-30"
          src="https://i.ibb.co/5kx7cSz/image-1600x600.png"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-black text-5xl font-bold mb-6">
            I Grow By Helping People In Need
          </p>
          <div className="flex items-center justify-center"> {/* Added justify-center */}
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-400 rounded-l-md"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  