import React from "react";
import AnalysisImg from "../../assets/analysis.png"; 
import RecordImg from "../../assets/record.png";   // For Step 2: First-Time Signup
import KeyImg from "../../assets/key.png";         // For Step 3: Choose & Activate Plan
import CardImg from "../../assets/card.png";       // For Step 4: Make Your First Payment
import PurseImg from "../../assets/purse.png";     // For Step 5: Track and Manage
import CartImg from "../../assets/cart.png";   
import Download from "../../assets/download.png";
import register from "../../assets/register.jpg";


export const testimonials = [
  {
    quote:
      "Saved ₹2000 on crackers last year! Easy payments and fast delivery.",
    name: "Ravi Kumar, Chennai",
  },
  {
    quote: "The bonus months made all the difference. Highly recommend!",
    name: "Priya S, Coimbatore",
  },
  {
    quote: "Professional service from start to finish. Diwali was explosive!",
    name: "Arun M, Madurai",
  },
];

export const steps = [
  {
    stepNumber: 1,
    heading: "View Plans & Download App",
    description:
      "Customer can see all available plans, due amounts, and bonus amounts directly on this page. To proceed, click the 'Download APK Now' button to install our mobile application.",
    imageSrc: Download,
    imageAlt: "download_app",
    imageClass: "howchoose",
    position: "right",
  },
  {
    stepNumber: 2,
    heading: "First-Time Signup",
    description:
      "New users must complete a one-time signup process. Provide basic information like your name, mobile number, and address to create your secure account.",
    imageSrc: register, 
    imageAlt: "signup",
    imageClass: "howsubmit",
    position: "left",
  },
  {
    stepNumber: 3,
    heading: "Choose & Activate Your Plan",
    description:
      "Once signed up and logged in, you can select the desired fund plan directly within the app.",
    imageSrc: KeyImg, 
    imageAlt: "choose_plan",
    imageClass: "howlogin",
    position: "right",
  },
  {
    stepNumber: 4,
    heading: "Make Your First Payment",
    description:
      "You can choose to pay the due amount using UPI, Bank Transfer, or any other convenient payment option available inside the application to start your scheme.",
    imageSrc: CardImg, // ⬅️ Changed to local variable
    imageAlt: "payment",
    imageClass: "howpay",
    position: "left",
  },
  {
    stepNumber: 5,
    heading: "Track and Manage",
    description:
      "Track your monthly payments, view your accumulated bonus, and manage your plan status seamlessly through the app dashboard.",
    imageSrc: PurseImg, // ⬅️ Changed to local variable
    imageAlt: "track_wallet",
    imageClass: "howamount",
    position: "right",
  },
  {
    stepNumber: 6,
    heading: "Enjoy Your Diwali Crackers!",
    description:
      "At the end of the scheme, use your accumulated funds and bonus to purchase your favorite crackers for a joyous Diwali celebration!",
    imageSrc: CartImg, // ⬅️ Changed to local variable
    imageAlt: "purchase_crackers",
    imageClass: "howenjoy",
    position: "left",
  },
];