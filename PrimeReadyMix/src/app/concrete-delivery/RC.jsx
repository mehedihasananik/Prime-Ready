"use client";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Button,
    Card,
    CardBody,
    Input,
    Option,
    Select,
    Textarea,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ClockIcon = ({ width, height, fillColor, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 72 72"
            fill={fillColor}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.2307 52.2692L23.8846 51.9231V51.2308L24.2307 50.8846H25.7147V41.5385L26.0609 40.9389L34.5656 36.0287L25.9615 31.0611L25.6153 30.4615V21.1154H24.2307L23.8846 20.7692V20.0769L24.2307 19.7308H47.7692L48.1153 20.0769V20.7692L47.7692 21.1154H46.1857V30.4615L45.8396 31.0611L37.3348 35.9713L45.939 40.9389L46.2851 41.5385V50.8846H47.7692L48.1153 51.2308V51.9231L47.7692 52.2692H24.2307ZM44.8011 21.1154H26.9999V30.0618L35.9005 35.2006L44.8011 30.0618V21.1154ZM44.9005 41.9382V50.8846H27.0993V41.9382L35.9999 36.7994L44.9005 41.9382Z"
                fill={fillColor}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M63.765 20.7692L63.0727 19.5701L36.6923 4.33936H35.3076L8.92717 19.5701L8.23486 20.7692V51.2308L8.92717 52.4299L35.3076 67.6607H36.6923L63.0727 52.4299L63.765 51.2308V20.7692ZM35.9999 5.53847L62.3804 20.7692V51.2308L35.9999 66.4615L9.61948 51.2308V20.7692L35.9999 5.53847Z"
                fill={fillColor}
            ></path>
        </svg>
    );
};

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function FAQsection() {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="py-10">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className="text-left md:text-center mb-5">
                    <h2 className="mb-3">
                        Frequently Asked Questions (FAQ)
                        <br />— Prime Ready Mix
                    </h2>
                    <div className="h-1 w-40 bg-primary my-1 mx-auto" />
                </div>
            </div>
            <div className="px-3 max-w-3xl mx-auto">
                {[
                    {
                        question: "What is Prime Ready Mix?",
                        answer: "Prime Ready Mix is a leading supplier of high-quality ready-mix concrete, serving construction projects of all sizes, and concrete delivery is its main service. We provide a range of concrete mixes tailored to meet specific project requirements.",
                    },
                    {
                        question: "Where is Prime Ready Mix located?",
                        answer: "We have multiple plants strategically located across Thornhill and the GTA to ensure timely delivery and cater to a wide geographical area.",
                    },
                    {
                        question: "What types of concrete mixes do you offer?",
                        answer: "We offer a variety of concrete mixes, including standard mixes, high-strength mixes, specialty mixes, and more. Our experts can help you choose the right mix for your project.",
                    },
                    {
                        question: "How can I place an order for ready-mix concrete?",
                        answer: "You can place an order by contacting our sales team via phone or email. We also offer an online order form on our website for your convenience.",
                    },
                    {
                        question: "What is the minimum order quantity?",
                        answer: "Our minimum order quantity is typically one, but this may vary depending on location and specific mix requirements.",
                    },
                    {
                        question: "What is the lead time for delivery?",
                        answer: "The lead time for delivery depends on factors such as location, order volume, and mix specifications.",
                    },
                    {
                        question: "Do you offer pump or pour services?",
                        answer: "Yes, we offer pump and pour services to assist with placing the concrete at your construction site.",
                    },
                    {
                        question: "What is the quality assurance process at Prime Ready Mix?",
                        answer: "We have a rigorous quality control process in place to ensure that our concrete meets industry standards and specifications. Our materials are sourced from reputable suppliers, and our mixing process is closely monitored.",
                    },
                ].map((item, key) => (
                    <Accordion open={open === key + 1} key={key} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(key + 1)}>
                            {item.question}
                        </AccordionHeader>
                        <AccordionBody>
                            <p className="text-lg font-medium leading-relaxed">{item.answer}</p>
                        </AccordionBody>
                    </Accordion>
                ))}
                <p className="text-lg font-medium text-primary underline underline-offset-4 decoration-primary-400 leading-relaxed max-w-3xl mx-auto mt-5">
                    Please note that this is a fictional example, and the details should be
                    customized based on the specific information and services provided by Prime
                    Ready Mix.
                </p>
            </div>
        </section>
    );
}

