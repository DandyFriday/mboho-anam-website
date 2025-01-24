import { BsGeoAlt, BsTelephone, BsYoutube } from "react-icons/bs"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ContactInfoInterface, FooterLinksInterface } from "../assets/store/Interfaces"
import { BiEnvelope } from "react-icons/bi"
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri"

const icons = [
    <FaFacebookF />,
    <FaXTwitter />,
    <RiInstagramFill />,
    <RiLinkedinFill />,
    <BsYoutube />
]
const FooterLinks = [
  
    {
        header: "Company",
        links: ["Contact us", "Careers", "Culture", "Blog"]
    },
    {
        header: "Support",
        links: ["Help center", "Server status", "Report a bug", "Chat support"]
    },
    {
        header: "Legal",
        links: ["Privacy Policy", "User Terms of Use", "Payments & Pricing policy", "Cookies & Data Privacy"]
    },
]

export const ContactInfo = [
    {
        icon: <BiEnvelope />,
        contact: 'dandyfriday31@gmail.com'
    },
    {
        icon: <BsTelephone />,
        contact: '(+234) 8162482729'
    },
    {
        icon: <BsGeoAlt />,
        contact: 'Anam Abak midim clan'
    },
]


const Footer = () => {
    return(
        <footer className="w-full bg-primary pt-[8vh] pb-[0vh] lg:py-[14vh] px-[4rem]">
            <div className="w-11/12 lg:w-11/12 flex flex-col gap-6 text-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 md:gap-9">

                    <div className="flex flex-col gap-4 col-span-2">
                        <h2 className="text-3xl text-orange text-opacity-100">Mboho Anam</h2>
                        <p>Our bursary exercise is to promote diligence and hard work amongst the students of Anam.</p>
                        <div className="flex gap-3 items-center ">
                            {
                                icons.map((icon : JSX.Element, i) => (
                                    <div key={i} className="text-xl lg:text-2xl text-orange cursor-pointer">
                                        {icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
 

                    {
                        FooterLinks.map((link : FooterLinksInterface, i) => (
                            <div key={i} className="flex flex-col gap-4 w-full">
                                <h3 className="text-orange py-4 font-semibold text-lg">{link.header}</h3>

                                <div className="flex flex-col gap-4 text-sm text-gray-200">
                                    {
                                        link.links.map((link : string, i) => (
                                            <Link key={i} to={''}>
                                                {link}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col flex-wrap md:flex-row gap-3 lg:items-center my-3 lg:my-0">
                    {
                        ContactInfo.map((info: ContactInfoInterface, i) => (
                            <div key={i} className="flex items-center gap-2 text-orange">
                                {info.icon}

                                <a href="">{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © 2024 Engr. Dandy George & Co</p>

                    <p className="w-full lg:w-fit">All Rights Reserved | <span className="underlin text-orange">Terms and Conditions</span> | <span className="underline">Privacy Policy</span> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer