import axios from "axios";
import { fetchAnalytics } from "./src/helpers/robotTxtHelper";
import { base, googleAnalytics } from "./src/redux/api/apiEndpoints";

export const GA_TRACKING_ID = async () => {
    try {
        const { data } = await axios.get(base + "/api/v1" + googleAnalytics);
        console.log(data[0].google_analytics_key);
        return data;
    } catch (error) {
        console.log(error);
    }
};
// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
