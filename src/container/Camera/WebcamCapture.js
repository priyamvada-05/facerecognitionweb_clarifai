import React from 'react'



const WebcamCapture = () => {

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );


}


 export default WebcamCapture;