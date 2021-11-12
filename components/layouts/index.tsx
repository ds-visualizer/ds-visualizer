import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sponsor from "./Sponsor";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const footerNotIn = ["/"];

  return (
    <div className="relative">
      <div></div>
      <NavBar />
      {children}
      {!footerNotIn.includes(router.pathname) && <Footer />}
      <Sponsor />
    </div>
  );
};

export default index;
