import VerifyPage from "../(components)/verifyPage/verifyPage";
import PortfolioCard from "./(components)/portfolioCard/portfolioCard";

// import img1 from "../../public/img/istockphoto-1370431940-170667a";
// import img2 from "../../public/img/istockphoto-1414489347-170667a";
// import img3 from "../../public/img/photo-1449824913935-59a10b8d2000";
// import img4 from "../../public/img/photo-1477959858617-67f85cf4f1df";
// import img5 from "../../public/img/photo-1480714378408-67cf0d13bc1b";
// import img6 from "../../public/img/woman-3040029_1280";

export default function Portfolio() {
  return (
    <>
      <div className="my-14">
        <div className="mb-6 max-w-[930px] m-auto">
          <VerifyPage verifyPage={"Portfolio Page"} />
          <h1 className="flex text-3xl font-bold">
            TAKE A LOOK AT OUR LATEST WORK
          </h1>
        </div>
        <div className="flex justify-center m-auto flex-wrap max-w-[1000px]">
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img1} /> */}
          </div>
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img2} /> */}
          </div>
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img3} /> */}
          </div>
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img4} /> */}
          </div>
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img5} /> */}
          </div>
          <div className="mx-4 my-5">
            {/* <PortfolioCard src={img6} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
