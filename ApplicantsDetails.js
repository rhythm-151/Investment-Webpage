import React from 'react';
import './ApplicantsDetails.css';

const ApplicantDetails = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const handleSendOTP = () => {
    // Logic for sending OTP
  };

  const handleVerifyOTP = () => {
    // Logic for verifying OTP
  };

  const handleResendOTP = () => {
    // Logic for resending OTP
  };

  const handleAadharUpload = (e) => {
    // Logic for handling Aadhar card file upload
    const file = e.target.files[0];
    // Handle the file upload
  };

  const handlePanUpload = (e) => {
    // Logic for handling PAN card file upload
    const file = e.target.files[0];
    // Handle the file upload
  };

  const generateDayOptions = () => {
    const options = [];
    for (let day = 1; day <= 31; day++) {
      options.push(
        <option key={day} value={day}>
          {day}
        </option>
      );
    }
    return options;
  };

  const generateYearOptions = () => {
    const options = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 100; year--) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="applicant-details">
      <div className="heading">
        <h3>Applicant Details</h3>
      </div>
      <div className="account-holder-details">
        <h3>1st Account Holder</h3>
        <div className='form-field'>
          <label htmlFor="applicantName"></label>
          <input type="text" id="applicantName" placeholder='Applicant Name' />
        </div>
        <div className='form-field'>
          <label htmlFor="contactName"></label>
          <input type="text" id="contactName"  placeholder='Contact No'/>
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
        <div className='form-field'>
          <label htmlFor="otp"></label>
          <input type="text" id="otp" placeholder='Enter OTP' />
          <button onClick={handleVerifyOTP}>Verify</button>
          <button onClick={handleResendOTP}>Resend OTP</button>
        </div>
        <div className='form-field'>
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder='Email Id' />
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
        <div className='form-field'>
          <label htmlFor="verifyEmailOTP"></label>
          <input type="text" id="verifyEmailOTP"  placeholder='Enter OTP'/>
          <button onClick={handleVerifyOTP}>Verify</button>
          <button onClick={handleResendOTP}>Resend OTP</button>
        </div>
        <div className='pancard'>
          <label htmlFor="panNo"></label>
          <input type="text" id="panNo"  placeholder='PAN No'/>
        </div>

        <div className='Dateofbirth'>
          <label className="dob-heading">Date of Birth:</label>
          <br></br>
          <select className='daydd'>
            <option value="">Day</option>
            {generateDayOptions()}
          </select>
          <select className='monthdd'>
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select className='yeardd'>
            <option value="">Year</option>
            {generateYearOptions()}
          </select>
        </div>
        <div className='upload'>
         <div >
          <label htmlFor="panFile">Upload scanned copy of PAN card:</label>
          <input type="file" id="panFile" onChange={handlePanUpload} />
          <button className="upload-button">Upload</button>

        </div> 
         </div>

         <div className='upload'>
         <div >
          <label htmlFor="aadhaarFile">Upload scanned copy of Aadhar card:</label>
          <input type="file" id="panFile" onChange={handlePanUpload} />
          <button className="upload-button">Upload</button>

        </div> 
         </div>
        
      </div>
    </div>
  );
};

export default ApplicantDetails;
