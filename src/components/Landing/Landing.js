import video from "../../assets/video/test.mp4";
import "./Landing.css";
import usePrefersReducedMotion from "../../hooks/prefersReducedMotion";
import getWindowDimensions from "../../hooks/getWindowDimensions";

function Landing(props) {
  // Set styles based on screen dimensions
  const { height, width } = getWindowDimensions();

  const landingClasses = ["landing"];

  const videoClasses = ["video"];
  const { videoAutoPlay, videoMuted, videoLoop } = {
    autoplay: usePrefersReducedMotion(),
    muted: false,
    loop: true,
  };

  let textClasses = ["text-container"];
  let textInnerClasses = ["text-inner"];

  // Conditional styles
  // Mobile
  if (width <= 320) {
  }
  // Desktop
  else {
    // Screen ratio is too large for video
    if (width / height > 4096 / 2160) {
      landingClasses.push("flex");
      videoClasses.push("fg");
    } else {
      textClasses = ["overlay-container"];
      textInnerClasses = ["overlay"];
      videoClasses.push("bg");
    }

    // Small screens
    if (width < 800) {
    } else {
    }
  }

  return (
    <section className={landingClasses.join(" ")}>
      {/* TODO don't play the video if prefers reduced motion */}
      <video autoPlay={videoAutoPlay} muted={videoMuted} loop={videoLoop} className={videoClasses.join(" ")}>
        <source src={video} type="video/mp4" />
      </video>

      <div className={textClasses.join(" ")}>
        <div className={textInnerClasses.join(" ")}>{props.children}</div>
      </div>
    </section>
  );
}

export default Landing;
