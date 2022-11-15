import video from "../../assets/video/test.mp4";
import "./Landing.css";
import usePrefersReducedMotion from "../../hooks/prefersReducedMotion";
import getWindowDimensions from "../../hooks/getWindowDimensions";

function Landing(props) {
  // Set styles based on screen dimensions
  const { height, width } = getWindowDimensions();

  const landingClasses = ["landing"];

  const videoContainerClasses = ["video"];
  const videoClasses = [];
  let [videoAutoPlay, videoMuted, videoLoop, videoControls] = [!usePrefersReducedMotion(), true, true, false];

  console.log({ videoAutoPlay, videoMuted, videoLoop });

  const videoInterfaceClasses = ["video-overlay"];

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
      videoContainerClasses.push("fg");
      videoClasses.push("fg")
      videoAutoPlay = false;
      videoControls = true;
    } else {
      textClasses = ["overlay-container"];
      textInnerClasses = ["overlay"];
      videoContainerClasses.push("bg");
      videoClasses.push("bg")
      videoInterfaceClasses.push("hidden");
    }

    // Small screens
    if (width < 800) {
    } else {
    }
  }

  return (
    <section id="landing" className={landingClasses.join(" ")}>
      <div className={videoContainerClasses.join(" ")}>
        <video
          autoPlay={videoAutoPlay}
          muted={videoMuted}
          loop={videoLoop}
          controls={videoControls}
          className={videoClasses.join(" ")}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className={textClasses.join(" ")}>
        <div className={textInnerClasses.join(" ")}>{props.children}</div>
      </div>
    </section>
  );
}

export default Landing;
