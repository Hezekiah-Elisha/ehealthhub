import { Link } from "react-router-dom";
// import { MagnifyingGlassIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={`font-poppins bg-blue-950 text-green-700 p-4 text-xl font-bold flex flex-row justify-between w-full align-baseline ${isScrolled ? "fixed top-0" : ""}`}>
      <Link to="/" className="hover:underline text-4xl">
        eHealthHub
      </Link>
      <div className="block lg:hidden">
        {/* <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3BottomRightIcon className="h-6 w-6 text-white" />}
        </button> */}
      </div>
      <div className={`flex lg:flex-col font-poppins flex-row justify-between w-1/2 ${isOpen ? "block" : "hidden"}`}>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
