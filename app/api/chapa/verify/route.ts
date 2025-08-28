// app/api/chapa/verify/route.ts
import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const tx_ref = searchParams.get("tx_ref");

  if (!tx_ref) {
    return NextResponse.json({ message: "Missing tx_ref" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
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
    return NextResponse.json({ message: "Verification failed" }, { status: 500 });
  }
}
