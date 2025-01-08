import './index.css';
import React, { useRef, useState, useEffect } from "react";
import Webcam from 'react-webcam';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const captureInterval = 3000;
  const [imageSrc1, setImageSrc1] = useState(null);

  const webcamRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        captureAndRecognize();
      }, captureInterval);

      return () => clearInterval(interval);
    }
  }, [isScanning]); 

  const captureAndRecognize = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    const blob = await fetch(imageSrc).then((res) => res.blob());

    const formData = new FormData();
    formData.append('image', blob, 'captured_image.jpg');


    if (isScanning) {
      try {
        const response = await axios.post(
          'http://156.38.173.36:5000/recognize-face',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        

        if (response.data.faces && response.data.faces[0] && response.data.faces[0].status && response.data.faces[0].status === "ok") {
          setImageSrc1(response.data.faces.image);
          setName(response.data.faces[0].name);
          setTime(response.data.faces[0].time);
          setIsScanning(false); 
        }

        if (response.data.faces && response.data.faces[0] && response.data.faces[0].status && response.data.faces[0].status === "bad") {
          navigate('/Page4', { replace: true, state: imageSrc1})

        }
      } catch (error) {
        console.error('Error recognizing face:', error);
      }
    }
  };

  const message = name + " " + time
  
  useEffect(() => {
    if (!isScanning) {
      navigate('/Page2', { replace: true, state: message})
}
  }, [isScanning, name, navigate]); 

  return (
    <div>
      {isScanning ? (
        <div className='main-container1'>
          <span className='face-recognition1'>Face Recognition</span>
          <div className='image1'>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
          </div>
          <span className='hold-your-head1'>
            Hold your head still for at least 10 seconds to get accurate face
            recognition
          </span>
          <div className='live1'>
            <span className='analyzing1'>Analyzing</span>
            <div className='mdi-camera1'>
              <div className='tabler-loader1'>
                <div className='vector1' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Redirecting...</div> 
      )}
    </div>
  );
}
