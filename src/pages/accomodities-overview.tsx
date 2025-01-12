import FirstRow from "@/components/dashboard/first_row";
import SecondRow from "@/components/dashboard/second_row";
import { FaHandPaper } from "react-icons/fa";
import './mainfile.css'

const AccomoditiesOverview = () => {

  return (
    <>
      <div className="m-5">
        <div className="user-welcome pb-4">
          <span className="text" >{"Welcome John"}</span><FaHandPaper className="ps-1" color="#fa9d0c" size={20} /> 
        </div>
        <div className="mb-4">
          <FirstRow />
        </div>
        <div className="mt-4">
          <SecondRow />
        </div>
      </div>
    </>
  )
};

export default AccomoditiesOverview;
