import Notfound from "@/components/Notfound"

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const page = () => {
  return <Notfound />;
};

export default page;
