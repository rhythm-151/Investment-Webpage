import React from "react";
import "./InvestmentDetails.css";
const InvestmentDetails = () => {
  const accountTypes = [
    "Select",
    "Savings Account",
    "Checking Account",
    "Certificate of Deposit (CD)",
    "Money Market Account",
    "Individual Retirement Account (IRA)",
    "401(k) Account",
    "Brokerage Account",
    "Health Savings Account (HSA)",
    "Education Savings Account (ESA)",
    "Custodial Account",
    "Trust Account",
    "Joint Account",
    "Business Account",
    "High-Yield Savings Account",
    "Online Banking Account",
    "Prepaid Card Account",
    "Foreign Currency Account",
    "Term Deposit Account",
    "Merchant Account",
    "Charitable Giving Account",
  ];
  const portfolioOptions = [
    "Select",
    "Conservative Portfolio",
    "Balanced Portfolio",
    "Aggressive Portfolio",
    "Income Strategy",
    "Growth Strategy",
    "Value Strategy",
    "Dividend Focus",
    "Sector Rotation",
    "Index Tracking",
    "Quantitative Approach",
  ];
  const fundFeesCategories = [
    "Select",
    "Management Fee",
    "Expense Ratio",
    "Front-End Load",
    "Back-End Load",
    "Performance Fee",
    "Custodial Fee",
    "Transfer Agent Fee",
    "Audit Fee",
    "Regulatory Fee",
    "Distribution Fee",
    "Shareholder Servicing Fee",
    "12b-1 Fee (Marketing and Distribution Fee)",
    "Advisory Fee",
    "Incentive Fee",
    "Administration Fee",
    "Legal Fee",
    "Fund Accounting Fee",
    "Compliance Fee",
    "Redemption Fee",
    "Purchase Fee",
  ];
  const countries = [
    "India",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Lakshadweep",  
  ];

  return (
    <div className="bkcolor">
      <div className="message-box">
        <h1 className="message-text">Welcome Investor,</h1>
        <h4>"To a world of sustainable wealth creation"</h4>
        <p className="message-description">
          A financial journey filled with capitalization and enormous wealth
          opportunities in an economic
          <span class="line-break">transition</span>
        </p>
      </div>

      <div className=" investment-details-container">
        <h3>Investment Details</h3>
        <div>
          <label htmlFor="accountType">Account Type:</label>
          <select id="accountType">
            {accountTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="portfolio">Portfolio/Strategy Name:</label>
          <select id="portfolio">
            {portfolioOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fundFeesCategory">Fund Fees Category:</label>
          <select id="fundFeesCategory">
            {fundFeesCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>


        <div>
          <label htmlFor="communicationAddress">Communication Address:</label>
          <input type="text" id="communicationAddress" />
         
        </div>
        
        <div>
        
          <label htmlFor="country">Country Of Tax Residency:</label>
          <select id="country">
            {countries.map((country) => (
              
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>








        <div>
          <label htmlFor="No of accountholders">No Of Account Holders:</label>
          <select id="accountholderlist">
            <option value="Mode 0">Select</option>
            <option value="Mode 1">1</option>
            <option value="Mode 2">2</option>
            <option value="Mode 3">3</option>
          </select>
        </div>


        <div >
          <label htmlFor="Quantum of Investment">Quantum of Investment:</label>
        <input type="text" id="quantumofIn"/>
        </div>


        <div>
          <label htmlFor="investmentMode">Investment Mode:</label>
          <select id="investmentMode">
            <option value="Mode 0">Select</option>
            <option value="Mode 1">Stocks</option>
            <option value="Mode 2">Mutual Funds</option>
            <option value="Mode 3">Real State</option>
            <option value="Mode 4">Peer-to-Peer</option>
            <option value="Mode 5">Exchange-Traded Funuds</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;




















