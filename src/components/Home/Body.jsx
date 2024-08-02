import { useEffect, useState } from "react";
import Nav from "./Nav";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import {  Pagination } from 'swiper/modules';




const Body = () => {

    const [therapists, setTherapists] = useState([]);
    
     
    useEffect(() => {
        fetch('therapist.json')
          .then((response) => response.json())
          .then((data) => setTherapists(data))
          .catch((error) => console.error('Error fetching the JSON file:', error));
      }, []);

   

    return (
        <div className="border w-full bg-[#EEF2F5]">
         <Nav/>

        <div className="bg-white max-w-[1130px] min-h-[430px]  md:min-h-[210px] p-5 my-4 md:m-6 rounded-[10px] grid md:grid-cols-2 gap-10">

        <div className="flex flex-col justify-between p-2 ">
            <h2 className="text-lg font-medium">
            I'm Looking for Massage Therapist Near... 
            </h2>
            <p> 
            In using this site, I agree to be bound by the <span className="text-[#156BCA] underline ">Terms of Service </span>
             <br className="hidden md:inline" />
              and  <span className="text-[#156BCA] underline ">Privacy Policy</span>
            </p>
            <div className="relative hidden md:block">
            <input type="text"
            className="w-full border pl-4 rounded-lg h-[50px] bg-[#EEF2F5]  "
            placeholder="ZIP code or city name"
            />
            <button className="absolute bg-[#156BCA] h-10 w-20 rounded-lg top-[5px] font-medium text-white right-2">Go</button>
            </div>
         </div>

         <div className="bg-cover bg-no-repeat flex justify-end" style={{
            backgroundImage: "url(herobg.png)",
          }}>
            <img src="hero.png" alt="" />
         </div>
         <div className="relative md:hidden block">
            <input type="text"
            className="w-full border pl-4 rounded-lg h-[50px] bg-[#EEF2F5]  "
            placeholder="ZIP code or city name"
            />
            <button className="absolute bg-[#156BCA] h-10 w-20 rounded-lg top-[5px] font-medium text-white right-2">Go</button>
            </div>

        </div>
       

       {/* ********* Featured Therapist *********** */}

       <h2 className="font-medium text-lg ml-6">Featured Therapist</h2>

       {/* <div className="bg-white flex items-center justify-between h-[363px] px-4  m-6 rounded-[10px] ">
        
       
         <Swiper
       slidesPerView={1}
       spaceBetween={10}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         640: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 40,
         },
         1024: {
           slidesPerView: 4,
           spaceBetween: 50,
         },
       }}
       modules={[Pagination]}
       className="mySwiper"
       
      >
      {therapists.map((therapist, index) =>(
         <SwiperSlide key={index}>
         <div  className=" relative h-[303px] min-w-[177px] md:w-[214px] rounded-[10px] border">
           <img src={therapist.picture} className="h-[146px] w-full p-2" alt={`${therapist.name}'s picture`} />
          <div className="px-4 space-y-2">
          <h3 className="text-sm font-medium">{therapist.name}</h3>
           <p className="text-[13px] text-[#5C635A] flex items-center gap-2"> <FaLocationDot />  {therapist.location}</p>
           <p className="text-[13px] text-[#5C635A] flex items-center gap-2"> <FaCar /> {therapist.occupation}</p>
          </div>
          <p className="text-sm absolute w-full text-center bottom-0 h-11 flex items-center justify-center underline rounded-b-[10px]  bg-[#D4E9FF] ">
           See Details
           </p>
         </div>
         </SwiperSlide> ))}
      </Swiper>
        </div> */}

        
       <div className="grid md:grid-cols-2">
        {/* 1st one  */}
        
       <div>
       <h2 className="font-medium text-lg ml-6">Featured Testimonial</h2>
       <div className="bg-white py-4 space-y-5  min-h-[430px] max-w-[550px] px-4 md:m-6 my-5 md:rounded-[10px]">

<div className="flex gap-4 rounded-[10px] border p-3 h-[160px] max-w-[490px]  items-center justify-between">
   <div>
   <img src="tp1.png"  alt="" />
   </div>
   <div>
       <p className="text-[13px]  text-[#5C635A] flex items-center gap-2"> <FaLocationDot /> 123 Elm Street, New York</p>
       <p className="text-sm font-medium">Healing Bodywork <span className="text-[#156BCA]"> by Cort</span> </p>
       <p className="text-[13px] text-[#5C635A]">Cort’s healing bodywork massage was
           <br />
            absolutely transformative. Their intuitive touch
            <br />
             and deep understanding of... <span className="text-[#156BCA] underline ">Read More</span> </p>
   </div>
</div>

<div className="flex gap-4 rounded-[10px] p-3 h-[160px] border items-center justify-between">
   <div>
   <img src="tp2.png" alt="" />
   </div>
   <div>
       <p className="text-[13px] text-[#5C635A] flex items-center gap-2"> <FaLocationDot /> 123 Elm Street, New York</p>
       <p className="text-sm font-medium">Healing Bodywork <span className="text-[#156BCA]"> by Cort</span> </p>
       <p className="text-[13px] text-[#5C635A]">Cort’s healing bodywork massage was
           <br />
            absolutely transformative. Their intuitive touch
            <br />
             and deep understanding of... <span className="text-[#156BCA] underline ">Read More</span> </p>
   </div>
</div>

<div className="flex justify-center pt-2 items-center">
   <img  src="dot3.png"  alt="" />
</div>

</div>
       </div>
      
      {/* 2nd one */}

     <div>
     <h2 className="font-medium text-lg ml-6">Popular Cities</h2>    
     <div className="bg-white  h-[430px] max-w-[550px] text-sm  md:m-6 my-6  md:rounded-[10px]">
     <div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Atlanta, GA</p>
  <p>Indianapolis, IN</p>
  <p>Philadelphia, PA</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Boston, MA</p>
  <p>Jacksonville, FL</p>
  <p>Queens, NY</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Chicago, IL</p>
  <p>Kansas City, MO</p>
  <p>Raleigh, NC</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Chicago, IL</p>
  <p>Los Angeles, CA</p>
  <p>San Antonio, TX</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>El Paso, TX</p>
  <p>Miami, FL</p>
  <p>Tucson, AZ</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Fresno, CA</p>
  <p>Nashville, TN</p>
  <p>Upland, CA</p>
</div>
<hr />
<div className="flex justify-between text-[#156BCA] underline py-[18px] px-5">
  <p>Houston, TX</p>
  <p>Oklahoma City, OK</p>
  <p>Washington, D.C.</p>
</div>

      </div>
     </div>

       </div>


        </div>
    );
};

export default Body;