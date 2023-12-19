import Image from "next/image";
import Button from "../(components)/button/button";
import CoursesCard from "../(components)/coursesCard/coursesCard";
import VerifyPage from "../(components)/verifyPage/verifyPage";
import AboutServices from "./(components)/aboutServices";

export default function About() {
  return (
    <>
      {/* <section id="about" class="text-gray-600 body-font mt-20">
        <div class="container mx-auto flex px-5 pb-24 pt-12 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/assets/header-Doctor.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div class="pr-24 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <VerifyPage verifyPage={"About Us"} />
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Great Place Of Medical Hospital Center
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quas autem hic aperiam molestiae voluptatem error
              ullam sint, quibusdam recusandae sed! Tenetur voluptatibus
              nostrum, ad inventore eveniet aliquam repudiandae expedita.
            </p>

            <div className="flex flex-wrap mb-6">
              <AboutServices title="Ambulance Services" />
              <AboutServices title="Oxygen On Wheel" />
              <AboutServices title="Pharmacy On Clinic" />
              <AboutServices title="On Duty Doctor" />
              <AboutServices title="24/7 Medical Emergency" />
            </div>

            <div class="flex justify-center">
              <Button btnText="Read More" />
            </div>
          </div>
        </div>
      </section> */}

      <section class="text-gray-400  body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              src="/assets/header-Doctor.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <VerifyPage verifyPage={"About Us"} />
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The Great Place Of Medical
              <br class="hidden lg:inline-block" />
              Hospital Center
            </h1>

            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quas autem hic aperiam molestiae voluptatem error
              ullam sint, quibusdam recusandae sed! Tenetur voluptatibus
              nostrum, ad inventore eveniet aliquam.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start mb-6">
              <AboutServices title="Ambulance Services" />
              <AboutServices title="Oxygen On Wheel" />
              <AboutServices title="Pharmacy On Clinic" />
              <AboutServices title="On Duty Doctor" />
              <AboutServices title="24/7 Medical Emergency" />
            </div>
            <div class="flex justify-center">
              <div class="flex justify-center">
                <Button btnText="Read More" />
              </div>
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
