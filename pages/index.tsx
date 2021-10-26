import Metadata from "@Root/components/layouts/Metadata";
import Home from "@Root/components/pages/Home";

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Metadata title="Home" />
      <Home />
    </div>
  );
}
