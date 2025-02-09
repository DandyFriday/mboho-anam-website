// import { useState } from "react";
// import { assets } from "../assets/assets";

// const Form = () => {
//   const [passport, setPassport] = useState<string | null>(null);
//   const [selectedClan, setSelectedClan] = useState("");
//   const [selectedVillage, setSelectedVillage] = useState("");
//   const [villages, setVillages] = useState<string[]>([]);
//   const [wards, setWards] = useState<string[]>([]);
//   const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({
//     admissionLetter: null,
//     certificateOfOrigin: null,
//     feePaymentEvidence: null,
//     attestationLetter: null,
//   });

//   // Clan Data
//   const clanData: Record<string, { villages: string[]; wards: string[] }> = {
//     "Abak Midim": {
//       villages: ["Ediene IKot Inyang", "Eka Ediene", "Enuekoro", "Etuk Ediene"],
//       wards: ["Abak Midim I, ward 10", "Abak Midim II, ward 11"],
//     },
//     "Ibesit Nnung Ikot": {
//       villages: ["Anwa Udo", "Eteben", "Idung Ntuk Uma"],
//       wards: ["Ibesit Nnung Ikot I, Ward 15", "Ibesit Nnung II, Ward 16"],
//     },
//   };

//   const handleClanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const clan = event.target.value;
//     setSelectedClan(clan);
//     setVillages(clan ? clanData[clan]?.villages || [] : []);
//     setWards(clan ? clanData[clan]?.wards || [] : []);
//     setSelectedVillage("");
//   };

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPassport(imageUrl);
//     }
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
//     const file = event.target.files?.[0];
//     setUploadedFiles((prev) => ({ ...prev, [field]: file }));
//   };

//   return (
//     <div className="py-[5rem] relative min-h-screen">
//       {/* Header Section */}
//       <div className="py-8 flex items-center relative">
//         <h1 className="flex items-center">
//           <img className="h-[14rem] pb-16 pt-[2rem] w-[30px] pl-[8rem] md:w-60" src={assets.logo_web} alt="logo" />
//           <b className="px-[18rem] text-navy-blue font-extrabold text-[42px]">Mboho Anam</b>
//         </h1>

//         {/* Passport Upload Space */}
//         <div className="absolute right-10 w-40 h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
//           {passport ? (
//             <img src={passport} alt="Passport" className="w-full h-full object-cover" />
//           ) : (
//             <label className="w-full h-full flex items-center justify-center cursor-pointer">
//               <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//               <span className="text-primary text-sm">Affix Recent Passport</span>
//             </label>
//           )}
//         </div>
//       </div>

//       {/* Form Section */}
//       <form className="max-w-3xl mx-auto h-auto space-y-4 p-4 bg-white opacity-90"
//         style={{
//           backgroundImage: `url(${assets.logo_web})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           minHeight: '700px',
//         }}
//       >
//         {/* Name of Student */}
//         <label className="px-3 font-extrabold">Name of Student</label>
//         <div className="flex space-x-4">
//           <input type="text" placeholder="Surname" className="border-b-2 border-gray-400 outline-none w-full py-2" />
//           <input type="text" placeholder="First Name" className="border-b-2 border-gray-400 outline-none w-full py-2" />
//           <input type="text" placeholder="Middle Name" className="border-b-2 border-gray-400 outline-none w-full py-2" />
//         </div>

//         {/* Village, Clan, and Wards */}
//         <div className="flex space-x-4">
//           <select className="border-b-2 border-gray-400 outline-none w-full py-2" onChange={handleClanChange} value={selectedClan}>
//             <option value="">Select Clan</option>
//             {Object.keys(clanData).map((clan) => (
//               <option key={clan} value={clan}>
//                 {clan}
//               </option>
//             ))}
//           </select>

//           <select className="border-b-2 border-gray-400 outline-none w-full py-2" onChange={(e) => setSelectedVillage(e.target.value)} value={selectedVillage} disabled={!selectedClan}>
//             <option value="">Select Village</option>
//             {villages.map((village) => (
//               <option key={village} value={village}>
//                 {village}
//               </option>
//             ))}
//           </select>

//           <select className="border-b-2 border-gray-400 outline-none w-full py-2" disabled={!selectedClan}>
//             <option value="">Select Ward</option>
//             {wards.map((ward) => (
//               <option key={ward} value={ward}>
//                 {ward}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* File Upload Section */}
//         <fieldset className="border-2 border-orange p-4">
//           <legend className="text-arsenal_red font-extrabold text-2xl">Upload Required Documents</legend>

