"use client";
import { Rating } from "@material-tailwind/react";

const Reviews = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, key) => (
                <figure className="p-2 border border-dark-50 rounded-md" key={key}>
                    <Rating value={4} readonly size={24} className="mb-4" ratedColor="amber" />
                    <p className=" leading-relaxed mb-4 text-dark-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti
                        perferendis ut hic sit ea cum blanditiis recusandae rem! Iure odit odio
                        velit tempora natus, pariatur porro suscipit quaerat omnis id nulla saepe
                        debitis aspernatur vero eaque alias! Placeat doloribus, optio iusto dolorum
                        excepturi libero officiis minus voluptatum, deserunt repellat a commodi quia
                        quos? Quaerat quibusdam ex reiciendis rerum eaque?
                    </p>
                    <h6 className="text-primary mb-4">- Timore C.</h6>
                </figure>
            ))}
        </div>
    );
};

export default Reviews;
