import Reviews from "./Reviews";

export const metadata = {
    title: "Prime Ready Mix Easy Reno Testimonials",
    description:
        "Below is a short selection from some of the testimonials we have collected over the years. Whether it is Google, Home Stars, Trusted Pros or Houzz, our clients are happy with their finished product. At Easy Reno our aim is to make every project a complete success.",
};

export default function () {
    return (
        <main>
            <section>
                <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex justify-center items-center">
                        <h1 className="font-medium text-dark">
                            Easy Reno <br />
                            Testimonials
                        </h1>
                    </div>
                    <div>
                        <p className="leading-relaxed text-xl font-medium text-dark max-w-md">
                            Below is a short selection from some of the testimonials we have
                            collected over the years. Whether it is Google, Home Stars, Trusted Pros
                            or Houzz, our clients are happy with their finished product. At Easy
                            Reno our aim is to make every project a complete success.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="max-w-2xl text-center mx-auto">
                        <h1 className="mb-4">Reviews</h1>
                        <p className="text-xl font-medium mb-3">
                            Don’t take our word for it — hear <br />
                            what our customers are saying.
                        </p>
                        <div className="mx-auto mb-4 h-1 w-40 bg-primary" />
                    </div>
                    <div className="py-5">
                        <Reviews />
                    </div>
                </div>
            </section>
        </main>
    );
}
