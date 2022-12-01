import React from "react";
import Link from "../Link";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <Link href="/" className="logo"><h2>Logo</h2></Link>
      <nav>
        {/* <Link href="/recipes/">recipes</Link> */}
        <Link href="/sign-up/">sign up</Link>
        {/* <Link href="/contact/">contact</Link> */}
      </nav>
    </header>
  );
}
