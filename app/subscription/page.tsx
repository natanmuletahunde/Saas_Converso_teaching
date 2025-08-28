// app/subscription/page.tsx
"use client";

import PayButton from "@/components/PayButton";

export default function SubscriptionPage() {
  const plans = [
    { name: "Basic", price: "100" }, // ETB 100
    { name: "Pro", price: "200" },   // ETB 200
    { name: "Premium", price: "300" } // ETB 300
  ];

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-xl p-6 shadow-sm flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold my-4">{plan.price} ETB</p>

            {/* Chapa PayButton */}
            <PayButton plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
