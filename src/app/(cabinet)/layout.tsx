import type { PropsWithChildren } from "react";
import Link from "next/link";

export default function CabinetLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex justify-between">
            <div className="flex gap-4">
              <li>
                <Link href="/admin" className="rounded-lg border">
                  admin page
                </Link>
              </li>
              <li>
                <Link href="/manager" className="rounded-lg border">
                  manager page
                </Link>
              </li>
              <li>
                <Link href="/employee" className="rounded-lg border">
                  employee page
                </Link>
              </li>
            </div>
            {/* Settings Route To Edit/View Profile */}
            {/* Avatar + Name */}
            <div className="flex gap-4">
              <li>
                <Link href="/settings" className="rounded-lg border">
                  settings page
                </Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <main className="flex gap-10">
        <aside>Sidebar</aside>
        {children}
      </main>
    </div>
  );
}
