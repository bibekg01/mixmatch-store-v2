import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <>
      <div className="max-w-[1640px] mx-auto flex justify-evenly p-5 bg-[#064789] text-white">
          <div>
            <h1 className="text-xl pb-1 font-bold border-b-4 border-b-red-800 mb-2">Company</h1>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Privacy Policy</li>
              </ul>
          </div>
          <div>
                <div>
                    <h1 className="text-xl pb-1 font-bold border-b-4 border-b-red-800 mb-2">Get Help</h1>
                </div>
              <ul>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>

              </ul>
          </div>

          <div>
                <h1 className="text-xl pb-1 font-bold border-b-4 border-b-red-800 mb-2">Follow us</h1>
              <ul className="grid grid-cols-2 md:flex gap-2 text-2xl mt-4">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaXTwitter /></li>
                <li><FaLinkedin /></li>
              </ul>

          </div>
      </div>

      </>
    )
  }
  
  export default Footer;