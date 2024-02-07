import React, { useState, useEffect } from 'react';

const VideoComponent = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        const fetchVideoData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/video/');
            if (!response.ok) {
              throw new Error(`Error fetching video: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log('Video data:', data);
            setVideoData(data);
          } catch (error) {
            console.error(error.message);
          }
        };
    
        
        fetchVideoData();
      }, []); 

    return (
        <div>
            {videoData.map(video => (
                <div className='video-container'key={video.id}>
                    <h2 className='video-title'>{video.title}</h2>
                    <h3 className='video-description'>{video.description}</h3>
                    <video className="dog-training-video" width="720" height="520" src={video.video} type="video/mp4" controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default VideoComponent;
