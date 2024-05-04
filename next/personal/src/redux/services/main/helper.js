import { infoAPI } from "./about";

export async function getInfoData() {
    const { data } = await infoAPI.endpoints.getInfo.useQuery().unwrap();
    console.log(data)
    return data;
}