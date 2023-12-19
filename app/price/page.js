import ClientPriceCard from "../(components)/clientPriceCard/clientPriceCard";
import PriceCard from "../(components)/pricesCard/priceCard";
import VerifyPage from "../(components)/verifyPage/verifyPage";
// import "./price.css";

export default function Price() {
  return (
    <>
      <div id="price" className="my-16">
        <div className="max-w-[980px] m-auto mb-5 px-5">
          <VerifyPage verifyPage={"Our Pricing"} />
        </div>
        <div className="max-w-[980px] px-5 m-auto mb-8 flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-3xl font-bold">
              CHOSE A PLAN THAT'S RIGHT FOR YOU
            </h1>
          </div>

          {/* <div className="toggleSwitch">
            <p>Monthly</p>
            <label class="switch mx-4">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p>Yearly</p>
          </div> */}
        </div>

        <div className="flex justify-center flex-wrap">
          <PriceCard
            heading={"Basic Plan"}
            coursePrice={"$50"}
          />

          <PriceCard
            heading={"Standard Plan"}
            coursePrice={"$99"}
          />

          <PriceCard
            heading={"Premium Plan"}
            coursePrice={"$150"}
          />
        </div>
      </div>

      <div className="bg-blue-600 py-14 px-5">
        <h1 className="text-white text-4xl font-bold flex justify-center pb-5">
          We're Trusted By Clients
        </h1>

        <div className="flex flex-wrap justify-center">
          <ClientPriceCard
            heading={"Mina Whatson"}
            profession={"CONSULTANT"}
          />

          <ClientPriceCard
            heading={"Edward Hunter"}
            profession={"IT SPECIALIST"}
          />
        </div>
      </div>
    </>
  );
}
