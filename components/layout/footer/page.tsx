import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "@/components/container/page";
import { Footer } from "@/types";
import Link from "next/link";

export default function page() {
  return (
    <footer className="bg-gray-100">
      <div className="pt-10 pb-20 relative ">
        <Container>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="">
              <h3 className="text-xl mb-7 font-semibold">Get in Touch</h3>
              <p>
                Don’t miss any updates of our new templates and extensions.!
              </p>
              <form action="#" className="" method="post">
                <input
                  type="text"
                  name="EMAIL"
                  className="py-2 my-2 outline-none border-none pl-8 w-full"
                  placeholder="Email"
                />
                <button
                  className="w-full py-2 bg-blue-400 border-2 border-solid border-blue-500 text-white hover:bg-blue-300 "
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mb-3 ">
              <h3 className="text-xl mb-7 font-semibold">Download</h3>
              {Footer1.map((data: Footer) => (
                <ul key={data.id}  className="text-gray-500">
                  <li className=" mb-4">
                    <Link href={data.href}>{data.label}</Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="mb-3 ">
              <h3 className="text-xl mb-7 font-semibold">Download</h3>
              {Footer2.map((data: Footer) => (
                <ul key={data.id}  className="text-gray-500">
                  <li className=" mb-4">
                    <Link href={data.href}>{data.label}</Link>
                  </li>
                </ul>
              ))}
           
            </div>
            <div className="mb-3">
              <h3 className="text-xl mb-7 font-semibold">Team Solutions</h3>
              <div className="flex">
                <a
                  href="#"
                  className="fab fa-facebook w-11 h-11 text-lg rounded-full flex justify-center items-center bg-gray-200 transition-all ml-2"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="fab fa-facebook w-11 h-11 text-lg rounded-full flex justify-center items-center bg-gray-200 transition-all ml-2"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="fab fa-facebook w-11 h-11 text-lg rounded-full flex justify-center items-center bg-gray-200 transition-all ml-2"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <hr />
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="text-right">
              <p>
                Made with <i className="icon_heart"></i> in{" "}
                <a href="http://cakecounter.com" target="_blank">
                  CakeCounter
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

const Footer1: Footer[] = [
  { id: 0, label: "Home", href: "/" },
  { id: 1, label: "Company", href: "/" },
  { id: 2, label: "Android App", href: "/" },
  { id: 3, label: "os App", href: "/" },
  { id: 4, label: "Desktop", href: "/" },
  { id: 5, label: "Projects", href: "/" },
  { id: 6, label: "My tasks", href: "/" },
];
const Footer2: Footer[] = [
  { id: 0, label: "FAQ", href: "/" },
  { id: 1, label: "Term &amp; conditions", href: "/" },
  { id: 2, label: "Android App", href: "/" },
  { id: 3, label: "Reporting", href: "/" },
  { id: 4, label: "Documentation", href: "/" },
  { id: 5, label: "Support Policy", href: "/" },
  { id: 6, label: "Privacy", href: "/" },
];

