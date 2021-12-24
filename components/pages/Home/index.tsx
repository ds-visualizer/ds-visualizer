import React from "react";
import routes from "@Misc/routes";
import HomeLayout from "@Components/layouts/HomeLayout";

interface Props {}

const Home: React.FC<Props> = () => {
  return <HomeLayout routes={routes.slice(0, 5)} heading="Latest" />;
};

export default Home;
