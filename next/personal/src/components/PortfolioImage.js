import Image from 'next/image';
import { getInfoData } from '../redux/services/main/helper';
import { useGetInfoQuery, infoAPI } from '../redux/services/main/about';

const PortfolioImage = () => {
    const { data, error, isLoading } = useGetInfoQuery();
    return (
        <div className="absolute right-[-0.72px] top-[-0.25rem]">
            <div className="rounded-[15rem] rounded-tr-lg rounded-bl-[20rem]  overflow-hidden">
                {data && data[0] && (
                    <Image
                        src={data[0].main_img}
                        alt="Portfolio Image"
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

// export async function getStaticProps() {
//     const data = await infoAPI.endpoints.getInfo.useQuery().unwrap(); // Fetch data using the helper function
//     console.log(data)
//     console.log('data')

//     return {
//         props: {
//             data,
//         },
//         revalidate: 60, // Re-generate the page every 60 seconds
//     };
// }

export default PortfolioImage;