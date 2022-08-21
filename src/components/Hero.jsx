import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-roboto text-white ml-2 xs:text-[16px]`}>
            <span className="text-white">{"Hi"}</span> My name is...
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[45px] xs:text-[50px] ss:text-[72px] text-white ss:leading-[80px] leading-[70px] mt-3 ">
            Ritik Sharma. <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[65px] mt-3">
          <span className="text-gradient">I build things for the web.</span>
        </h1>

        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          I’m a{" "}
          <span className="text-gradient font-medium">
            Computer Science undergrad student
          </span>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible,
          human-centered products at{" "}
          <span className="text-gradient font-medium">LNJPIT</span>.
        </p>
        <div className="mt-10">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
