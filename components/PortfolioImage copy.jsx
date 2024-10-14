

import Image from 'next/image';
import { useGetInfoQuery } from '../redux/services/main/about';
import { useTheme } from '@mui/material/styles';
import Cookies from "js-cookie";

const PortfolioImage = () => {
  const selectedLang = Cookies.get("selectedLang");
  const router = useRouter()

  
    const theme = useTheme();
    console.log(useGetInfoQuery())
    const { data, isLoading } = useGetInfoQuery("en"); 

    // const { data } = theme.palette.mode === 'dark' ? useGetInfoFaQuery() : theme.palette.mode === 'light' ? useGetInfoQuery() : null;

    return (
      <div className="absolute right-0 top-[-0.25rem]">
        <div className="rounded-[15rem] rounded-tr-lg rounded-bl-[20rem]  overflow-hidden">
          {data && data[0] && (
            <Image
              src={data[0]?.media.main_img}
              alt="Rashin"
              width={500}
              height={800}
              className="w-[15rem] h-[15rem] sm:w-[25rem] sm:h-[25rem]"
              priority
            />
          )}
        </div>
      </div>
    );
};


export default PortfolioImage;