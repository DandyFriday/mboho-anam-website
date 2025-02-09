import { BsGeoAlt, BsTelephone, BsYoutube } from "react-icons/bs"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ContactInfoInterface, FooterLinksInterface } from "../assets/store/Interfaces"
import { BiEnvelope } from "react-icons/bi"
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri"
import { assets } from "../assets/assets"

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
        links: ["Contact us", "Careers", "Culture"]
    },
    {
        header: "Support",
        links: ["Help center", "Server status", "Report a bug", "Chat support"]
    },
    {
        header: "Legal",
        links: ["Privacy Policy", "User Terms of Use", "Payments", "Cookies & Data Privacy"]
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
        <div className="w-full bg-primary px-[4rem] pt-20">
            <div className="w-11/12 lg:w-11/12 flex flex-col gap-4 text-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-4 md:gap-6">

                    <div className="flex flex-col gap-6 col-span-3">
                    <div className="mb-[-12rem] mt-[-4rem]">
                            <h1 className="flex items-center justify-center pb-[4rem]">
                                <a href="/">
                                    <img
                                        className="h-[10rem] pb-16 pt-[3rem] w-[20px] md:w-full "
                                        src={assets.logo_web}
                                        alt="logo"
                                    />
                                </a>                               
                            </h1>

                        </div> 
                        <h2 className="text-3xl font-extrabold text-white font-stylish text-opacity-100">
                            Mboho Anam
                        </h2>                        
                        <p>Our bursary exercise is to promote diligence and hard work amongst the students of Anam.</p>
                        <div className="flex gap-3 items-center ">
                            {
                                icons.map((icon : JSX.Element, i) => (
                                    <div key={i} className="text-xl lg:text-2xl text-white hover:text-yellow2 cursor-pointer">
                                        {icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
 

                    {
                        FooterLinks.map((link : FooterLinksInterface, i) => (
                            <div key={i} className="flex flex-col gap-4 w-full">
                                <h3 className="text-white font-bold py-4 font-stylish text-lg">{link.header}</h3>

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
                            <div key={i} className="flex items-center gap-2 hover:text-yellow2">
                                {info.icon}

                                <a href="">{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © 2024 Engr. Dandy George & Co</p>

                    <p className="w-full lg:w-fit">All Rights Reserved | <span className="underlin text-yellow2">Terms and Conditions</span> | <span className="underline">Privacy Policy</span> </p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer