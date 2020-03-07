import { getQualifiedStreamUrl } from '../helpers';

const defaultProps = {
  artist: null,
  duration: null,
  streamUrl: null,
  postSlug: null,
  title: null
};

/**
 * PlayerItem interface.
 *
 * @export
 * @param {object} {
 *   artist,
 *   duration,
 *   postSlug,
 *   streamUrl,
 *   title
 * }
 * @returns {object}
 */
export default function PlayerItem(props) {
  const { artist, duration, postSlug, streamUrl, title } = props;
  return {
    ...defaultProps,
    artist,
    duration,
    postSlug,
    streamUrl: getQualifiedStreamUrl(streamUrl),
    title
  };
}