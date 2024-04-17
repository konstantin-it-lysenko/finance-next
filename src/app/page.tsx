import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Finance Pro</h1>
      <Link href="/contact" className="rounded-lg border">
        Contact page
      </Link>
    </div>
  );
};

export default Home;
