import React from "react";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & About  */}
            <div>
              <div className="flex justify-center items-center gap-3">
                <div className="p-1 bg-gray-50 rounded-full relative right-8 -top-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.ibb.co/ccGK5VxL/icon.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-2xl relative right-8 font-bold mb-4">
                  {" "}
                  Roommate.Finder
                </h2>
              </div>
              <p className="text-gray-400">
                "A Roommate Finder Website is a platform that connects users
                with compatible roommates based on shared preferences, helping
                them find safe, affordable, and suitable living arrangements."
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/termsCondition"
                    className="hover:text-indigo-400 transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacyPolicy"
                    className="hover:text-indigo-400 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-indigo-400 transition"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li>
                  <a href="/faq" className="hover:text-indigo-400 transition">
                    FAQs
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <ul className=" px-1 fontMulish text-xl font-bold flex justify-center items-center gap-8 py-3">
                  <li>
                    <NavLink
                      className="text-gray-200"
                      to="https://www.facebook.com/"
                      target="_blank"
                    >
                      <FaFacebook size={35} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="text-gray-200"
                      to="https://github.com/MdNurulIslam99"
                      target="_blank"
                    >
                      <FaGithub size={35} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="text-gray-200"
                      to="https://x.com/"
                      target="_blank"
                    >
                      <FaXTwitter size={35} />
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="text-gray-200"
                      to="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <FaLinkedin size={35} />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-700" />

          <p className="text-center text-gray-500 text-base">
            &copy; 2025 Roommate.Finder Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
