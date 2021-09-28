import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export const Countdown = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const interval = setInterval(function () {
      if (ref.current) ref.current.innerHTML = getRemainingDuration();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.countdown}>
      <TimeIcon /> <span ref={ref}> </span>{" "}
    </div>
  );
};

function getRemainingDuration() {
  const now = new Date().getTime();
  const countDownDate = new Date("Oct 25, 2021 17:30:00").getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

function TimeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15A7 7 0 108 1a7 7 0 000 14zM8 8V5.5M8 8l3.125 3.125"
        stroke="#FEFEFE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
