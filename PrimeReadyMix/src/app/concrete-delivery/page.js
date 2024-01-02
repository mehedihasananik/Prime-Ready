import axios from "axios";
import Services from "./RC";
import { base } from "../../redux/api/apiEndpoints";

export const generateMetadata = async () => {
    // const dynamicRootMetadata = rootMetadata();
    // console.log(dynamicRootMetadata);
    try {
        const { data } = await axios.get(base + "/api/v1/metadata");

        const dynamicMetadata = await data.find((metadata) => {
            return metadata.page === "concrete-delivery";
        });
        // console.log(dynamicMetadata);
        const { title, description, google_console_key, yandex_console_key, yahoo_console_key } =
            dynamicMetadata || {};
        return {
            title: title,
            description: description,
            verification: {
                google: google_console_key,
                yandex: yandex_console_key,
                yahoo: yahoo_console_key,
            },
        };
    } catch (error) {
        console.log(error);
    }
};
// export const metadata = {
//     title: "Concrete Delivery Services in Toronto",
//     description:
//         " If you're in need of reliable concrete delivery services in Toronto, look no further. Our company is dedicated to providing top-notch concrete solutions",
// };
export default function () {
    // console.log(process.env.NEXT_PUBLIC_GOOGLE_ID);
    return <Services />;
}
