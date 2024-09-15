"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav>
      <Link href="/" className={`link ${pathName === "/" ? "active" : ""}`}>
        {" "}
        Home
      </Link>
      <Link
        href={"/dashboard"}
        className={`link ${pathName === "/dashboard" ? "active" : ""}`}
      >
        {" "}
        Dashboard
      </Link>
    </nav>
  );
};
export default Navigation;
