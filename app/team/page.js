import TeamCard from "./(components)/taemCard/teamCard";

import img1 from "../../public/assets/PNG Open Heart.jpg";
import img2 from "../../public/assets/images (4).jpg";
import img3 from "../../public/assets/images (5).jpg";
import VerifyPage from "../(components)/verifyPage/verifyPage";

export default function Services() {
  return (
    <>
      <div id="team" className="py-14 bg-blue-100">
        <div className="max-w-[1010px] m-auto mb-10">
          {/* <span className="flex justify-center text-lg text-blue-600">
            Our Services
          </span> */}
          <div className="flex justify-center">
            <VerifyPage verifyPage="Our Service" />
          </div>
          <h1 className="flex justify-center text-4xl font-bold">
            Our Medical Service
          </h1>
        </div>

        <div className="flex justify-center flex-wrap">
          <div className="mx-9">
            <TeamCard
              src={img1}
              heading={"Holler Heart Surgery"}
              skill={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio porro quam culpa"
              }
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={img2}
              heading={"Online Monitoring"}
              skill={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio porro quam culpa"
              }
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={img3}
              heading={"Holler Brain Surgery"}
              skill={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio porro quam culpa"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
