// app/api/chapa/initialize/route.ts
import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount, first_name, last_name, tx_ref } = body as {
      email: string;
      amount: string;
      first_name: string;
      last_name: string;
      tx_ref: string;
    };

    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency: "ETB",
        email,
        first_name,
        last_name,
        tx_ref,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/chapa/verify`,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json({ message: "Chapa init failed" }, { status: 500 });
  }
}
