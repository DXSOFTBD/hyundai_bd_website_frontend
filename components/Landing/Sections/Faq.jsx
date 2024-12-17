"use client"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import faq from "@/public/Banner/faq.jpg";
import { FaHeadphones } from "react-icons/fa";

const Faq = () => {
    return (
        <div className="py-16 bg-[#234982]">
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
                                    What does NUMATRIX Limited do?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                We create tailored HRMS and ERP software solutions that
                                streamline your processes, unlock valuable insights, and drive
                                your business growth.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    What areas do your HRMS and ERP solutions cover?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                We offer solutions for payroll management, employee
                                engagement, recruitment, finance, inventory, supply chain, and
                                more.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    Can you customize your solutions to my specific needs?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                Absolutely! We believe in building software that perfectly
                                complements your existing infrastructure and optimizes your
                                unique processes.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    What benefits can I expect from implementing an HRMS system?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                Improve efficiency, reduce administrative tasks, enhance
                                employee experience, gain data-driven insights, and increase
                                compliance.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="rounded-md py-2 bg-transparent border-b-2 border-b-white">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className="text-black" />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <p className="text-[16px] font-medium text-black">
                                    What are the advantages of implementing an ERP system?
                                </p>
                            </AccordionSummary>
                            <AccordionDetails className="text-black">
                                Gain control over your finances, inventory, and supply chain,
                                improve communication and collaboration, boost operational
                                efficiency, and make data-driven decisions.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
