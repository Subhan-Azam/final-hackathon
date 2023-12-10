import About from "./about/page";
import Blog from "./blog/page";
import Portfolio from "./portfolio/page";
import Price from "./price/page";
import Services from "./servicess/page";
import Team from "./team/page";

export default function Home() {
  return (
    <>
      <div className="completeWeb">
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Price />
        <Blog />
      </div>
    </>
  );
}
