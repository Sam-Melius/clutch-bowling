"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [centerName, setCenterName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  const [numLanes, setNumLanes] = useState("");
  const [purchaseType, setPurchaseType] = useState("");
  const [regularLanePricePerHour, setRegularLanePricePerHour] = useState("");
  const [interactiveLanePricePerHour, setInteractiveLanePricePerHour] = useState("");
  const [hoursPlayedPerLanePerDay, setHoursPlayedPerLanePerDay] = useState("");
  const [daysOpenPerWeek, setDaysOpenPerWeek] = useState("");
  const [weeksPerYear, setWeeksPerYear] = useState("");

  const [interactiveSystemCostPerLane] = useState("25000");
  const [annualOperatingCostPerLane] = useState("2000");
  const [annualInteractiveSoftwareFeePerLane] = useState("1000");
  const [financingDownPaymentPercentage] = useState("20");
  const [annualInterestRate] = useState("8");
  const [loanTermYears] = useState("5");

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualIncrementalProfit, setAnnualIncrementalProfit] = useState(0);
  const [paybackPeriodYears, setPaybackPeriodYears] = useState(0);
  const [paybackPeriodMonths, setPaybackPeriodMonths] = useState(0);
  const [roiPercentage, setRoiPercentage] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const progressPercent = Math.floor((step / 4) * 100);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!centerName || !contactName || !email || !phoneNumber) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10,}$/.test(phoneNumber.replace(/\D/g, ""))) {
      setFormError("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    setStep(1);
  };

  const calculateROI = () => {
    const r = parseFloat(regularLanePricePerHour);
    const i = parseFloat(interactiveLanePricePerHour);
    const h = parseFloat(hoursPlayedPerLanePerDay);
    const d = parseFloat(daysOpenPerWeek);
    const w = parseFloat(weeksPerYear);
    const c = parseFloat(interactiveSystemCostPerLane);
    const o = parseFloat(annualOperatingCostPerLane);
    const s = parseFloat(annualInteractiveSoftwareFeePerLane);
    const dp = parseFloat(financingDownPaymentPercentage) / 100;
    const ir = parseFloat(annualInterestRate) / 100;
    const t = parseInt(loanTermYears);

    const totalInteractiveSystemCost = numLanes * c;
    let currentInitialInvestment = 0;
    let annualFinancingCost = 0;

    if (purchaseType === "cash") {
      currentInitialInvestment = totalInteractiveSystemCost;
    } else {
      const downPayment = totalInteractiveSystemCost * dp;
      const loanAmount = totalInteractiveSystemCost - downPayment;
      const monthlyInterestRate = ir / 12;
      const numberOfPayments = t * 12;
      let monthlyPayment = 0;

      if (monthlyInterestRate === 0) {
        monthlyPayment = loanAmount / numberOfPayments;
      } else {
        monthlyPayment = (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      }

      annualFinancingCost = monthlyPayment * 12;
      currentInitialInvestment = downPayment;
    }

    setInitialInvestment(currentInitialInvestment);

    const annualHoursPerLane = h * d * w;
    const totalAnnualRegularRevenue = numLanes * annualHoursPerLane * r;
    const totalAnnualInteractiveRevenue = numLanes * annualHoursPerLane * i;
    const totalAnnualOperatingCostRegular = numLanes * o;
    const totalAnnualOperatingCostInteractive = totalAnnualOperatingCostRegular + numLanes * s;

    const annualProfitRegular = totalAnnualRegularRevenue - totalAnnualOperatingCostRegular;
    let annualProfitInteractive = totalAnnualInteractiveRevenue - totalAnnualOperatingCostInteractive;

    if (purchaseType === "financed") {
      annualProfitInteractive -= annualFinancingCost;
    }

    const currentAnnualIncrementalProfit = annualProfitInteractive - annualProfitRegular;
    setAnnualIncrementalProfit(currentAnnualIncrementalProfit);

    if (currentAnnualIncrementalProfit > 0) {
      const yearsToPayback = currentInitialInvestment / currentAnnualIncrementalProfit;
      setPaybackPeriodYears(Math.floor(yearsToPayback));
      setPaybackPeriodMonths(Math.round((yearsToPayback % 1) * 12));
    }

    const totalIncrementalProfitOver5Years = currentAnnualIncrementalProfit * 5;
    const currentRoiPercentage = currentInitialInvestment > 0 ? ((totalIncrementalProfitOver5Years - currentInitialInvestment) / currentInitialInvestment) * 100 : 0;
    setRoiPercentage(currentRoiPercentage);
    setShowResults(true);
    setStep(4);
  };

  useEffect(() => {
    if (step === 3 && numLanes && regularLanePricePerHour && interactiveLanePricePerHour && hoursPlayedPerLanePerDay && daysOpenPerWeek && weeksPerYear) {
      calculateROI();
    } else if (step === 3) {
      setShowResults(false);
    }
  }, [step, numLanes, purchaseType, regularLanePricePerHour, interactiveLanePricePerHour, hoursPlayedPerLanePerDay, daysOpenPerWeek, weeksPerYear]);

  return (
    <div className="w-fit">
      <button onClick={() => setIsOpen(true)} className="px-6 py-2 text-white bg-clutchBlue-600 border-2 border-clutchBlue-600 rounded-full transition-all duration-300 hover:bg-transparent hover:text-clutchBlue-600 hover:ring-4 hover:ring-secondaryBlue hover:ring-offset-2">
        ROI Calculator
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-white animate-fadeInScale space-y-6">
          <h2 className="text-xl font-semibold text-clutchBlue-300 text-center">{centerName || "Clutch Bowling ROI Calculator"}</h2>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-secondaryBlue transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
          </div>

          {step === 0 && (
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div className="space-y-1">
                <label>Bowling Center Name</label>
                <input type="text" value={centerName} onChange={(e) => setCenterName(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded placeholder-gray-300" />
              </div>
              <div className="space-y-1">
                <label>Your Name</label>
                <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded placeholder-gray-300" />
              </div>
              <div className="space-y-1">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded placeholder-gray-300" />
              </div>
              <div className="space-y-1">
                <label>Phone Number</label>
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded placeholder-gray-300" />
              </div>
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              <button type="submit" className="w-full bg-clutchBlue-600 hover:bg-clutchBlue-700 text-white py-2 rounded transition-all duration-300">Continue</button>
            </form>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label>Number of Lanes</label>
                <input type="number" value={numLanes} onChange={(e) => setNumLanes(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <div className="space-y-1">
                <label>Purchase Type</label>
                <select value={purchaseType} onChange={(e) => setPurchaseType(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded">
                  <option value="">Select</option>
                  <option value="cash">Cash</option>
                  <option value="financed">Financed</option>
                </select>
              </div>
              <button onClick={() => setStep(2)} className="w-full bg-clutchBlue-600 hover:bg-clutchBlue-700 text-white py-2 rounded transition-all duration-300">Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label>Regular Lane Price Per Hour</label>
                <input type="number" value={regularLanePricePerHour} onChange={(e) => setRegularLanePricePerHour(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <div className="space-y-1">
                <label>Interactive Lane Price Per Hour</label>
                <input type="number" value={interactiveLanePricePerHour} onChange={(e) => setInteractiveLanePricePerHour(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <div className="space-y-1">
                <label>Hours Played Per Lane Per Day</label>
                <input type="number" value={hoursPlayedPerLanePerDay} onChange={(e) => setHoursPlayedPerLanePerDay(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <div className="space-y-1">
                <label>Days Open Per Week</label>
                <input type="number" value={daysOpenPerWeek} onChange={(e) => setDaysOpenPerWeek(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <div className="space-y-1">
                <label>Weeks Per Year</label>
                <input type="number" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} className="w-full p-2 bg-transparent border border-white rounded" />
              </div>
              <button onClick={() => setStep(3)} className="w-full bg-clutchBlue-600 hover:bg-clutchBlue-700 text-white py-2 rounded transition-all duration-300">Continue</button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-2 text-sm">
              <p><strong>Interactive System Cost Per Lane:</strong> ${interactiveSystemCostPerLane}</p>
              <p><strong>Annual Operating Cost Per Lane:</strong> ${annualOperatingCostPerLane}</p>
              <p><strong>Annual Interactive Software Fee Per Lane:</strong> ${annualInteractiveSoftwareFeePerLane}</p>
              <p><strong>Financing Down Payment %:</strong> {financingDownPaymentPercentage}%</p>
              <p><strong>Annual Interest Rate:</strong> {annualInterestRate}%</p>
              <p><strong>Loan Term (Years):</strong> {loanTermYears}</p>
              <button onClick={() => setStep(4)} className="w-full mt-4 bg-clutchBlue-600 hover:bg-clutchBlue-700 text-white py-2 rounded transition-all duration-300">Calculate</button>
            </div>
          )}

          {step === 4 && showResults && (
            <div className="mt-4 bg-white/10 text-white p-4 rounded-xl shadow-lg space-y-2">
              <p>Initial Investment: ${initialInvestment.toFixed(2)}</p>
              <p>Annual Incremental Profit: ${annualIncrementalProfit.toFixed(2)}</p>
              <p>Payback Period: {paybackPeriodYears} years, {paybackPeriodMonths} months</p>
              <p>5-Year ROI: {roiPercentage.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