const Services = () => {
    return (
        <main>
            <section className="py-10 relative">
                <div className=" w-11/12 md:w-10/12 mx-auto ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 md:py-14">
                        <div className="">
                            <h1 className="font-semibold text-center md:text-left mb-10">
                                Concrete delivery services in Toronto
                            </h1>

                            <p className="flex-grow text-dark-300 ">
                                If you're in need of reliable concrete delivery services in Toronto,
                                look no further. Our company is dedicated to providing top-notch
                                concrete solutions tailored to your specific needs. With a fleet of
                                modern and well-maintained vehicles, we ensure prompt and efficient
                                delivery to your construction site. Our team of skilled
                                professionals is committed to delivering{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Concrete"
                                    className="text-sky-500 underline"
                                    target="_blank"
                                >
                                    high-quality concrete
                                </a>{" "}
                                on time, every time. Whether you require a small batch for a DIY
                                project or a large-scale commercial delivery, we have the expertise
                                and resources to meet your requirements. Trust us for hassle-free
                                and dependable concrete delivery services in Toronto, and let us
                                contribute to the success of your construction endeavors.
                            </p>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    modules={[Autoplay]}
                    className="relative md:!absolute mb-4 md:mb-0 top-0 right-0 h-full w-full md:w-[45%] max-h-64 md:max-h-full object-cover object-center"
                >
                    {[
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-0cdc476.png/:/cr=t:0.01%25,l:25.41%25,w:51.71%25,h:99.99%25/rs=w:365,h:365,cg:true,m",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/c3-2-1.jpeg/:/cr=t:0%25,l:31.57%25,w:68.43%25,h:100%25/rs=w:365,h:365,cg:true",
                        "https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Burlington-Concrete-Mixer.jpeg/:/cr=t:0%25,l:1.09%25,w:75%25,h:100%25/rs=w:365,h:365,cg:true",
                    ].map((item, key) => (
                        <SwiperSlide key={key} className="h-60 md:h-full">
                            <Image
                                priority
                                src={item}
                                className="object-cover object-center h-full w-full"
                                alt=""
                                width={300}
                                height={300}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="font-bold text-2xl md:text-5xl">
                            Frustrated With Your Outdated Home?
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 mb-2">
                            If you find yourself frustrated with your outdated home, it might be
                            time to embark on a transformative journey of renovation and
                            rejuvenation. A home is more than just four walls; it's a reflection of
                            your personality, a sanctuary from the world, and a place where memories
                            are made. Outdated spaces can stifle creativity and hinder the sense of
                            comfort we all seek. Embracing change, whether it's through a fresh coat
                            of paint, modernizing fixtures, or a complete overhaul, can breathe new
                            life into your living environment. So, take that first step towards a
                            more vibrant and inviting space; your revitalized home will not only
                            elevate your daily experience but also inspire you to create new
                            chapters of joy and fulfillment within its walls.
                        </p>
                        <p className="text-dark-300 mb-2">
                            Embracing change, whether it's through a fresh coat of paint,
                            modernizing fixtures, or a complete overhaul, can breathe new life into
                            your living environment. So, take that first step towards a more vibrant
                            and inviting space; your revitalized home will not only elevate your
                            daily experience but also inspire you to create new chapters of joy and
                            fulfillment within its walls.{" "}
                        </p>
                    </div>
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-5fe5952.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                        alt=""
                        width={300}
                        height={300}
                        className="mx-auto w-2/3 md:w-2/5 aspect-square ring-4 ring-primary-600 ring-offset-4 rounded-full object-cover"
                    />
                </div>
            </section>
            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto flex flex-col-reverse md:flex-row gap-8">
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/Truck-with-loader-3-2827-1024x609.jpeg/:/rs=w:600,cg:true,m"
                        alt=""
                        width={300}
                        height={300}
                        className="mx-auto w-2/3 md:w-2/5 aspect-square ring-4 ring-secondary ring-offset-4 rounded-full object-cover"
                    />
                    <div className="lg:col-span-2">
                        <h2 className="font-bold text-2xl md:text-5xl">
                            We're here to solve your concrete delivery problems.
                        </h2>
                        <div className="h-1 w-40 bg-primary my-5" />
                        <p className="text-dark-300 mb-2">
                            Welcome to our dedicated team, committed to resolving all your concrete
                            woes. Whether it's a cracked driveway, an uneven patio, or a complete
                            structural overhaul, we're here to tackle it head-on. With years of
                            expertise and a passion for precision, we pride ourselves on delivering
                            durable, long-lasting solutions. Our skilled professionals employ the
                            latest techniques and top-quality materials to ensure your concrete
                            project stands the test of time. Say goodbye to unsightly imperfections
                            and hello to a flawless finish. Trust us to transform your substantial
                            challenges into solid, reliable results. Let's build a foundation with
                            our concrete delivery services, which you can rely on.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h2 className="text-center text-dark-400 mb-5">
                        Why Choose Us for{" "}
                        <span className="text-primary">Ready Mix Concrete Delivery Toronto</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 mb-3">
                        {[
                            {
                                id: 1,
                                title: "Quality Assurance",
                                desc: "When you choose us for ready mix concrete delivery, you can be assured of top-notch quality. We source our raw materials from trusted suppliers and use advanced technology in our batching process to ensure consistent and high-quality concrete.",
                            },
                            {
                                id: 2,
                                title: "Expertise and Experience",
                                desc: "Our team comprises experienced professionals who have been in the industry for years. They understand the nuances of concrete mixing and delivery, ensuring that you receive the right mix for your specific project requirements.",
                            },
                            {
                                id: 3,
                                title: "Cost-Effective Option",
                                desc: "Opting for ready mix concrete delivery can save you both time and money. You eliminate the need for on-site mixing, reducing labor costs and minimizing waste. Additionally, our competitive pricing ensures that you get value for your investment.",
                            },
                            {
                                id: 4,
                                title: "Safety First",
                                desc: "Safety is a paramount concern in any construction project. We adhere to strict safety standards in our operations, ensuring that our ready mix concrete is delivered and poured in a manner that prioritizes the well-being of workers and the integrity of the project.",
                            },
                            {
                                id: 5,
                                title: "Comprehensive Service Area",
                                desc: "We have a wide service area covering [mention locations or regions]. It means that no matter where your project is located within our service area, you can count on us for reliable and efficient ready mix concrete delivery.",
                            },
                            {
                                id: 6,
                                title: "Customer Satisfaction",
                                desc: "Our track record speaks for itself. We have a long list of satisfied customers who have benefited from our reliable and high-quality ready mix concrete delivery services.                                ",
                            },
                        ].map((item) => (
                            <p key={item?.id}>
                                <span className="font-bold inline-block me-1">
                                    {String(item.id).padStart(2, 0)} .
                                </span>
                                <span className="text-primary font-semibold inline-block me-2 underline underline-offset-4 decoration-slice decoration-primary">
                                    {item.title} :{" "}
                                </span>
                                <span className="text-dark-400">{item.desc}</span>
                            </p>
                        ))}
                    </div>
                    <p className="p-2 border-l-4 border-primary bg-primary-50 font-medium">
                        In summary, choosing us for your ready mix concrete delivery means opting
                        for quality, expertise, timely service, customization, cost-effectiveness,
                        sustainability, safety, technical support, and a solid commitment to
                        customer satisfaction. We're not just a supplier; we're a partner in your
                        construction success.
                    </p>
                </div>
            </section>
            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h2 className="text-center text-dark-400 mb-5">
                        How <span className="text-primary">We Solve</span> Your Construction
                        Problems
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 mb-3">
                        {[
                            {
                                id: 1,
                                title: "Comprehensive Site Analysis",
                                desc: "Our process begins with a thorough site analysis. We assess the location, terrain, and any potential challenges that may arise during construction. This allows us to develop a tailored plan that takes into account all relevant factors.",
                            },
                            {
                                id: 2,
                                title: "Customized Design Solutions",
                                desc: "Once we have a clear understanding of the site, we craft a customized design that maximizes efficiency, safety, and functionality. Our experienced team of architects and engineers works collaboratively to ensure every aspect is meticulously planned.",
                            },
                            {
                                id: 3,
                                title: "Advanced Technology Implementation",
                                desc: "We leverage cutting-edge construction technology to streamline the building process. From building information modelling (BIM) to state-of-the-art machinery, we employ the latest tools to ensure precision and accuracy at every stage.",
                            },
                            {
                                id: 4,
                                title: "Skilled Workforce",
                                desc: "Our team is composed of highly skilled and experienced professionals for concrete delivery. From project managers to craftsmen, everyone is dedicated to executing tasks with excellence. We believe in continuous training and development to stay updated with the latest industry standards.",
                            },
                            {
                                id: 5,
                                title: "Proactive Problem-Solving",
                                desc: "Challenges can arise unexpectedly in construction. Our proactive approach involves identifying potential issues early on and devising effective solutions. This prevents delays and keeps the project on track.",
                            },
                            {
                                id: 6,
                                title: "Quality Assurance",
                                desc: "We maintain stringent quality control measures throughout the construction process. Regular inspections, adherence to industry standards, and the use of top-grade materials ensure that the final product meets and exceeds your expectations.",
                            },
                            {
                                id: 7,
                                title: "Effective Communication",
                                desc: " Clear and open communication is paramount in any construction project. We keep our clients informed about progress, milestones, and any decisions that need to be made. This transparency fosters trust and ensures everyone is on the same page.We tackle construction problems with precision, expertise, and a commitment to excellence. Your project's success is our priority, and we're dedicated to delivering results.",
                            },
                        ].map((item) => (
                            <p key={item?.id}>
                                <span className="font-bold inline-block me-1">
                                    {String(item.id).padStart(2, 0)} .
                                </span>
                                <span className="text-primary font-semibold inline-block me-2 underline underline-offset-4 decoration-slice decoration-primary">
                                    {item.title} :{" "}
                                </span>
                                <span className="text-dark-400">{item.desc}</span>
                            </p>
                        ))}
                    </div>
                    {/* <p className="p-2 border-l-4 border-primary bg-primary-50 font-medium">
                        By following this comprehensive approach, we tackle construction problems
                        with precision, expertise, and a commitment to excellence. Your project's
                        success is our priority, and we're dedicated to delivering results that
                        exceed your expectations.
                    </p> */}
                </div>
            </section>
            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <div className="mb-5 text-left md:text-center">
                        <h3 className=" text-dark-400  mb-2">
                            Preparing a <span className="text-primary">Customized Plan</span> for
                            Concrete Delivery
                        </h3>
                        <p className="text-lg max-w-3xl mx-auto leading-relaxed font-medium text-dark-400">
                            By following this customized concrete supply plan, you can ensure a
                            smooth and efficient process from the initial assessment to the
                            successful completion of your construction project.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-3 gap-y-4 mb-3">
                        {[
                            {
                                id: 1,
                                title: "Project Overview",
                                list: [
                                    "Define the scope of the project, including location, size, and type of construction.Identify specific requirements for concrete, such as strength, mix design, and special additives.",
                                ],
                            },
                            {
                                id: 2,
                                title: "Site Assessment",
                                list: [
                                    "Conduct a thorough site visit to assess access points, potential obstacles, and any special requirements for concrete delivery.",
                                    "Determine if any special equipment (e.g., pumps, conveyors) will be needed.",
                                ],
                            },
                            {
                                id: 3,
                                title: "Concrete Mix Design",
                                list: [
                                    "Collaborate with a qualified concrete supplier to develop a mix design tailored to project specifications and local conditions.",
                                    "Consider factors like required strength, durability, workability, and environmental considerations.",
                                ],
                            },
                            {
                                id: 4,
                                title: "Quantity Estimation",
                                list: [
                                    "Calculate the total volume of concrete required based on project drawings and specifications.",
                                    "Factor in any potential overages or adjustments for waste.",
                                ],
                            },
                            {
                                id: 5,
                                title: "Delivery Schedule",
                                list: [
                                    "Create a detailed schedule outlining the timing and quantities of concrete deliveries.",
                                    "Consider factors like curing times, weather conditions, and site constraints.",
                                ],
                            },
                            {
                                id: 6,
                                title: "Supplier Selection",
                                list: [
                                    "Evaluate potential concrete suppliers based on their track record, quality control measures, and proximity to the project site.",
                                    "Obtain multiple quotes for comparison.",
                                ],
                            },
                            {
                                id: 7,
                                title: "Transportation Logistics",
                                list: [
                                    "Determine the most efficient transportation methods for delivering concrete to the site.",
                                    "Plan routes and consider any legal or logistical restrictions.",
                                ],
                            },
                            {
                                id: 8,
                                title: "Quality Control Measures",
                                list: [
                                    "Establish procedures for testing and verifying the quality of concrete batches.",
                                    "Define acceptance criteria and inspection points.",
                                ],
                            },
                            {
                                id: 9,
                                title: "Special Considerations",
                                list: [
                                    "Identify any special requirements, such as coloured concrete, rapid-setting mixes, or specialized finishing techniques.",
                                    "Ensure that suppliers can meet these specific needs.",
                                ],
                            },
                            {
                                id: 10,
                                title: "Contingency Planning",
                                list: [
                                    "Develop contingency plans for unforeseen circumstances, such as unexpected delays, changes in project scope, or adverse weather conditions.",
                                ],
                            },
                        ].map((item) => (
                            <figure
                                key={item?.id}
                                className="px-3 py-4 bg-primary-50 border-2 border-primary-300 rounded-sm"
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-widest">
                                    {String(item.id).padStart(2, 0)}
                                </h2>
                                <h6 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-2 ">
                                    {item.title}
                                </h6>
                                {item.list.map((e, key) => (
                                    <p className="mb-3 flex gap-2 items-start" key={key}>
                                        <span className="inline-block min-h-[8px] min-w-[8px] mt-2 rounded-full bg-primary" />{" "}
                                        <span>{e}</span>
                                    </p>
                                ))}
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-10 relative">
                <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="">
                        <div className="mb-5">
                            <h2 className=" text-dark-400  mb-2">
                                Expert <span className="text-primary">Design and Material</span>{" "}
                                Selection for Premix Concrete
                            </h2>
                            <p className="text-lg leading-relaxed font-medium text-dark-400">
                                Creating high-quality premix concrete involves careful consideration
                                of design and material selection. This process requires expertise to
                                ensure the final product meets the desired strength, durability, and
                                workability standards. Below are essential steps for achieving
                                excellence in premix concrete delivery.
                            </p>
                        </div>
                        {[
                            {
                                id: 1,
                                title: "Structural Design Analysis",
                                list: [
                                    "Conduct a thorough structural analysis to determine the specific requirements of the concrete mix.             Consider factors such as load-bearing capacity, exposure conditions, and expected service life.                                   ",
                                ],
                            },
                            {
                                id: 2,
                                title: "Material Selection",
                                list: [
                                    "Choose high-quality raw materials, including cement, aggregates, water, and admixtures.Ensure they meet relevant industry standards and have the necessary certifications.                                   Opt for well-graded aggregates to achieve a balanced mix with good workability and strength.                                   ",
                                ],
                            },
                            {
                                id: 3,
                                title: "Proportions and Mix Design",
                                list: [
                                    "Employ established mix design methodologies, such as the ACI, to determine the correct proportions of each component.",
                                    "This ensures the desired strength and durability are achieved.",
                                    "Conduct trial mixes to fine-tune the proportions and verify performance characteristics before full-scale production.",
                                ],
                            },
                            {
                                id: 4,
                                title: "Quality Control and Testing",
                                list: [
                                    "Implement a rigorous quality control program to monitor raw materials, production processes, and final product quality.",
                                    "Conduct regular tests, including slump tests, compressive strength tests, and durability assessments, to verify that the concrete meets design specifications.",
                                ],
                            },
                            {
                                id: 5,
                                title: "Environmental Considerations",
                                list: [
                                    "Evaluate the environmental impact of the concrete mix and production process.",
                                    "Consider using supplementary cementitious materials (SCMs) like fly ash or slag to reduce the carbon footprint.",
                                    "Implement sustainable practices, such as recycling water and minimizing waste, to promote eco-friendly production.",
                                ],
                            },
                            {
                                id: 6,
                                title: "Continuous Improvement and Innovation",
                                list: [
                                    "Stay updated with industry advancements and emerging technologies related to premix concrete production.",
                                    "Encourage a culture of continuous improvement to refine processes and incorporate innovative materials or techniques that enhance concrete performance.",
                                    "By following these expert steps in design and material selection, you can produce high-quality premix concrete.                                   ",
                                ],
                            },
                        ].map((item) => (
                            <figure
                                key={item?.id}
                                className="px-3 py-4 bg-primary/5 border-l-4 border-primary rounded-sm mb-3"
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-widest">
                                    {String(item.id).padStart(2, 0)}
                                </h2>
                                <h6 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold mb-2 ">
                                    {item.title}
                                </h6>
                                {item.list.map((e, key) => (
                                    <p
                                        className="pl-4 text-[16px] mb-3 flex gap-2 items-start"
                                        key={key}
                                    >
                                        <span className="inline-block min-h-[8px] min-w-[8px] mt-2 rounded-full bg-primary" />{" "}
                                        <span>{e}</span>
                                    </p>
                                ))}
                            </figure>
                        ))}
                        <br />
                        <p className="leading-relaxed text-lg font-medium text-dark-400">
                            By following these expert steps in design and material selection, you
                            can produce high-quality premix concrete that meets or exceeds the
                            required standards for strength, durability, and workability. Remember
                            that attention to detail and a commitment to excellence are essential to
                            achieving consistent and reliable results.
                        </p>
                    </div>
                    <div>
                        <Card className="mx-auto w-full sticky top-32">
                            <CardBody className="flex flex-col gap-1">
                                <div>
                                    <h3 className="text-dark text-lg font-bolder text-center">
                                        Get Your Free Estimate
                                    </h3>
                                    <h5 className="text-sm font-semibold text-center text-black my-3">
                                        Design, Materials, Construction, Support
                                    </h5>
                                </div>
                                <form className="flex flex-col gap-5 font-xl w-full mt-6 mx-auto">
                                    <Input
                                        size="lg"
                                        className="text-2xl font-bold  bg-white"
                                        label="Full Name"
                                        required
                                    />
                                    <Input
                                        size="lg"
                                        className="text-2xl font-bold  bg-white"
                                        label="Email"
                                        required
                                    />
                                    <Input
                                        size="lg"
                                        className="text-2xl font-bold  bg-white"
                                        label="Mobile"
                                        required
                                    />
                                    <Select label="Project Budget" className="py-3 px-2  bg-white">
                                        <Option>10,000 - 20,000</Option>
                                        <Option>20,000 - 30,000</Option>
                                        <Option>30,000 - 40,000</Option>
                                        <Option>40,000 - 50,000</Option>
                                        <Option>50,000+</Option>
                                    </Select>
                                    <Textarea
                                        size="lg"
                                        className="text-2xl font-bold  bg-white"
                                        label="Project Description"
                                        required
                                    />
                                    <Button
                                        aria-label="estimate-button"
                                        size="md"
                                        className="bg-primary text-lg rounded-md my-0"
                                    >
                                        Get an estimate
                                    </Button>
                                </form>
                                <h3 className="text-sm font-semibold text-center text-black my-1">
                                    OR
                                </h3>
                                <a href="tel:+1 (647) 539-6755" className="w-full">
                                    <Button
                                        aria-label="call-button"
                                        size="md"
                                        className="bg-dark w-full text-lg rounded-md my-0"
                                    >
                                        Make a call
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="relative bg-dark-50/10">
                <Image
                    priority
                    src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-b6db9aa.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
                    alt=""
                    width={300}
                    height={300}
                    className="w-11/12 md:w-[48%] h-full md:absolute top-0 left-0 object-cover object-center"
                />
                <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 py-10">
                    <div className="col-start-2">
                        <h3 className="mb-3">Skilled concrete suppliers</h3>

                        <div className="h-1 w-40 bg-primary mb-4" />
                        <div>
                            {[
                                "Finding skilled concrete suppliers is essential for any construction project. These professionals play a crucial role in ensuring the structural integrity and longevity of buildings and infrastructure. A reputable concrete supplier not only provides high-quality materials but also offers expertise in mix designs, delivery logistics, and technical support. They understand the unique requirements of different projects, whether it's a residential foundation, a commercial building, or a large-scale infrastructure development. Skilled concrete suppliers work closely with contractors and project managers to tailor solutions that meet specific needs, taking into account factors like weather conditions, local regulations, and project timelines.",
                                "In addition to providing top-notch concrete products, experienced suppliers also prioritize safety and environmental considerations. They adhere to industry standards and best practices to minimize environmental impact and ensure the safety of workers and the surrounding community. Moreover, they often offer sustainable options such as recycled aggregates or low-carbon concrete mixes, contributing to more eco-friendly construction practices. Ultimately, partnering with skilled concrete suppliers is an investment in the success and longevity of any construction endeavor. Their expertise and commitment to quality laid the foundation for a durable and reliable built environment.",
                                "With years of expertise and a commitment to excellence, we ensure that every batch of concrete we supply is of the highest quality, adhering to industry standards and regulations. Our team of experienced professionals understands the intricacies of concrete mixing, curing, and placement, guaranteeing a product that is not only durable but also reliable. Whether you're embarking on a residential construction project or a large-scale commercial endeavour, you can trust our concrete delivery services to provide the foundation of your dreams. At Skilled Concrete Suppliers, we don't just deliver concrete; we deliver confidence in every pour.",
                            ].map((item, key) => (
                                <p
                                    key={key}
                                    className="mb-2 text-dark-300 leading-relaxed text-[16px]"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 relative">
                <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="mb-5">
                            The Benefits of Choosing Us for Concrete Delivery Services in Toronto
                        </h3>
                        <div className="mb-4 w-40 h-[2px] bg-primary " />
                        {[
                            {
                                id: 1,
                                title: "Expertise and Experience",
                                desc: "When you choose our concrete services in Toronto, you're gaining access to a team of highly skilled professionals with years of experience in the industry. We have a proven track record of delivering high-quality concrete work, ensuring your project is in capable hands.",
                            },
                            {
                                id: 2,
                                title: "Customized Solutions",
                                desc: "Whether it's a small residential job or a large commercial undertaking, we tailor our concrete delivery services to meet your specific needs. Our team works closely with you to understand your vision and provide customized concrete solutions that exceed your expectations.",
                            },
                            {
                                id: 3,
                                title: "Quality Materials and Techniques",
                                desc: "We believe in using only the best materials and employing industry-leading techniques. This commitment to quality ensures that the concrete we pour is durable, long-lasting, and capable of withstanding the test of time and environmental factors.",
                            },
                            {
                                id: 4,
                                title: "Timely Completion",
                                desc: "We value your time and understand the importance of sticking to project timelines. Our efficient project management and skilled workforce ensure that we complete your concrete work on schedule without compromising on quality.",
                            },
                            {
                                id: 5,
                                title: "Cost-Effective Solutions",
                                desc: "Our competitive pricing combined with efficient work practices means you get excellent value for your investment. We provide transparent pricing, avoiding hidden costs and surprises along the way.",
                            },
                            {
                                id: 6,
                                title: "Safety Standards Compliance",
                                desc: "Safety is a paramount concern for us. We strictly adhere to industry safety standards and regulations to ensure the well-being of our team members and everyone involved in the project.",
                            },
                            {
                                id: 7,
                                title: "Environmentally Responsible Practices",
                                desc: "We are committed to environmentally friendly practices. From responsibly sourcing materials to minimizing waste, we take steps to reduce our environmental impact while providing top-notch concrete services.Choosing our concrete services in Toronto means choosing a team dedicated to excellence, quality, and customer satisfaction.",
                            },
                        ].map((item, key) => (
                            <p key={key} className="text-dark-400 mb-3">
                                <span className="font-bold text-dark underline underline-offset-4 decoration-dark">
                                    {String(item?.id).padStart(2, 0)} .{" "}
                                </span>
                                <span className="underline underline-offset-4 decoration-primary text-primary font-medium">
                                    {" "}
                                    {item?.title}
                                </span>{" "}
                                <span> : {item?.desc}</span>
                            </p>
                        ))}
                        <p className="text-lg border-l-4 border-primary bg-primary-50 p-3 font-medium">
                            Choosing our concrete services in Toronto means choosing a team
                            dedicated to excellence, quality, and customer satisfaction. Contact us
                            today to discuss your concrete project and experience the difference
                            firsthand.
                        </p>
                    </div>
                    <Image
                        priority
                        src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/blob-9397e44.png/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:600,h:451,cg:true"
                        alt=""
                        width={300}
                        height={300}
                        className="w-full sticky top-32"
                    />
                </div>
            </section>

            <section className="py-10">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="">
                            <div className="mb-3">
                                <h3 className="font-bold">Ready for a home transformation?</h3>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    Are you prepared to embark on a remarkable journey of home
                                    transformation? Imagine a space that reflects your unique
                                    personality and style, a haven that truly feels like "you."
                                    Whether you're dreaming of a cozy cottage retreat, a sleek
                                    modern oasis, or a vibrant bohemian escape, the possibilities
                                    are endless. With the right vision, creativity, and a touch of
                                    inspiration, your home can become a canvas for your imagination.
                                    Let's turn your aspirations into reality, one room at a time,
                                    and embark on this exciting adventure together. Get ready to
                                    witness the incredible metamorphosis of your living space as we
                                    bring your dreams to life. Your home transformation journey
                                    awaits, and the results will be nothing short of magical.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h4 className="font-bold">Your dream home awaits.</h4>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    Nestled at the edge of a tranquil woodland, your dream home
                                    awaits, a haven where every sunrise paints a masterpiece on the
                                    horizon and every sunset serenades the day to rest. This idyllic
                                    sanctuary is a symphony of modern elegance and natural beauty,
                                    seamlessly woven together. The architecture marries the timeless
                                    charm of rustic stone with sleek lines of contemporary design,
                                    creating a residence that feels both grounded and ethereal. As
                                    you step inside, sunlight dances through large picture windows,
                                    illuminating a space that exudes warmth and welcomes you with
                                    open arms. Each room tells a story, a tale spun from the finest
                                    materials and the most thoughtful craftsmanship. The kitchen, a
                                    culinary haven, boasts granite countertops and state-of-the-art
                                    appliances, where the aroma of freshly baked bread mingles with
                                    the fragrance of herbs from your garden. The bedrooms are
                                    sanctuaries of repose, cocooned in soft linens and bathed in
                                    gentle moonlight. Step outside to your private oasis, where a
                                    garden of blooms and a chorus of songbirds await. The scent of
                                    blooming roses mingles with the earthy aroma of a well-loved
                                    path. Your dream home is not just a dwelling but a sanctuary, a
                                    canvas waiting for your personal touch to transform it into a
                                    masterpiece of memories. We are ready to make your dream home
                                    with our concrete delivery service.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h4 className="font-bold">
                                    Let's get started with ready mixed concrete.
                                </h4>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    Let's get started with ready mixed concrete services! Ready
                                    mixed concrete is a versatile and essential building material
                                    that has revolutionized the construction industry. Whether
                                    you're embarking on a small DIY project or managing a
                                    large-scale construction site, Prime Ready Mix offers
                                    convenience, consistency, and quality concrete delivery. This
                                    concrete is precisely mixed at a batching plant to meet your
                                    project's specific requirements, ensuring the right proportions
                                    of cement, aggregates, and water. It arrives at your site ready
                                    to pour, saving you time and effort compared to on-site mixing.
                                    With its reliability and efficiency, ready mixed concrete is the
                                    foundation for durable and structurally sound buildings. So,
                                    let's dive into the world of ready mixed concrete and discover
                                    how it can streamline your construction endeavors and deliver
                                    outstanding results!
                                </p>
                            </div>
                            <div className="mb-3">
                                <h4 className="font-bold">
                                    Affordable Ready Mix Concrete Company in Toronto
                                </h4>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    If you're on the lookout for an affordable ready mix concrete
                                    company in Toronto, your search ends here. Our company is
                                    committed to providing top-notch, quality concrete delivery
                                    solutions at prices that won't break the bank. With years of
                                    experience in the industry, we understand the importance of
                                    delivering reliable and cost-effective{" "}
                                    <a
                                        href="https://readymixnearme.ca/"
                                        className="underline"
                                        target="_blank"
                                    >
                                        ready mix concrete for
                                    </a>
                                    your construction projects. Whether it's a small residential
                                    endeavour or a large-scale commercial venture, we have the
                                    expertise and resources to meet your concrete needs efficiently.
                                    Rest assured, our team prioritizes both affordability and
                                    quality, ensuring you get the best value for your investment.
                                    Contact us today to experience seamless service and premium
                                    ready mix concrete tailored to your budget. Your project's
                                    success is our priority!
                                </p>
                            </div>
                            <div className="mb-3">
                                <h4 className="font-bold">
                                    We're your best Toronto ready mix concrete suppliers.
                                </h4>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    As your dedicated concrete ready mix supplier, Prime Ready Mix
                                    takes pride in delivering top-notch quality and unmatched
                                    service. Our team is committed to providing you with a seamless
                                    experience from order to delivery. Whether you're embarking on a
                                    large-scale construction project or a smaller DIY endeavour, we
                                    understand the importance of reliable and consistent concrete
                                    delivery. With years of expertise in the industry, we offer a
                                    diverse range of concrete mixes tailored to meet your specific
                                    requirements. From high-strength foundations to decorative
                                    finishes, we've got you covered. Trust in our expertise, and let
                                    us be your partner in building a solid foundation for success.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h4 className="font-bold">
                                    Ready to experience the ultimate in premixed concrete delivery
                                    services?
                                </h4>
                                <div className="h-1 w-40 bg-primary my-1" />
                                <p className="text-dark-300 mb-2">
                                    Introducing a revolution in construction efficiency: our premier
                                    premixed concrete delivery services are set to redefine the
                                    industry standard. We understand that time is of the essence on
                                    any job site, which is why we've meticulously crafted a service
                                    that marries precision and convenience. With our
                                    state-of-the-art mixing technology and a fleet of specialized
                                    delivery vehicles, we guarantee a seamless experience from order
                                    to pour. Our expert team ensures that every batch of concrete
                                    meets the highest quality standards, tailored to your project's
                                    unique specifications. Say goodbye to delays and wastage; with
                                    us, you'll have the perfect mix, precisely when and where you
                                    need it. Elevate your construction game with the ultimate in
                                    Prime Ready Mix services. Efficiency, reliability, and
                                    excellence—it's not just our promise; it's our foundation.
                                </p>
                            </div>
                        </div>
                        <Image
                            priority
                            src="https://img1.wsimg.com/isteam/ip/0b1f7c84-a64a-49ce-ae1c-c51b120d8ea2/P85-side-e1663291233852.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1352,h:500,cg:true"
                            alt=""
                            width={300}
                            height={300}
                            className="w-full sticky top-32 "
                        />
                    </div>
                </div>
            </section>

            <FAQsection />
        </main>
    );
};

export default Services;
