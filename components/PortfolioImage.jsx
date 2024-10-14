import Image from "next/image";
import { useGetInfoQuery } from "../redux/services/main/about";
import { useTheme } from "@mui/material/styles";
import Cookies from "js-cookie";
// import Fade from "react-awesome-reveal";
import { Fade } from "react-reveal";

const PortfolioImage = () => {
  const selectedLang = Cookies.get("selectedLang");
  // const router = useRouter();

  const theme = useTheme();
  console.log(useGetInfoQuery());
  const { data, isLoading } = useGetInfoQuery("en");

  // const { data } = theme.palette.mode === 'dark' ? useGetInfoFaQuery() : theme.palette.mode === 'light' ? useGetInfoQuery() : null;

  return (
    <Fade right>
      {/* <div className="absolute right-0 top-[-0.25rem]"> */}
      <div className="absolute right-0 top-[7rem]">
        {/* <div className="rounded-[15rem] rounded-tr-lg rounded-bl-[20rem]  overflow-hidden"> */}
        <div className="rounded-l-full rounded-tr-lg   overflow-hidden">
          {data && data[0] && (
            <Image
              src={
                theme.palette.mode === "dark"
                  ? data[0]?.media.main_img_dark
                  : data[0]?.media.main_img_light
              }
              alt="Rashin"
              width={500}
              height={800}
              className="w-[15rem] h-[15rem] sm:w-[25rem] sm:h-[25rem]"
              priority
            />
          )}
        </div>
      </div>
    </Fade>
  );
};

export default PortfolioImage;
