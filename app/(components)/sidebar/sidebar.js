import "./sidebar.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="pt-6 h-screen max-w-[275px] w-screen bg-slate-300 border-r-2 border-gray-400 shadow-xl">
        <Link href="/">
          <div className="pl-5">
            <div className="sidebar_links">
              <FontAwesomeIcon
                className="mr-2"
                icon={faHouseChimney}
                width={28}
              />
              <p className="font-semibold">Go To Home</p>
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
}
