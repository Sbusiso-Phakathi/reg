import './index.css';
import React, { useRef, useState } from "react";
import Webcam from 'react-webcam';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    const data = location.state;
   
    const navigate = useNavigate();

    const [isScanning, setIsScanning] = useState(true);
    const webcamRef = useRef(null);
  
    const captureAndSendImage = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;
  
      const blob = await fetch(imageSrc).then((res) => res.blob());
      console.log("Blob size:", blob.size);

      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const timestamp = new Date().getTime();

      formData.append('image', blob, `captured_image_${timestamp}.jpg`);
  
      try {
        const response = await axios.post(
          'http://127.0.0.1:5002/upload-image',  
          formData,
          { headers: { 'Content-Type': 'multipart/form-data', "Cache-Control": "no-cache", } }
        );
  
        console.log(response.data);
        navigate('/page6', { replace: true,  state: response.data}); 
        setIsScanning(false); 
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  
    return (
      <div>
        {isScanning ? (
          <div className="main-container1">
            <span className="face-detection">Face capture</span>
            <div className="image1">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="webcam"
              />
            </div>
            <span className="hold-your-head1">
              Hold your head still for at least 10 seconds to get an accurate image.
            </span>
  
            <button className='live-button3' onClick={captureAndSendImage}><span className='next-span3'>Submit</span></button>
          </div>
        ) : (
          <div>Image uploaded successfully!</div>
        )}
      </div>
    );
  }
