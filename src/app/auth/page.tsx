import Auth from "@/components/auth/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "auth",
  description: "auth page",
};

export default function AuthPage() {
  return (
    <div>
      <Auth />
    </div>
  );
}
