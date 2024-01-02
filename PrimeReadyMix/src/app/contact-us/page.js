import { BsCheck2Square } from "react-icons/bs";
import ReviewSlider from "../../components/common/ReviewSlider";
import ServicesSection from "../../components/common/ServicesSection";
import { site_info } from "../../site/info";
import ProjectFrom from "./ProjectFrom";

export const metadata = {
    title: "Prime Ready Mix Contact",
    description: "You’re on the way to the easiest renovation ever.",
};

export default function contact_us() {
    return (
        <main className="w-10/12  mx-auto">
            <section className="py-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h1 className="capitalize mb-5 text-center !text-3xl">
                            Contact {site_info.name}
                        </h1>
                        <p className="text-base text-center">
                            You’re on the way to the easiest renovation ever.
                        </p>
                        <div className="my-6 h-[2px] w-20 bg-primary mx-auto" />
                        {[
                            "All fixtures, materials, and labor included",
                            "Built by a local, vetted contractor",
                            "4 weeks average build",
                        ].map((item, key) => (
                            <figure
                                key={key}
                                className="w-2/3 mx-auto flex gap-4 items-center justify-start mb-4 text-lg font-medium"
                            >
                                <BsCheck2Square className="h-6 w-6 fill-primary" />
                                <p className=" text-xs">{item}</p>
                            </figure>
                        ))}
                    </div>
                    <div>
                        <ProjectFrom />
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="">
                    <h1 className="mb-4">Reviews</h1>
                    <p className="text-xl font-medium mb-3">
                        Here’s what to expect when you hire us as your bathroom contractor in
                        Toronto.
                    </p>
                    <div className="mb-4 h-1 w-40 bg-primary" />
                    <ReviewSlider />
                </div>
            </section>
            <ServicesSection />

        </main>
    );
}
