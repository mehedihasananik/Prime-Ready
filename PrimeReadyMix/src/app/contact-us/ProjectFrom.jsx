"use client";
import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";

const ProjectFrom = ({}) => {
    return (
        <div className="w-2/3 mx-auto">
            <form className="flex flex-col gap-5 font-xl max-w-md">
                <Input
                    size="lg"
                    color="orange"
                    className="text-2xl font-bold rounded-none border-none bg-white"
                    placeholder="Full Name*"
                    required
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Input
                    size="lg"
                    color="orange"
                    className="text-2xl font-bold rounded-none border-none bg-white"
                    placeholder="Email*"
                    required
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Input
                    label="Project Budget"
                    size="lg"
                    className="text-2xl font-bold rounded-none border-none bg-white"
                    placeholder="Mobile*"
                    required
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <select className="py-3 px-2 rounded-none border-none bg-white">
                    <option disabled selected>
                        Project Budget
                    </option>
                    <option>10,000 - 20,000</option>
                    <option>20,000 - 30,000</option>
                    <option>30,000 - 40,000</option>
                    <option>40,000 - 50,000</option>
                    <option>50,000+</option>
                </select>
                <Textarea
                    size="lg"
                    color="orange"
                    className="text-2xl font-bold rounded-none border-none bg-white"
                    placeholder="Project Description*"
                    required
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <Button
                    aria-label="submit-button"
                    size="lg"
                    className="bg-primary text-xl"
                    color="orange"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ProjectFrom;