//           {["admissionLetter", "certificateOfOrigin", "feePaymentEvidence", "attestationLetter"].map((field, index) => {
//             const labels = ["Admission Letter", "Certificate of Origin", "Fee Payment Evidence", "Attestation Letter"];
//             return (
//               <div key={field} className="mt-4">
//                 <label className="block text-gray-700 font-bold">{labels[index]}</label>
//                 <input
//                   type="file"
//                   accept=".pdf,image/*"
//                   className="border-b-2 border-gray-400 outline-none w-full py-2"
//                   onChange={(e) => handleFileUpload(e, field)}
//                 />
//                 {uploadedFiles[field] && <p className="text-sm text-green-500">File uploaded: {uploadedFiles[field]?.name}</p>}
//               </div>
//             );
//           })}
//         </fieldset>

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;







// import { useState } from "react";
// import { assets } from "../assets/assets";

// const Form = () => {
//   const [passport, setPassport] = useState<string | null>(null);
//   const [selectedClan, setSelectedClan] = useState("");
//   const [selectedVillage, setSelectedVillage] = useState("");
//   const [villages, setVillages] = useState<string[]>([]);
//   const [wards, setWards] = useState<string[]>([]);
//   const [files, setFiles] = useState<{ [key: string]: File | null }>({
//     admissionLetter: null,
//     certificateOfOrigin: null,
//     feePaymentEvidence: null,
//     attestationLetter: null,
//   });

//   // Data structure mapping clans to villages and wards
//   const clanData: Record<string, { villages: string[]; wards: string[] }> = {
//     "Abak Midim": {
//       villages: [
//         "Ediene Ikot Inyang", "Eka Ediene", "Enuekoro", "Etuk Ediene", "Ikot Adia",
//         "Ikot Akpakpan", "Ikot Inuen", "Ikot Akpan Etedue", "Ikot Akpan Ntia", "Ikot Akpan Essien",
//         "Ikot Akpan Otuk", "Ikot Akpan Udo 1", "Ikot Eda", "Ikot Mbong", "Ikot Obio Asan",
//         "Ikot Obio Atara", "Ikot Obio Aduak", "Ikot Oko", "Ikot Osute", "Ikot Otok", "Ikot Otu",
//         "Ikot Owobo", "Ikot Ukpo", "Ikot Upong Obioese", "Ikot Uso Etok", "Ikot Utiat",
//         "Offot Ikot Abasi Esu", "Otung Aya", "Ikot Ukpong Eren", "Ukpom", "Ute Etok",
//         "Utu Ikot Iwara", "Utu Ikot Obion Ekpe", "Ikot Esenam", "Ikot Itor", "Manta", "Ikot Obong"
//       ],
//       wards: [
//         "Abak Midim I, Ward 10", "Abak Midim II, Ward 11", "Abak Midim III, Ward 12",
//         "Abak Midim IV, Ward 13", "Abak Midim V, Ward 14"
//       ],
//     },
//     "Ibesit Nnung Ikot": {
//       villages: [
//         "Anwa Udo", "Eteben", "Idung Ntuk Uma", "Ikot Akpan Nsek", "Ikot Akpan Udo", "Ikot Iba",
//         "Ikot Idem", "Ikot Ifot", "Ikot Ikpene", "Ikot Ndo", "Ikot Oku", "Ikot Omono", "Ikot Oto",
//         "Ikot Owuk", "Ikot Udo Offiong", "Ikot Udoro", "Ikot Ukpong Obio Kpong", "Itung Ekpip",
//         "Ibesit Okpokoro"
//       ],
//       wards: ["Ibesit Nnung Ikot I, Ward 15", "Ibesit Nnung Ikot II, Ward 16"],
//     },
//   };

//   const handleClanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const clan = event.target.value;
//     setSelectedClan(clan);
//     setVillages(clan ? clanData[clan]?.villages || [] : []);
//     setWards(clan ? clanData[clan]?.wards || [] : []);
//     setSelectedVillage(""); // Reset village when changing clan
//   };

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setPassport(imageUrl);
//     }
//   };

//   return (
//     <div className="py-20 relative min-h-screen">
//       {/* Form Section */}
//       <form className="max-w-3xl mx-auto p-6 bg-white opacity-90">
//         {/* Name of Student */}
//         <label className="px-3 font-bold">Name of Student</label>
//         <div className="flex space-x-4">
//           <input type="text" placeholder="Surname" className="border-b-2 border-gray-400 outline-none p-2 w-full" />
//           <input type="text" placeholder="First Name" className="border-b-2 border-gray-400 outline-none p-2 w-full" />
//           <input type="text" placeholder="Middle Name" className="border-b-2 border-gray-400 outline-none p-2 w-full" />
//         </div>

