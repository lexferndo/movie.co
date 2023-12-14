import YouTube from "react-youtube";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const VideoPlayer = ({ open, youtubeId, handleClick }) => {
  const [opts, setOpts] = useState({
    height: "0",
    width: "0",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth > 768 ? 854 : window.innerWidth - 20;
      const height = window.innerWidth > 768 ? 480 : window.innerWidth - 180;

      setOpts({
        height: height.toString(),
        width: width.toString(),
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return open ? (
    <div className="fixed w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center transition-all duration-500 top-0 bottom-0 z-30">
      <div className="w-fit grid place-content-center">
        <div className="flex items-center justify-between p-3 rounded-t-md bg-black">
          <h1 className="text-2xl font-medium text-primary cursor-default">
            Trailer
          </h1>
          <IoMdClose
            className="text-2xl font font-medium fill-primary cursor-pointer"
            onClick={handleClick}
          />
        </div>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={opts}
        />
      </div>
    </div>
  ) : null;
};

VideoPlayer.propTypes = {
  open: PropTypes.bool.isRequired,
  youtubeId: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default VideoPlayer;
