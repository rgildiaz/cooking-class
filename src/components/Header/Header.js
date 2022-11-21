import React from "react";
import Link from "../Link";

export default function Header(props) {
  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>
        <Link href="/recipes/">recipes</Link>
        <Link href="/sign-up/">sign up</Link>
        <Link href="/contact/">contact</Link>
      </nav>
    </header>
  );
}
