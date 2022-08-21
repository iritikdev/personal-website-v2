import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter}  rounded-sm bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-sm px-6 py-4`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Checkout Projects</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
    </div>
  </div>
);

export default GetStarted;