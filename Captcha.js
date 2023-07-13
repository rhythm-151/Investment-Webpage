import React, { useState } from "react";
import './Captcha.css'
const Captcha = () => {
  const [captchaCode, setCaptchaCode] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [captchaMatch, setCaptchaMatch] = useState(false);

  const captchaCodes = ["ABC123", "DEF456", "GHI789"]; // Example captcha codes

  const generateCaptchaCode = () => {
    const randomIndex = Math.floor(Math.random() * captchaCodes.length);
    return captchaCodes[randomIndex];
  };

  const handleCaptchaChange = (event) => {
    setEnteredCaptcha(event.target.value);
  };

  const handleCaptchaSubmit = () => {
    // Validate the entered captcha
    const isMatch = enteredCaptcha === captchaCode;
    setCaptchaMatch(isMatch);

    // Clear the entered captcha field
    setEnteredCaptcha("");
  };

  const refreshCaptcha = () => {
    // Generate a new captcha code
    const newCaptchaCode = generateCaptchaCode();
    setCaptchaCode(newCaptchaCode);

    // Clear the entered captcha field and reset captcha match
    setEnteredCaptcha("");
    setCaptchaMatch(false);
  };

  // Initial captcha code generation
  useState(() => {
    const initialCaptchaCode = generateCaptchaCode();
    setCaptchaCode(initialCaptchaCode);
  }, []);

  return (
    <div className="box">
      <p className='main-heading'>
        I/We understand that the above information provided is correct to the
        best of my knowledge/belief, and understand the adversities/risk
        tolerance arising from mis-placement of information/data in any manner.
      </p>
      <div className='captcha-box'> 
      <p >Captcha code</p>
      </div>
      
      <div className='enter-captcha-box' >
        <label htmlFor="enteredCaptcha">Enter captcha</label>
        <input
          type="text"
          id="enteredCaptcha"
          value={enteredCaptcha}
          onChange={handleCaptchaChange}
        />
      </div>
      <button className="submit-button" onClick={handleCaptchaSubmit}>Submit</button>
    </div>
  );
};

export default Captcha;
