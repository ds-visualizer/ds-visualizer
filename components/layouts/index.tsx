import React, { useState, useEffect } from "react";
import superbase from "@Root/superbase.config";
import NavBar from "./NavBar";
import { User } from "@supabase/supabase-js";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sponsor from "./Sponsor";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const footerNotIn = ["/"];
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", checkUser);
  }, []);

  const signIn = async () => {
    await superbase.auth.signIn({
      provider: "github",
    });
  };

  const signOut = async () => {
    await superbase.auth.signOut();
    setUser(null);
  };

  const checkUser = () => {
    setUser(superbase.auth.user());
  };

  return (
    <div className="relative">
      <div></div>
      <NavBar singIn={signIn} />
      {children}
      {!footerNotIn.includes(router.pathname) && <Footer />}
      <Sponsor />
    </div>
  );
};

export default index;
