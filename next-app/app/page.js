"use client";
import Link from from "next/link";
import { useRouter } from "next/navigation"

export default function page() {
  return (
    <div className="flex justify-center gap-3">
      <Link href={"/profile"}>Profile</Link>
    </div>
  )
}

