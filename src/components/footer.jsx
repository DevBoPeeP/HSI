import React from "react";
import { LiaSchoolSolid } from "react-icons/lia";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">
            {" "}
            <LiaSchoolSolid />
            HSIM
          </h2>
          <p className="text-white mt-2">
            Information management made easy, efficient, and effective.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-2 space-y-2 text-white">
            <li>
              <a href="#">Content</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold">Community</h3>
          <ul className="mt-2 space-y-2 text-white">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Suggestions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletters</a>
            </li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-lg font-semibold">Partner</h3>
          <ul className="mt-2 space-y-2 text-white">
            <li>
              <a href="#">Our Partner</a>
            </li>
            <li>
              <a href="#">Become a Partner</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="mt-8 text-center border-t border-gray-700 pt-6">
        <p className="text-white">© 2025 DevBo. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-gray-400">
            <SlSocialInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <SlSocialFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <SlSocialTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <SlSocialLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
