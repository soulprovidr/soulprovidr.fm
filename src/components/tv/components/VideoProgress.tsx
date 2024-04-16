import { TimeSlider } from "@vidstack/react";
import css from "./VideoProgress.module.scss";

export const VideoProgress = () => (
  <TimeSlider.Root className={css.slider}>
    <TimeSlider.Track className={css.track} />
    <TimeSlider.TrackFill className={css.trackFill} />
    <TimeSlider.Thumb className={css.thumb} />
  </TimeSlider.Root>
);
