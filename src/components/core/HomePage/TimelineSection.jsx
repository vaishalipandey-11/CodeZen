import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const timeline = [
    {
        Logo : Logo1,
        heading: 'Leadership',
        Description :"Fully committed to the success company ",
    }
    ,{
        Logo : Logo2,
        heading : "Responsbility",
        Description: " Students will  always be our top priority"
    }
    ,{
        Logo : Logo3,
        heading : "Flexibility",
        Description: " The ability to switch is an important Skills"
    }

    ,{
        Logo : Logo4,
        heading : "Solve the problem ",
        Description: "Code your  way to a solution "
    }

]

const TimeLineSection = () =>{
    return (
        <div className="">
            <div className=" flex flex-col  lg:flex-row gap-20 mb-20 items-center">

                <div className="lg:w-[45%] flex flex-col lg:gap-3">
                   { 
                     timeline.map((element , index)=>{
                        return (
                            <div className=" flex flex-col lg:gap-3 " key ={index}>
                                <div className="flex gap-6">
                                    <div className="w-[50px] h-[50px] bg-caribbeangreen-400 rounded-full flex justify-center items-center shadow-[#6b393912] shadow-[0_0_62px_0]">
                                        <img src={element.Logo}/>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px] ">{element.heading}</h2>
                                        <p className="text-base">{element.Description}</p>
                                    </div>
                                    
                               </div>
                            
                                <div className={`${index === 3 ? "hidden": ""} h-14 border-dotted border-richblack-100 bg-richblack-400/0 w-[26px]`}>

                                </div>
                            </div>
                        )
                     })

                   }
                </div>
            </div>

        </div>
    )
}
export default TimeLineSection;