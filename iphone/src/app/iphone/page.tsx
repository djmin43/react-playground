import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const Page = () => {
  return <div></div>;
};

export async function GET(request: NextRequest) {
  const queryParam = request.nextUrl.searchParams.get("model");

  return NextResponse.json(
    { message: "Query parameter value is " + queryParam },
    { status: 200 }
  );
}
export default Page;
