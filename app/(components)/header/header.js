'use client'
import Link from "next/link";
import Navbar from "../navbar/navbar";
import "./header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [text, setText] = useState("");
  const phrases = ["We Are Commited To Your Health      "];
  const speed = 100;
  const eraseDelay = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = speed;

    const type = () => {
      const currentPhrase = phrases[currentIndex];
      if (!isDeleting) {
        currentText = currentPhrase.substring(0, currentText.length + 1);
        setText(currentText);
        if (currentText === currentPhrase) {
          isDeleting = true;
          typingSpeed = speed;
        }
      } else {
        currentText = currentPhrase.substring(0, currentText.length - 1);
        setText(currentText);
        if (currentText === "") {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          typingSpeed = speed;
        }
      }
      setTimeout(type, typingSpeed);
    };

    setTimeout(type, speed);
  }, []);
  return (
    <>
      <div className="headerBg">
        <Navbar />
        <section className="body-font lg:mx-20 xl:mt-14 mt-10 text-white py-8">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              {/* <div className="typing-animation title-font text-5xl mb-4 font-medium">
                <h1 className="max-w-[800px] w-auto">
                  We Are Committed To Your Health
                </h1>
              </div> */}
              <div className="flex my-5 ">
                {/* <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl title-font mb-4 mr-3 font-bold">
                  I am
                </p> */}
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl title-font mb-4 text-blue-500 font-bold">
                  {text}
                </h2>
                <span className="cursor">&nbsp;</span>
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
