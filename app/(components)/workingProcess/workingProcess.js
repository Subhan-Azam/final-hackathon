import React from "react";
import WorkingProcessCard from "../workingProcessCard/workingProcessCard";
import VerifyPage from "../verifyPage/verifyPage";

export default function WorkingProcess(props) {
  return (
    <section class="text-gray-600 body-font bg-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <VerifyPage verifyPage="How We Work" />
          <h1 class="sm:text-3xl mt-5 text-2xl font-medium title-font text-gray-900 mb-4">
            Our Working Process
          </h1>

        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <WorkingProcessCard
            workingNum="01"
            workingHeading="Fill The Form"
            workingText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates modi ab debitis distinctio ipsa sunt praesentium et quis vero, optio."
          />
          <WorkingProcessCard
            workingNum="02"
            workingHeading="Book An Appointment"
            workingText="Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard."
          />
          <WorkingProcessCard
            workingNum="03"
            workingHeading="Check-Ups"
            workingText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates modi ab debitis distinctio ipsa sunt praesentium et quis vero, optio"
          />
        </div>
      </div>
    </section>
  );
}
