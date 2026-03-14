import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

// Solution code
// import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const ref = useRef(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <video
//         width="250"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       >
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   )
// }
