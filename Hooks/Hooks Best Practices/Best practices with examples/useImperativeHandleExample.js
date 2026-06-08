const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    // Only expose the methods we want parents to use
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
    setPlaybackRate(rate) {
      videoRef.current.playbackRate = rate;
    },
    // Notice we're not exposing things like volume, currentTime, or the video element itself
  }));

  return (
    <div className="video-wrapper">
      <video 
        ref={videoRef}
        src={props.src}
        width="100%"
        controls
      />
      {/* We could have internal controls here that use videoRef directly */}
    </div>
  );
});

// Using the component:
const App = () => {
  const playerRef = useRef();

  return (
    <div>
      <VideoPlayer 
        ref={playerRef}
        src="/awesome-video.mp4" 
      />
      <div className="custom-controls">
        <button onClick={() => playerRef.current.play()}>
          Play
        </button>
        <button onClick={() => playerRef.current.setPlaybackRate(2)}>
          2x Speed
        </button>
      </div>
    </div>
  );
};