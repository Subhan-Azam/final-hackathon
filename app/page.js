import Header from "./(components)/header/header";
import About from "./about/page";
import Team from "./team/page";
import WorkingProcess from "./(components)/workingProcess/workingProcess";
import Price from "./price/page";
import Blog from "./blog/page";
import Footer from "./(components)/footer/footer";

export default function Home() {
  return (
    <>
      <div className="completeWeb">
        <Header/>
        <About />
        <Team />
        <WorkingProcess/>
        <Price />
        <Blog />
        <Footer />
        
      </div>
    </>
  );
}
