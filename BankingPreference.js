import React, { useState } from "react";
import './BankingPreference.css'
const BankingPreference = () => {
  const [bankOption, setBankOption] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountTitle, setAccountTitle] = useState("");

  const handleBankOptionChange = (event) => {
    setBankOption(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleIfscCodeChange = (event) => {
    setIfscCode(event.target.value);
  };

  const handleAccountTitleChange = (event) => {
    setAccountTitle(event.target.value);
  };
  
  return (
    <div className="bank-pref">
      <div className="row">
        <h2>Banking Preference:</h2>
        <div className='ccheque'>
          <input
            type="radio"
            id="cancelledCheque"
            placeholder="Cancelled Cheque"
            name="bankOption"
            value="cancelledCheque"
            checked={bankOption === "cancelledCheque"}
            onChange={handleBankOptionChange}
          />
          <label htmlFor="cancelledCheque" >Cancelled Cheque</label>
        </div>
        <div className='bankdetailing'>
          <input
            type="radio"
            id="bankDetails"
            name="bankOption"
            value="bankDetails"
            
            checked={bankOption === "bankDetails"}
            onChange={handleBankOptionChange}
          />
          <label htmlFor="bankDetails">Bank Details</label>
        </div>
      </div>
      {bankOption === "bankDetails" && (
        <div className="bank-details">
          <div>
            <label htmlFor="bankName"></label>
            <input
              type="text"
              id="bankName"
              value={bankName}
              onChange={handleBankNameChange}
              placeholder=" Bank name" required
            />
          </div>
          <div>
            <label htmlFor="accountNumber"></label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              placeholder="Account Number" required
            />
          </div>
          <div>
            <label htmlFor="ifscCode"></label>
            <input
              type="text"
              id="ifscCode"
              value={ifscCode}
              onChange={handleIfscCodeChange}
              placeholder="IFSC Code" required
            />
          </div>
          <div>
            <label htmlFor="accountTitle"></label>
            <input
              type="text"
              id="accountTitle"
              value={accountTitle}
              onChange={handleAccountTitleChange}
              placeholder="Account Title" required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BankingPreference;
