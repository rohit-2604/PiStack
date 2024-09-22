import React, { useRef } from 'react';
import './Videoplayer.css'; // Import CSS for styling
import video from '../../assets/sample_vid.mp4'; 

const Videoplayer = ({ playstate, setPlaystate }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlaystate(false);
    }
  };

  return (
    <div 
      className={`videoplayer ${playstate ? '' : 'hide'}`} 
      ref={player} 
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video> {/* Video player */}
    </div>
  );
};

export default Videoplayer;
