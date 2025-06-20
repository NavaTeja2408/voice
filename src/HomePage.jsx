import React, { useEffect, useRef, useState } from "react";
import home_2 from "./assets/home_2.png";
import home_10 from "./assets/home_10.PNG";
import TypingText from "./TypingText";
import { motion, useInView } from "framer-motion";
import FadeOnScroll from "./FadeOnScroll";
import InViewOpacitySlide from "./InViewOpacitySlide";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import "./index.css";
import toast from "react-hot-toast";

const HomePage = () => {
  const myDivRef = useRef(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbc344f5-7af9-4a00-b25f-62c47ad536df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleScroll = () => {
    myDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref1 = useRef();
  // Detect when at least 50% of the element is in view
  // useInView will re-trigger every time visibility crosses threshold
  const isInView = useInView(ref1, {
    threshold: 0.5, // 50% visibility
    triggerOnce: false, // change to true if you want it only once
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const text2 = `We provide end to end AI customer support services not just tools. Our team builds and manages intelligent AI agents that handle customer calls, messages, scheduling, and data capture 24/7. With a one-time setup starting at $349 and per interaction pricing between $0.60 to $1.20, our solution helps businesses reduce costs, respond faster, and scale effortlessly all without hiring extra staff.`;
  const text = `Hi, this is Navateja Pendiala from voiceIQ.ai. We offer AI agents that help small businesses like yours handle customer calls, bookings, and messages 24/7. It saves time and keeps your customers happy even outside working hours. Setup starts at $349, and each interaction costs just $0.60 to $1.20. Can I send you a quick demo?`;
  return (
    <div className="bg-black be-vietnam-pro-regular ">
      <FadeOnScroll
        className={
          "relative min-h-screen w-full flex flex-col items-start justify-start px-20 pt-32 be-vietnam-pro-regula part_1 "
        }
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-5xl text-white"
        >
          {" "}
          LET'S CONNECT WITH{" "}
          <span className="text-7xl text-green-600 font-semibold part_2">
            voice<span className="text-yellow-400 text-8xl part_3">IQ</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-gray-200 text-center text-xs part_4"
        >
          We create AI agents for customor support start at just 349$
        </motion.p>
        <div className="w-[70%] flex items-center justify-between mt-14 gap-6 part_5 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[48%] border border-green-700 rounded-md h-[300px]"
          >
            <TypingText text={text} className="text-gray-200" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[48%] border border-yellow-400 rounded-md h-[300px]"
          >
            <TypingText text={text2} className="text-gray-200" />
          </motion.div>
        </div>
        <div className="w-[70%] flex items-center justify-start mt-14 ">
          <motion.button
            onClick={handleScroll}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="bg-green-700 flex w-[30%] items-center justify-center py-2 rounded-lg text-white hover:bg-green-800 cursor-pointer part_6 "
          >
            Contact Us
          </motion.button>
        </div>
      </FadeOnScroll>
      <InViewOpacitySlide className="relative min-h-screen w-full be-vietnam-pro-regular">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${home_10})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-start justify-start px-44 pt-28 h-full part_7 ">
          <h1 className=" text-white absolute top-8 left-8 ">
            <span className="text-4xl text-green-700 font-semibold part_8">
              voice<span className="text-yellow-400 text-5xl part_9">IQ</span>
            </span>
          </h1>
          {/* <p className="text-gray-200 text-center text-xs mt-2">
            We create AI agents for customer support starting at just $349
          </p> */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-5xl text-white mt-5 py-3 px-2 w-[80%] border-b-4 border-white part_10"
          >
            What we provide?
          </motion.h1>
          <div className="w-[80%] flex items-center justify-between mt-14 part_11">
            <div
              //   style={{
              //     backgroundColor: "rgba(160, 51, 233, 1)",
              //   }}
              className="w-[30%] h-[45vh]  px-4 py-6 text-gray-100  rounded-md  bg-violet-600 flex flex-col gap-3"
            >
              <h1 className="text-2xl">Our Service</h1>
              <ul className=" list-disc pl-4 text-sm w-full ">
                <li className="mt-2">
                  AI-powered customer service agents tailored to your needs
                </li>
                <li className="mt-2">
                  Efficient handling and management of customer data
                </li>
                <li className="mt-2">
                  Smart scheduling solutions to optimize time management
                </li>
                <li className="mt-2">
                  Advanced concurrency management for seamless customer
                  interactions
                </li>
              </ul>
            </div>
            <div
              //   style={{
              //     backgroundColor: "rgba(0, 118, 228, 1)",
              //   }}
              className="w-[30%] h-[45vh] px-4 py-6 text-gray-100  rounded-md bg-sky-600 flex flex-col gap-3  "
            >
              <h1 className="text-2xl">Our Pricing</h1>
              <ul className=" list-disc pl-4 text-sm w-full ">
                <li className="mt-2">Setup Fee: One-time starting at $349</li>
                <li className="mt-2">Per Call: $0.60–$1.20 per interaction</li>
                <li className="mt-2">
                  Follow-Ups Included in the per-call price
                </li>
                <li className="mt-2">
                  No Monthly Fee: Pay only for what you use
                </li>
              </ul>
            </div>
            <div
              //   style={{
              //     backgroundColor: "rgba(255, 66, 97, 1)",
              //   }}
              className="w-[30%] h-[45vh] text-gray-100 px-4 py-6  rounded-md  bg-teal-600  flex flex-col gap-3 "
            >
              <h1 className="text-2xl">Our Workflow</h1>
              <ul className=" list-disc pl-4 text-sm w-full ">
                <li className="mt-2">
                  Discovery: Understand your support needs
                </li>
                <li className="mt-2">Setup: Build and configure AI agents</li>
                <li className="mt-2">Integration: Connect to your platforms</li>
                <li className="mt-2">
                  Optimization: Improve with real-time feedback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </InViewOpacitySlide>

      <InViewOpacitySlide className="relative h-screen w-full be-vietnam-pro-regular">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${home_10})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Content Layer */}
        <div
          ref={myDivRef}
          className="relative z-10 flex flex-col items-start justify-start px-24 pt-28 h-full part_12"
        >
          <h1 className=" text-white absolute top-8 left-8">
            <span className="text-4xl text-green-700 font-semibold part_8">
              voice<span className="text-yellow-400 text-5xl part_9">IQ</span>
            </span>
          </h1>
          {/* <p className="text-gray-200 text-center text-xs mt-2">
            We create AI agents for customer support starting at just $349
          </p> */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-5xl text-white mt-5 py-3 px-2 w-[55%] border-b-4 border-white part_13"
          >
            Contact us
          </motion.h1>
          <form
            onSubmit={onSubmit}
            className="w-[50%] flex flex-col items-start justify-between mt-14 rounded-md gap-10 part_14"
          >
            <div className="w-full flex gap-10">
              <input
                type="text"
                name="first name"
                className="w-[50%] py-2 px-2 bg-gray-200 rounded-md outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                name="last name"
                className="w-[50%] py-2 px-2 bg-gray-200 rounded-md outline-none"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              name="email"
              className="w-[70%] py-2 px-2 bg-gray-200 rounded-md outline-none"
              placeholder="Email Addres"
            />
            <input
              type="text"
              name="phone no"
              className="w-[70%] py-2 px-2 bg-gray-200 rounded-md outline-none"
              placeholder="Phone Number"
            />
            <textarea
              type="text"
              name="message"
              className="w-[100%] py-2 px-2 h-[12vh] bg-gray-200 rounded-md outline-none"
              placeholder="Message"
            />
            <div className="w-[70%] flex items-center justify-start  ">
              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-green-700 flex w-[30%] items-center justify-center py-2 rounded-lg text-white hover:bg-green-800 cursor-pointer "
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </InViewOpacitySlide>
      <InViewOpacitySlide className="relative h-screen w-full be-vietnam-pro-regular">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${home_10})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Content Layer */}
        <div className="relative w-full z-10 flex flex-col items-start justify-start px-24 pt-28 h-full part_7">
          <h1 className=" text-white absolute top-8 left-8 ">
            <span className="text-4xl text-green-700 font-semibold part_8">
              voice<span className="text-yellow-400 text-5xl part_9">IQ</span>
            </span>
          </h1>
          {/* <p className="text-gray-200 text-center text-xs mt-2">
            We create AI agents for customer support starting at just $349
          </p> */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-5xl text-white mt-5 py-3 px-2 w-[90%] border-b-4 border-white part_13"
          >
            About us
          </motion.h1>
          <div className="w-[90%] flex items-center justify-between mt-14 part_16">
            <div
              //   style={{
              //     backgroundColor: "rgba(160, 51, 233, 1)",
              //   }}
              className="w-[100%] h-fit  px-4 py-6 text-gray-100  rounded-md  bg-yellow-600 flex flex-col gap-3 "
            >
              <p>
                Founded on June 13, 2025, our company is driven by a passion for
                innovation in AI-powered customer service solutions. We
                specialize in building intelligent virtual agents that enhance
                user experiences, streamline operations, and optimize customer
                engagement across industries.
              </p>
              <p>
                Our offerings include advanced AI agents for customer support,
                secure and efficient data handling, smart scheduling tools to
                manage client interactions, and robust concurrency management
                systems to ensure smooth, simultaneous operations.
              </p>
              <p className="part_17">
                At the core of our company is a dynamic leadership team
                committed to shaping the future of AI:
              </p>
              <ul className=" list-disc pl-6">
                <li className="mt-2 ">
                  Pendiala Navateja – Chief Executive Officer (CEO)
                </li>
                <li className="mt-2">
                  Kavali Sairam – Chief Technology Officer (CTO)
                </li>
                <li className="mt-2">
                  Ambati Shyam Raj – Chief Operating Officer (COO)
                </li>
              </ul>
              <p>
                Together, we’re reimagining how businesses connect with their
                customers—smarter, faster, and more human than ever before.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-[100vw]  bg-black">
            <div className=" text-white  h-20 flex items-center justify-center gap-12 w-full part_18  ">
              <p className="pl-4">management@voiceiqtech.com</p>
              <p>+91 9390576853</p>
              <p className="pr-4">voiceIQ.ai</p>
            </div>
            <div className="w-full flex items-center justify-center pb-4 text-white">
              <p className="text-sm text-gray-300">
                @2025 Copyright belongs to voiceIQ.ai
              </p>
            </div>
          </div>
        </div>
      </InViewOpacitySlide>
    </div>
  );
};

export default HomePage;
