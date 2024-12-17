import { FiPhoneCall } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
const Footer = () => {
    return (
        <div className="bg-[#0A2540] px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto py-10 text-white gap-10">
                <div>
                    <p className="text-3xl font-semibold mb-4">Hyundai Bangladesh</p>
                    <p>We specialize in providing top-quality heating, ventilation, and air conditioning services tailored to your unique requirements. Our skilled technicians are dedicated to delivering reliable solutions that ensure your comfort and satisfaction.</p>
                </div>
                <div>
                    <p className="text-xl font-semibold mb-4">Company</p>
                    <ol className="space-y-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ol>
                </div>
                <div>
                    <p className="text-xl font-semibold mb-4">Services</p>
                    <ol className="space-y-2">
                        <li>Installation</li>
                        <li>Maintenance</li>
                        <li>Repair</li>
                        <li>Price List</li>

                    </ol>
                </div>
                <div>
                    <p className="text-xl font-medium mb-4 text-[#3970c4]">24 Hours & Emergensis</p>
                    <ol className="space-y-3">
                        <div className="flex gap-2 items-center">
                            <div>
                                <p className="text-[#3970c4] text-xl"> <FiPhoneCall /></p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">+929 333 9296</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-2 items-center">
                                <div>
                                    <p className="text-[#3970c4] text-xl"> <IoLocationOutline /></p>
                                </div>
                                <div>
                                    <p className="font-semibold">Office Location</p>
                                </div>
                            </div>
                            <div className="ml-6">
                                <p>House:7, Road: 54/A ,Gulshan-2</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <p className="text-[#3970c4] text-xl"> <MdOutlineForwardToInbox /></p>
                                <p className="font-semibold">Send a Message</p>
                            </div>
                            <div className="ml-6">
                                <p>contact@hyundaiac.com</p>
                            </div>
                        </div>




                    </ol>
                </div>
            </div>
            <div className="border-t-2"></div>

            <div className="py-10 text-white">
                <div className="container mx-auto flex justify-around">
                    <p>
                        © Copyright Hyundai Bangladesh. All Rights Reserved
                    </p>
                    <p>
                        Design & Developed by Numatrix
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
