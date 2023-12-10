import WorkingProcess from "./(components)/workingProcess/workingProcess";
import About from "./about/page";
import Blog from "./blog/page";
import Price from "./price/page";
import Team from "./team/page";

export default function Home() {
  return (
    <>
      <div className="completeWeb">
        <About />
        <Team />
        <WorkingProcess/>
        <Price />
        <Blog />
      </div>
    </>
  );
}
