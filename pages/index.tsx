import Metadata from "@Root/components/layouts/Metadata";
import Home from "@Root/components/pages/Home";
import { InferGetStaticPropsType } from "next";

export default function index({
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Metadata {...metaData} />
      <Home />
    </div>
  );
}

export const getStaticProps = async () => {
  const metaData = await import("@Misc/Meta.json");
  return { props: { metaData: metaData.home } };
};
