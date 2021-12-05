import React, { useState, useEffect } from "react";
import superbase from "@Root/supabase.config";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sponsor from "./Sponsor";
import useGlobalContext from "../../hooks/useGlobalContext";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const footerNotIn = ["/", "/preview", "/visualizer"];
  const { dispatch } = useGlobalContext();

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
    dispatch({
      type: "SET_STATE",
      payload: { user: null },
    });
  };

  const checkUser = () =>
    dispatch({
      type: "SET_STATE",
      payload: { user: superbase.auth.user() },
    });

  return (
    <div className="relative">
      <div></div>
      <NavBar signIn={signIn} signOut={signOut} />
      {children}
      {!footerNotIn.includes(router.pathname) && <Footer />}
      <Sponsor />
    </div>
  );
};

export default index;
