import { axios } from "axios";
import { base, robotTxt } from "../redux/api/apiEndpoints";

export default function robots() {
    const fetchRobotTxt = async () => {
        try {
            const { data } = await axios.get(base + "/api/v1" + robotTxt);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const data = fetchRobotTxt();
    console.log(data);

    return {
        rules: {
            userAgent: data[0]?.user_agent,
            allow: data[0]?.allow,
            disallow: data[0]?.disallow,
        },
        sitemap: data[0]?.sitemap_url,
    };
}
