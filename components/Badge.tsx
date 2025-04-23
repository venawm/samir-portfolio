"use client";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string;
  icon: React.ReactNode;
  endCountNum: number;
  endCountText: string;
  badgeText: string;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-2xl text-primary">{icon}</div>
      <div className=" flex items-center gap-x-2">
        <div className=" text-4xl leading-none font-bold">
          <CountUp end={endCountNum} delay={1} />
          {endCountText}
        </div>
        <div className="max-w-[10 0px] leading-none text-[15px] font-medium text-sm">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
