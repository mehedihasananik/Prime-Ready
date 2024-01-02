import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
    Dialog,
    Input,
    Option,
    Select,
    Textarea,
    Typography,
} from "@material-tailwind/react";

import React from "react";

const DialogComponent = ({ open, handleOpen, setOpen }) => {
    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none h-screen overflow-y-scroll"
        >
            <Card className="mx-auto w-full ">
                <div className="flex justify-end items-start w-10/12 mx-auto mt-5">
                    <span>
                        <i
                            className="fa-solid fa-x"
                            onClick={() => {
                                setOpen(false);
                            }}
                        ></i>
                    </span>
                </div>
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
                    <h3 className="text-sm font-semibold text-center text-black my-1">OR</h3>
                    <a href="tel:+1 (647) 539-6755" className="w-full">
                        <Button
                            aria-label="estimate-button"
                            size="md"
                            className="bg-dark w-full text-lg rounded-md my-0"
                        >
                            Make a call
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </Dialog>
    );
};

export default DialogComponent;
