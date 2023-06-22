import React from 'react';
import videoFile from './green.mp4';
import { TailSpin } from  'react-loader-spinner'
function Animation() {
  return (
    <div>
        <div style={{position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}}
        >
        <TailSpin
            height="50"
            width="50"
            color="#D3D3D3"
            ariaLabel="tail-spin-loading"
            radius="0.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
}

export default Animation;
