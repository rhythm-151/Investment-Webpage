import React from 'react';
import InvestmentDetails from './components/InvestmentDetails/InvestmentDetails';
import ApplicantDetails from './components/ApplicantsDetails/ApplicantsDetails';
import InvestmentRiskProfiler from './components/InvestmentRiskProfiler/InvestmentRiskProfiler';
import Captcha from "./components/Captcha/Captcha";
import BankingPreference from './components/BankingPreference/BankingPreference'
import NomineeDetails from './components/NomineeDetails/NomineeDetails';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InvestmentDetails />
        <ApplicantDetails />
        <BankingPreference />
        <NomineeDetails />
        <InvestmentRiskProfiler />
        <Captcha />
      </header>
    </div>
  );
}

export default App;
