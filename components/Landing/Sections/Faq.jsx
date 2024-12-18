"use client"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import faq from "@/public/Banner/faq.jpg";
import { FaHeadphones } from "react-icons/fa";

const Faq = () => {
    return (
        <div className="py-16 bg-[#234982] rounded-tr-[400px] ] rounded-br-[400px]">
            <div className="mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-20 container mx-auto">
                    <div className="flex items-center justify-center relative">
                        <div>
                            <Image className="opacity-70" src={faq} alt="faq" />
                        </div>
                        <div className="absolute top-[50%] text-white text-4xl">
                            <p>Call Us Now</p>
                        </div>
                        <div className="absolute top-[15%] left-[5%] text-white text-4xl bg-[#234982] p-4 rounded-md">
                            <p><FaHeadphones /></p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-white text-4xl font-bold">Do you have questions?</h2>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    When should I schedule maintenance?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                It's recommended to schedule HVAC maintenance at least once a year, ideally before the start of the heating or cooling season. Regular maintenance helps improve efficiency, prevent breakdowns, and prolong the lifespan of your system.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    How often should I replace HVAC filters?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                HVAC filters should typically be replaced every 1 to 3 months, depending on factors such as filter type, indoor air quality, and usage. Clogged or dirty filters can restrict airflow and reduce system efficiency.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    Do you use genuine parts for repairs?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                Yes, we use only high-quality, genuine parts to ensure the best performance and longevity of your device after the repair.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    Is there a warranty on your repairs?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                Absolutely. All our repairs come with a warranty to give you peace of mind. The specific warranty duration may vary depending on the type of repair and the device.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    How do I get a quote for my repair?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                You can get a quote by visiting our website or contacting our customer service. We provide transparent pricing with no hidden fees.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
