import { Montserrat } from "next/font/google";
import ProgressBar from "../components/common/ProgressBar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
import StoreProvider from "../redux/storeProvider";
import { allMetadata, rootMetadata } from "../helpers/robotTxtHelper";
import axios from "axios";
import { base } from "../redux/api/apiEndpoints";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });
export const generateMetadata = async () => {
    // const dynamicRootMetadata = rootMetadata();
    // console.log(dynamicRootMetadata);
    try {
        const { data } = await axios.get(base + "/api/v1/metadata");

        const dynamicMetadata = await data.find((metadata) => {
            return metadata.page === "root";
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
//     title: "Ready Mix Concrete & Concrete Delivery, Toronto Ready Mix",
//     description:
//         "When it comes to reliable and trusted ready mix concrete services in Toronto, there is no better choice than Prime Ready Mix",
//     verification: {
//         google: "iok2m8F7C2fwqS7xL0sbkyGBauyiAFagM_QUNClJC18",
//         yandex: "yandex",
//         yahoo: "yahoo",
//         other: {
//             me: ["my-email", "my-link"],
//         },
//     },
// }
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <StoreProvider>
                    <ProgressBar />
                    <Header />
                    <GoogleAnalytics />
                    {children}
                    <Footer />
                </StoreProvider>
                <Script src="https://kit.fontawesome.com/d63d7fa193.js"></Script>
            </body>
        </html>
    );
}
