import { useState } from "react";
import { assets } from "../assets/assets";
import { BsArrowRight } from "react-icons/bs"
import { Button } from "../components/Button";

const Form = () => {
  const [passport, setPassport] = useState<string | null>(null);
  const [selectedClan, setSelectedClan] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [villages, setVillages] = useState<string[]>([]);
  const [wards, setWards] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({
        admissionLetter: null,
        certificateOfOrigin: null,
        feePaymentEvidence: null,
        attestationLetter: null,
      });

  // Data structure mapping clans to villages and wards
  const clanData: Record<string, { villages: string[]; wards: string[] }> = {
    "Abak Midim": {
      villages: ["Ediene IKot Inyang", "Eka Ediene", "Enuekoro" ,"Etuk Ediene", "IKot Adia",
        "IKot Akpakpan", "Ikot Inuen", "IKot Akpan Etedue","IKot Akpan Ntia", "IKot Akpan Essien",
        "IKot Akpan Otuk","IKot Akpan Udo1","IKot Eda","Ikot Mbong","Ikot Obio Asan","IKot Obio Atara",
        "IKot Obio Aduak","ikot Oko","IKot Osute","Ikot Otok", "Ikot Otu","Ikot Owobo","IKot Ukpo","IKot Upong Obioese",
        "Ikot Uso Etok","IKot Utiat","Offot Ikot Abasi Esu","Otung Aya", "IKot UKpong Eren","Ukpom",
        "Ute Etok","Utu IKot Iwara","Utu IKot Obion Ekpe","IKot Esenam","IKot itor","Manta","Ikot Obong"],
      wards: ["Abak Midim I, ward 10", "Abak Midim II, ward 11", "Abak Midim III, ward 12",
        "Abak Midim IV, ward 13","Abak Midim V, ward 14"
      ],
    },
    "Ibesit Nnung Ikot": {
      villages: ["Anwa Udo", "Eteben", "Idung Ntuk Uma","Ikot Akpan Nsek","IKot Akpan Udo","Ikot Iba","Ikot Idem","Ikot Ifot",
        "Ikot Ikpene","Ikot Ndo","Ikot Oku","Ikot Omono","Ikot Oto","Ikot Owuk","Ikot Udo Offiong",
        "Ikot Udoro","Ikot Ukpong Obio Kpong","Itung Ekpip","Ibesit Okpokoro"
      ],
      wards: ["Ibesit Nnung Ikot I, Ward 15", "Ibesit Nnung II, Ward 16"],
    },
  };

  const handleClanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const clan = event.target.value;
    setSelectedClan(clan);
    setVillages(clan ? clanData[clan]?.villages || [] : []);
    setWards(clan ? clanData[clan]?.wards || [] : []);
    setSelectedVillage(""); // Reset village when changing clan
  };
  

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPassport(imageUrl);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
         const file = event.target.files?.[0];
         setUploadedFiles((prev) => ({ ...prev, [field]: file }));
     };


  return (
    <div className="py-[5rem] relative min-h-screen">
      {/* Header Section */}
      <div className="py-8 flex items-center relative">
        <h1 className="flex items-center">
          <img
            className="h-[14rem] pb-16 pt-[2rem] w-[30px] pl-[8rem] md:w-60"
            src={assets.logo_web}
            alt="logo"
          />
          <b className="px-[18rem] text-navy-blue font-extrabold text-[42px]">Mboho Anam</b>
        </h1>

        {/* Passport Upload Space */}
        <div className="absolute right-10 w-40 h-40 flex items-center justify-center border-2 border-primary bg-gray-200 rounded-md overflow-hidden">
          {passport ? (
            <img src={passport} alt="Passport" className="w-full h-full object-cover" />
          ) : (
            <label className="w-full h-full flex items-center justify-center cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              <span className="text-primary text-sm">Affix Recent Passport</span>
            </label>
          )}
        </div>
      </div>

      {/* Subtitle */}
      <div className="flex items-center justify-center mt-[-7rem]">
        <h2 className="bg-orange2 px-4 py-1 w-auto text-center">
          (An Apex Socio-Cultural Organisation of Anam People)
        </h2>
      </div>
      <div className="flex items-center justify-center mt-[0rem]">
        <h3>
          <b className="font-extrabold text-[2rem] font-serif">Secretariat:</b>
          <span className="text-arsenal_red font-bold">
            {" "}
            Defunct Anam LG Secretariat, Ikot Akpan Essien Oruk Anam Local Government Area, Akwa Ibom
          </span>
        </h3>
      </div>
      <div className="flex items-center justify-center ml-[28rem] mt-[1.5rem] bg-arsenal_red w-[30rem]">
        <h2 className="text-white font-bold text-[1.5rem]">Application Form for nth Bursary Scheme</h2>
      </div>
      <div className="flex items-center justify-center ml-[28rem] mt-[1.5rem] w-[30rem]">
        <h2 className="text-primary font-bold text-[1.6rem]">Section 1: Student Personal Data</h2>
      </div>

      {/* Form Section */}
      <form className=" w-full py-6 space-y-3 px-4 bg-white"
      //   style={{
      //   backgroundImage: `url(${assets.logo_web})`,
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   minHeight: '700px',
      //  }}
       >
        {/* Name of Student */}
        
        <div className="flex items-center justify-around ">
          <b className="px-12">Name of Student :</b>
          <input type="text" placeholder="Surname" className="border-b-2 border-black3  hover:border-primary outline-none py-2 w-[16rem]" />
          <input type="text" placeholder="First Name" className="border-b-2 border-black3  hover:border-primary outline-none w-[18rem] py-2" />
          <input type="text" placeholder="Middle Name" className="border-b-2 border-black3   hover:border-primary outline-none w-[14rem] py-2" />
        </div>
        <div className="flex items-center justify-around ">
          <input type="text" placeholder="Date of Birth" className="border-b-2 border-black3   hover:border-primary outline-none py-2 w-[18rem]" />
          <input type="text" placeholder="Sex" className="border-b-2 border-black3   hover:border-primary outline-none w-[18rem] py-2" />
    
        <input type="text" placeholder="Phone Number" className="border-b-2 border-black3  hover:border-primary outline-none w-[14rem] py-2 " />
        </div>
        {/* Village, Clan, and Wards */}
        <div className="flex items-center justify-around">
          <select className="border-b-2 border-black3  hover:border-primary outline-none w-[18rem] py-2"  onChange={handleClanChange} value={selectedClan}>
            <option value="">Select Clan</option>
            {Object.keys(clanData).map((clan) => (
              <option key={clan} value={clan}>
                {clan}
              </option>
            ))}
          </select>     


          <select className="border-b-2 border-b-black hover:border-primary outline-none w-[18rem] py-2"  onChange={(e) => setSelectedVillage(e.target.value)} value={selectedVillage} disabled={!selectedClan}>
            <option value="">Select Village</option>
            {villages.map((village) => (
              <option key={village} value={village}>
                {village}
              </option>
            ))}
          </select>

          <select className="border-b-2 border-black3  hover:border-primary outline-none w-[18rem] py-2"  disabled={!selectedClan}>
            <option value="">Select Ward</option>
            {wards.map((ward) => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>

        {/* Institution and Reg No */}        
        <div className="flex px-20 items-center  justify-evenly gap-6">
        <input type="text" placeholder="Name / Address of Institution" className="border-b-2 border-black3  hover:border-primary outline-none w-[28rem] py-2"/>
          <input type="text" placeholder="Reg No" className=" border-b-2 border-black3  hover:border-primary outline-none py-2 w-[14rem]" />
          <input type="text" placeholder="Programme" className="flex-1 border-b-2 border-black3  hover:border-primary outline-none py-2 w-[14rem]" />
        </div>

        {/* Department, Admission Year, Year of Study */}
        <div className="flex px-20 pb-4">
          <input type="text" placeholder="Department" className="border-b-2 border-black3  hover:border-primary outline-none w-full py-2 flex-1" />
          <input type="text" placeholder="Year of Admission" className="border-b-2 border-black3  hover:border-primary outline-none w-[18rem] py-2flex-1" />
          <input type="text" placeholder="Year of Study" className="border-b-2 border-black3  hover:border-primary outline-none w-[10rem] py-2 flex-1" />
        </div>

        
        <fieldset className="border-2 border-arsenal_red rounded-3xl py-4 ">
          <div className="px-6">
            <h2 className="px-[24rem] text-arsenal_red font-extrabold text-3xl ">DECLARATION BY STUDENT</h2>
            <p className="text-1xl font-serif py-2">I <input className="border-b-2 border-black3  hover:border-primary outline-none w-[24rem] pt-4 pb-[-4px]"/> hereby declare that I am currently a student of the aforementioned institution. <br/>I accept that my application be rejected if any of the information given by me in this form is found to be false.
            </p>
          </div>
        </fieldset>

        {/* File Upload Section */}
        <fieldset className="flex px-4 items-center p-4">
          <legend className="text-[14px] text-primary font-bold  w-full pb-2 "><b className=" text-navy-blue text-2xl font-extrabold font-serif px-[28rem] ">Upload Required Documents</b><br/><h2><span className="flex text-arsenal_red text-2xl font-bold">Note:</span> Student Attestation Letter sholud be written using Departmental Letter Head capturing the following:<br/>
          <ul className="text-arsenal_red">
            <li>Name of HOD</li>
            <li>Student Name</li>
            <li>HOD Signature with Stamb</li>
            <li>HOD Phone Number</li>
            <li>Date</li>
          </ul>
          </h2>
          </legend>
          {["admissionLetter", "certificateOfOrigin", "feePaymentEvidence", "attestationLetter"].map((field, index) => {
            const labels = ["Admission Letter", "Certificate of Origin", "Recent Fee Payment", "Attestation Letter"];
            return (
              <div key={field} className="mt-4">
                
               <label className="block text-navy-blue text-[20px] font-bold">{labels[index]}</label>
               <input
                  type="file"
                  accept=".pdf,image/*"
                  className="outline-none w-full py-2"
                  onChange={(e) => handleFileUpload(e, field)}
                />
                {uploadedFiles[field] && <p className="text-sm text-primary">File uploaded: {uploadedFiles[field]?.name}</p>}
              </div>
             );
            })          
          }
       </fieldset>

        {/* Submit Button */}
        <div className="flex items-center justify-end pr-12">
          <Button 
          className="bg-opacity-100 text-primary bg-orange2 hover:bg-primary flex hover:text-white items-center h-fit py-3 font-bold"
          text="Submit" 
          icon={<BsArrowRight className="ml-3 "/>}
          />
        </div>
      </form>

    </div>
  );
};

export default Form;

