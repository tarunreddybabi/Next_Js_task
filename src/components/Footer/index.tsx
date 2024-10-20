import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa"; 

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between mt-7 text-textSoft p-4 bg-gray-800">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <div className="text-base mt-2 text-center">
          Your trusted partner for insights and analysis. We aim to empower your decision-making with reliable data.
        </div>
      </div>

      <div className="flex justify-between space-x-4 mt-2 text-base">
        <a href="" className="hover:underline">About Us</a>
        <a href="" className="hover:underline">Contact</a>
        <a href="" className="hover:underline">Privacy Policy</a>
        <a href="" className="hover:underline">Terms of Service</a>
        <a href="" className="hover:underline">Blog</a> 
      </div>

      <div className="flex space-x-4 mt-2 ">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white hover:text-blue-600" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-pink-500" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-blue-700" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white hover:text-red-600" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400" />
        </a>
      </div>
      <div className="text-base mt-2">© All rights reserved.</div>

    </div>
  );
}
