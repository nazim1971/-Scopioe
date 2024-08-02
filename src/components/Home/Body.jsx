import Nav from "./Nav";




const Body = () => {
     


    return (
        <div className="border w-full bg-[#EEF2F5]">
         <Nav/>

        <div className="bg-white max-w-[1130px] h-[210px] p-5 m-6 rounded-2xl grid grid-cols-2 gap-10">

        <div className="space-y-2">
            <h2 className="text-lg font-medium">
            I'm Looking for Massage Therapist Near... 
            </h2>
            <p> 
            In using this site, I agree to be bound by the <span className="text-[#156BCA] underline ">Terms of Service</span>
             <br />
              and  <span className="text-[#156BCA] underline ">Privacy Policy</span>
            </p>
            <div className="relative">
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

        </div>
        </div>
    );
};

export default Body;