const defaultProps = {
  artist: null,
  duration: null,
  streamUrl: null,
  postUrl: null,
  title: null
};

/**
 * PlayerItem interface.
 *
 * @export
 * @param {object} {
 *   artist,
 *   duration,
 *   postUrl,
 *   streamUrl,
 *   title
 * }
 * @returns {object}
 */
export default function PlayerItem(props) {
  return { ...defaultProps, ...props };
}