import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const footerNotIn = ["/"];

  return (
    <div className="relative">
      <NavBar />
      {children}
      {!footerNotIn.includes(router.pathname) && <Footer />}
    </div>
  );
};

export default index;
