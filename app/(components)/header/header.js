import Link from "next/link";
import Navbar from "../navbar/navbar";
import "./header.css";


export default function Header() {
  
  return (
    <>
      <div className="headerBg">
        <Navbar />
        <section className="body-font lg:mx-20 xl:mt-14 mt-10 text-white py-8">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="typing-animation title-font text-5xl mb-4 font-medium">
                <h1 className="max-w-[800px] w-auto">
                  We Are Committed To Your Health
                </h1>
              </div>
              <p className="mb-8 leading-relaxed max-w-2xl">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

                <button className="headerDashboard">
                  <Link href="/admin"> Dashboard</Link>
                </button>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
