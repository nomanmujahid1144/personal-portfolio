import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import { SiUpwork, SiFiverr   } from "react-icons/si";
// import { TbBrandFiverr } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
// import Fiverr from '../assets/images/icon/fiverr.svg'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Noman Mujahid. All Rights Reserved.`,
  author: {
    name: "Noman Mujahid",
    accounts: [
      {
        url: "https://github.com/nomanmujahid1144",
        label: "Github Account Noman Mujahid",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/noman-mujahid-783616211",
        label: "LinkedIn Account Noman Mujahid",
        type: "linkedin",
        icon: <FaLinkedin />
      },
     
      {
        url: "mailto:hi@nomanmujahid.com",
        label: "Mail Noman Mujahid",
        type: "gray",
        icon: <FiMail />
      },
      {
        url: " https://wa.me/923047204200",
        label: "whatsApp Noman Mujahid",
        type: "gray",
        icon: <FaWhatsapp />
      },
      {
        url: "https://www.upwork.com/freelancers/~0166f17c3a83ff820e?viewMode=1",
        label: "Upwork Noman Mujahid",
        type: "gray",
        icon: <SiUpwork />
      },
      {
        url: "https://www.fiverr.com/nomanmujahid",
        label: "Fiver Noman Mujahid",
        type: "gray",
        icon: <SiFiverr />
      }
    ]
  }
};

export default siteConfig;
