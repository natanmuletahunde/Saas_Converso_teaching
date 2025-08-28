// components/PayButton.jsx
import axios from "axios";

export default function PayButton({ plan }) {
  const handlePay = async () => {
    try {
      const tx_ref = `tx-${Date.now()}`;
      const response = await axios.post("/api/chapa/initialize", {
        email: "natanmuleta77@gmail.com",
        amount: plan.price,
        first_name: "Natan",
        last_name: "Muleta",
        tx_ref,
      });

      if (response.data && response.data.data.checkout_url) {
        window.location.href = response.data.data.checkout_url; // redirect to Chapa checkout
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <button
      onClick={handlePay}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Pay with Chapa
    </button>
  );
}