//         {/* Village, Clan, and Wards */}
//         <div className="flex space-x-4 mt-4">
//           <select className="border-b-2 border-gray-400 outline-none p-2 w-full" onChange={handleClanChange} value={selectedClan}>
//             <option value="">Select Clan</option>
//             {Object.keys(clanData).map((clan) => (
//               <option key={clan} value={clan}>{clan}</option>
//             ))}
//           </select>
//           <select className="border-b-2 border-gray-400 outline-none p-2 w-full" onChange={(e) => setSelectedVillage(e.target.value)} value={selectedVillage} disabled={!selectedClan}>
//             <option value="">Select Village</option>
//             {villages.map((village) => (
//               <option key={village} value={village}>{village}</option>
//             ))}
//           </select>
//           <select className="border-b-2 border-gray-400 outline-none p-2 w-full" disabled={!selectedClan}>
//             <option value="">Select Ward</option>
//             {wards.map((ward) => (
//               <option key={ward} value={ward}>{ward}</option>
//             ))}
//           </select>
//         </div>

//         {/* File Upload Section */}
//         <fieldset className="border-2 p-4 mt-6">
//           <legend className="font-bold text-lg">Upload Documents</legend>
//           {["Admission Letter", "Certificate of Origin", "Fee Payment Evidence", "Attestation Letter"].map((label, index) => (
//             <div key={index} className="mb-4">
//               <label className="block text-sm font-medium">{label}</label>
//               <input type="file" accept=".pdf,image/*" className="border-b-2 border-gray-400 outline-none p-2 w-full" />
//             </div>
//           ))}
//         </fieldset>

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-primary text-white py-2 mt-6 rounded-lg">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;








import { useState } from "react";
import { assets } from "../assets/assets";

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
      <form className="mx-auto w-full h-[20rem] space-y-4 p-4 bg-white"
        style={{
        backgroundImage: `url(${assets.logo_web})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: '700px',
      }}>
        {/* Name of Student */}
        
        <div className="flex px-4">Name of Student
          <input type="text" placeholder="Surname" className="border-b-2 border-gray-400  hover:border-primary outline-none w-full py-2" />
          <input type="text" placeholder="First Name" className="border-b-2 border-gray-400  hover:border-primary outline-none w-full py-2" />
          <input type="text" placeholder="Middle Name" className="border-b-2 border-gray-400  hover:border-primary outline-none w-full py-2" />
        </div>
        <div className="flex space-x-4">
          <input type="text" placeholder="Date of Birth" className="border-b-2 border-gray-400  hover:border-primary outline-none w-full py-2" />
          <input type="text" placeholder="Sex" className="border-b-2 border-gray-400  hover:border-primary outline-none w-full py-2" />
        </div>
        {/* Village, Clan, and Wards */}
        <div className="flex space-x-4">
          <select className="border-b-2 border-gray-400 hover:border-primary outline-none w-full py-2"  onChange={handleClanChange} value={selectedClan}>
            <option value="">Select Clan</option>
            {Object.keys(clanData).map((clan) => (
              <option key={clan} value={clan}>
                {clan}
              </option>
            ))}
          </select>     


          <select className="border-b-2 border-b-black hover:border-primary outline-none w-full py-2"  onChange={(e) => setSelectedVillage(e.target.value)} value={selectedVillage} disabled={!selectedClan}>
            <option value="">Select Village</option>
            {villages.map((village) => (
              <option key={village} value={village}>
                {village}
              </option>
            ))}
          </select>

          <select className="border-b-2 border-gray-400 hover:border-primary outline-none w-full py-2"  disabled={!selectedClan}>
            <option value="">Select Ward</option>
            {wards.map((ward) => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>

        {/* Institution and Reg No */}
        <input type="text" placeholder="Name / Address of Institution" className="border p-2 w-full" />
        <div className="flex space-x-4">
          <input type="text" placeholder="Reg No" className="border p-2 flex-1" />
          <input type="text" placeholder="Programme" className="border p-2 flex-1" />
        </div>

        {/* Department, Admission Year, Year of Study */}
        <div className="flex space-x-4">
          <input type="text" placeholder="Department" className="border p-2 flex-1" />
          <input type="text" placeholder="Year of Admission" className="border p-2 flex-1" />
          <input type="text" placeholder="Year of Study" className="border p-2 flex-1" />
        </div>

        {/* Phone Number */}
        <input type="text" placeholder="Phone Number" className="border p-2 w-full" />
        <fieldset className="border-2 border-orange">
          <div>
            <h2 className="px-[18rem] text-arsenal_red font-extrabold text-3xl ">DECLARATION BY STUDENT</h2>
            <p>I <input className="py-1 w-[30rem] text-2xl text-black font-bold "/> hereby declare that I am currently a student of the aforementioned institution. I accept that my application be rejected if any of the information given by me in this form is found to be false.
            </p>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Form;

