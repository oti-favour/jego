import { motion, MotionValue } from "framer-motion";
import "./progress.css";

function ProgressIndicator({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
}

export default ProgressIndicator;
