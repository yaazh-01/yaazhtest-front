import react from "react";

export default function currencyFormat(price) {
  return `₹${parseFloat(price).toFixed(2)}`;
}

