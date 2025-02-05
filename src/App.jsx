import  { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTimeUTC, setCurrentTimeUTC] = useState("");

   
  const updateTime = () => {
    const now = new Date();
    const utcTime = now.toUTCString();
    setCurrentTimeUTC(utcTime);
  };

   
  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-card">
      
      <img
        src="/src/assets/image.png"   
        alt="Profile"
        className="profile-picture"
        data-testid="profilePicture"
      />

       
      <h1 className="full-name" data-testid="fullName">
        Tidding Ramsey Binda
      </h1>
 
      <h2 className="job-title" data-testid="jobTitle">
        Frontend Developer
      </h2>

       
      <p className="short-bio" data-testid="shortBio">
        Passionate about building user-friendly and responsive web applications. I enjoy learning new technologies and solving real-world problems through code.
      </p>

   
      <p className="current-location" data-testid="currentLocation">
        Buea, Cameroon
      </p>
 
      <p className="email-address" data-testid="emailAddress">
        tiddingramsey@gmail.com
      </p>
 
      <div className="social-links" data-testid="socialLinks">
         
        <a href="https://github.com/McTech6" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tiddingramsey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      
      <p className="current-time-utc" data-testid="currentTimeUTC">
        Current Time (UTC): {currentTimeUTC}
      </p>
    </div>
  );
}

export default App;

