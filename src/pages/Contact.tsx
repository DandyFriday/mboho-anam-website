import { BsArrowRight, BsDiscord, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsTelephoneOutboundFill, BsTwitter } from "react-icons/bs"
import { ContactInfoInterface, InputFieldInterface } from "../assets/store/Interfaces"
import { ChangeEvent, FC, useState } from "react"
import { Button } from "../components/Button"
import { BiCheck } from "react-icons/bi"

const contactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: "(+234)8162482729",
        
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "dandyfriday31@gmail.com",
    },
    {
        icon: <BsGeoAltFill />,
        contact: "Ikot Akpan Essien, Oruk Anam LGA, Akwa Ibom State.",
    }
]
const socialLinks = [
    <BsTwitter/>, <BsInstagram/>, <BsDiscord/>
]
const subjectOptions = [
    "General Inquiry", "Bursary Information", "Technical", "Registration", "Other"
]

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: subjectOptions[0]
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


    return(
        <main className=" flex-col lg:flex-row pt-[20vh] pb-[6vh] bg-white">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-9 text-primary">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="font-bold text-4xl">
                        Contact Us
                    </h1>
                    <p className="text-gray-700">
                    Any question or remarks? Just write us a message
                    </p>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                    <div className="bg-primary flex flex-col justify-between text-gray-300 p-9 py-[6vh] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:w-5/12 gap-[10vh] lg:gap-9">

                        <div className="flex flex-col gap-1 h-[20%]">
                            <h2 className="text-orange text-opacity-90 text-3xl font-semibold">Contact Information</h2>
                            <p className="font-bold">Say something to start a live chat!</p>
                        </div>
                        <div className="flex flex-col gap-5 h-[65%]">
                            {
                                contactInfo.map((contact : ContactInfoInterface, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="text-xl text-orange text-opacity-90">
                                            {contact.icon}
                                        </div>

                                        <p>{contact.contact}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex gap-4 h-[12%]">
                            {
                                socialLinks.map((link: JSX.Element, i) => (
                                    <div key={i} className="flex justify-center bg-opacity-90 py-2 h-8 w-8 rounded-full bg-orange text-white hover:bg-white hover:text-primary transition-all duration-500 cursor-pointer">
                                        {link}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="absolute w-[150px] h-[150px] bg-orange bg-opacity-80 rounded-full -right-[70px] -bottom-[35px]"></div>

                    </div>


                    <div className="w-full lg:w-7/12 flex flex-col p-9 py-[6vh]">
                        <form className="flex flex-col md:grid md:grid-cols-2 gap-6 gap-y-9">
                            <InputField 
                                label="First Name"
                                type="text"
                                name="firstName"
                                handleChange={handleChange}
                                value={formInputs.firstName}
                            />
                            <InputField 
                                label="Last Name"
                                type="text"
                                name="lastName"
                                handleChange={handleChange}
                                value={formInputs.lastName}
                            />
                            <InputField 
                                label="Email"
                                type="email"
                                name="email"
                                handleChange={handleChange}
                                value={formInputs.email}
                            />
                            <InputField 
                                label="Phone Number"
                                type="number"
                                name="phoneNumber"
                                handleChange={handleChange}
                                value={formInputs.phoneNumber}
                            />

                            <div className="flex flex-col gap-3">
                                <label htmlFor="Subject" className="font-bold">Select Subject</label>

                                <div className="flex flex-col flex-wrap gap-3">
                                    {
                                        subjectOptions.map((subject: string, i) => (
                                            <div key={i} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                                                setFormInputs({
                                                    ...formInputs,
                                                    subject: subject
                                                })
                                            }}>
                                                <div className={`${formInputs.subject === subject ? "bg-primary " : "bg-gray-300"} rounded-full text-white center h-4 w-4`}>
                                                    {
                                                        formInputs.subject === subject &&
                                                        <BiCheck className="text-sm"/> 
                                                    }
                                                </div>
                                                <p className="text-sm">{subject}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <InputField 
                                className="col-span-2"
                                label="Message"
                                type="text"
                                name="message"
                                placeholder="Write your message"
                                handleChange={handleChange}
                                value={formInputs.message}
                            />

                            <div className="flex items-center lg:justify-end w-full lg:col-span-2">
                                <Button 
                                    className="bg-opacity-100 text-primary bg-orange hover:bg-primary flex hover:text-white items-center h-fit py-3 font-bold w-fit px-9"
                                    text="Send Message" 
                                    icon={<BsArrowRight className="ml-3 "/>}
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default ContactPage


const InputField :FC <InputFieldInterface> = ({type, label, className, handleChange, name, value, placeholder}) => {
    return(
        <div className={`flex flex-col w-full text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-primary" : "text-gray-600"}`}>{label}</label>


            <input 
                type={type}
                onChange={(e) => handleChange(e)}
                name={name}
                placeholder={placeholder}
                className={`p-2 bg-transparent outline-none border-b ${value !== "" ? "border-b-2 focus:border-primary" : " border-gray-400"} hover:border-b-2 hover:border-primary cursor-pointer`}
            />
        </div>
    )
}
