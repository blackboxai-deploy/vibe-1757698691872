"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>("100000");
  const [interestRate, setInterestRate] = useState<string>("12");
  const [loanTerm, setLoanTerm] = useState<string>("12");
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTerm);

    if (principal > 0 && rate > 0 && time > 0) {
      const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      const totalAmountValue = emiValue * time;
      const totalInterestValue = totalAmountValue - principal;

      setEmi(emiValue);
      setTotalAmount(totalAmountValue);
      setTotalInterest(totalInterestValue);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  const loanTypes = [
    { value: "personal", label: "Personal Loan", rate: "12-15%" },
    { value: "business", label: "Business Loan", rate: "10-14%" },
    { value: "education", label: "Education Loan", rate: "9-12%" },
    { value: "home", label: "Home Loan", rate: "8-11%" },
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">EMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="loanType">Loan Type</Label>
          <Select defaultValue="personal">
            <SelectTrigger>
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              {loanTypes.map((loan) => (
                <SelectItem key={loan.value} value={loan.value}>
                  {loan.label} ({loan.rate})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
          <Input
            id="loanAmount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            min="1000"
            max="10000000"
            step="1000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
          <Input
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            min="1"
            max="30"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loanTerm">Loan Term (months)</Label>
          <Input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            min="1"
            max="360"
          />
        </div>

        <div className="border-t pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Monthly EMI:</span>
            <span className="text-lg font-semibold text-blue-600">
              ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Interest:</span>
            <span className="text-sm font-medium text-orange-600">
              ₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Amount:</span>
            <span className="text-sm font-medium text-green-600">
              ₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        <Button className="w-full" onClick={calculateEMI}>
          Recalculate
        </Button>

        <p className="text-xs text-gray-500 text-center">
          * This is an approximate calculation. Actual rates may vary.
        </p>
      </CardContent>
    </Card>
  );
}