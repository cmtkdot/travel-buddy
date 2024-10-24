"use client";

import { useState, useEffect } from "react";

interface CurrencyConverterProps {
  className?: string;
}

interface ExchangeRate {
  code: string;
  name: string;
  rate: number;
  flag: string;
}

const POPULAR_CURRENCIES: ExchangeRate[] = [
  { code: "VND", name: "Vietnamese Dong", rate: 24565, flag: "🇻🇳" },
  { code: "THB", name: "Thai Baht", rate: 35.97, flag: "🇹🇭" },
  { code: "USD", name: "US Dollar", rate: 1, flag: "🇺🇸" },
  { code: "EUR", name: "Euro", rate: 0.94, flag: "🇪🇺" },
];

export default function CurrencyConverter({ className = "" }: CurrencyConverterProps) {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("VND");
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setResult(null);
      return;
    }

    const fromRate = POPULAR_CURRENCIES.find((c) => c.code === fromCurrency)?.rate || 1;
    const toRate = POPULAR_CURRENCIES.find((c) => c.code === toCurrency)?.rate || 1;
    
    const convertedAmount = (Number(amount) / fromRate) * toRate;
    setResult(convertedAmount);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className={`bg-white rounded-xl shadow-sm p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Currency Converter</h3>

      <div className="space-y-4">
        {/* Amount Input */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Currency Selection */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {POPULAR_CURRENCIES.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {POPULAR_CURRENCIES.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        {result !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {amount} {fromCurrency} =
              </p>
              <p className="text-2xl font-bold text-purple-600">
                {result.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                {toCurrency}
              </p>
            </div>
          </div>
        )}

        {/* Quick Convert Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setFromCurrency("USD");
              setToCurrency("VND");
            }}
            className="p-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            🇺🇸 USD → 🇻🇳 VND
          </button>
          <button
            onClick={() => {
              setFromCurrency("USD");
              setToCurrency("THB");
            }}
            className="p-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            🇺🇸 USD → 🇹🇭 THB
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          * Exchange rates are for demonstration purposes only
        </p>
      </div>
    </div>
  );
}
