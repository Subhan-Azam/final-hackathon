import React from "react";

export default function WorkingProcessCard(props) {
  return (
    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-600 text-white mb-5 flex-shrink-0">
        <h1 className="text-4xl font-bold">{props.workingNum}</h1>
      </div>

      <div class="flex-grow">
        <h2 class="text-gray-900 text-2xl title-font font-medium mb-3">
          {props.workingHeading}
        </h2>
        <p class="leading-relaxed text-base">
          {props.workingText}
        </p>
      </div>
    </div>
  );
}
