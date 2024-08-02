import { AiOutlineAppstore } from "react-icons/ai";
import { CiHeart, CiSettings } from "react-icons/ci";
import { GrStatusInfo } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className=" hidden md:block">
      
        
      <div className="w-[250px] h-full border ">
      <h1 className="text-[40px] my-6 text-center text-[#4285F3] ">LOGO</h1>

       <div className="space-y-1 px-4">
       <p className="flex items-center gap-3 text-[#5c635a]  py-3 "> <AiOutlineAppstore /> Home</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <MdOutlinePeopleAlt /> New Listing</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <HiMagnifyingGlass /> Search</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <IoDocumentTextOutline /> About</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <CiHeart /> Favorites</p>
        <hr />
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <GrStatusInfo /> Help Center</p>
        <p className="flex items-center gap-3 text-[#5c635a] py-3 "> <CiSettings />  Setting
        </p>
       </div>
      </div>


    </div>
  );
};

export default Sidebar;
