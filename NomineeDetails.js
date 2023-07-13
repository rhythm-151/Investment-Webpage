import React, { useState } from 'react';
import './NomineeDetails.css'

const NomineeForm = () => {
  const [numOfNominees, setNumOfNominees] = useState(0);
  const [nomineeDetails, setNomineeDetails] = useState([]);

  const handleNumOfNomineesChange = (e) => {
    const count = parseInt(e.target.value);
    setNumOfNominees(count);

    // Reset the nominee details when the number changes
    setNomineeDetails([]);
  };

  const handleNomineeDetailChange = (index, field, value) => {
    const updatedNomineeDetails = [...nomineeDetails];
    updatedNomineeDetails[index] = {
      ...updatedNomineeDetails[index],
      [field]: value,
    };
    setNomineeDetails(updatedNomineeDetails);
  };

  const renderNomineeFields = () => {
    const fields = [];

    for (let i = 0; i < numOfNominees; i++) {
      const ordinalSuffix = getOrdinalSuffix(i + 1);
      const ordinalText = `${i + 1}${ordinalSuffix}`;
      const nomineeHeadingClass = i === 0 ? 'nominee-heading-first' : '';
      fields.push(
        <div className='colori'>
        <div key={i} className='nominee-fields'>
          <h3 className={nomineeHeadingClass}>{ordinalText} Nominee Details:</h3>
          <label className='fields'></label>
          <input
            placeholder="Nominee Name"
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'name', e.target.value)}
          />
          <br />

          <label  className='fields'></label>
          <input
          placeholder="Nominee PAN"
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'pan', e.target.value)}
          />
          <br />

          <label className='fields'></label>
          <input
          placeholder='Nominee Email Id'
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'email', e.target.value)}
          />
          <br />

          <label className='fields'></label>
          <input
          placeholder='Nominee Contact No.'
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'contactNo', e.target.value)}
          />
          <br />

          <label className='fields1'>Date of Birth:</label>
          <div className='dob'>
            <select
              onChange={(e) => handleNomineeDetailChange(i, 'day', e.target.value)}
            >
              <option value="">Day</option>
              {renderOptions(1, 31)}
            </select>
            <select
              onChange={(e) => handleNomineeDetailChange(i, 'month', e.target.value)}
            >
              <option value="">Month</option>
              {renderMonthOptions()}
            </select>
            <select
              onChange={(e) => handleNomineeDetailChange(i, 'year', e.target.value)}
            >
              <option value="">Year</option>
              {renderOptions(1900, 2023)}
            </select>
          </div>
          <br />

          <label className='fields'></label>
          <input
          placeholder='Nominee Relationship with 1st Applicant'
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'relationship', e.target.value)}
          />
          <br />

          <label className='fields'></label>
          <input
            placeholder="Nominee %"
            type="text"
            onChange={(e) => handleNomineeDetailChange(i, 'percentage', e.target.value)}
          />
          <br />
        </div>
        </div>
      );
    }

    return fields;
  };

  const renderOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  };

  const renderMonthOptions = () => {
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
      'December',
    ];

    return months.map((month, index) => (
      <option key={index} value={index + 1}>
        {month}
      </option>
    ));
  };

  const getOrdinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = number % 100;
    const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
    return suffix;
  };

  return (
    <div className='hd'>
      <div className='heading-container'>
      <h2>Nominee Details</h2>
      <label></label>
      <select  className='selectnomineedropdown'
      value={numOfNominees} onChange={handleNumOfNomineesChange}>
        <option value="0">Select No of Nominees</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      </div>
      <br />

      {renderNomineeFields()}
    </div>
  );
};

export default NomineeForm;
