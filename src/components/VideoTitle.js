const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-black bg-white p-4 text-xl px-8 rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 text-white bg-gray-500 p-4 text-xl px-10 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
