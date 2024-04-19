import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Finance Pro</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laudantium quae perspiciatis nam fugit debitis repellat illo
        praesentium! Natus, ad?
      </p>
    </div>
  );
}
