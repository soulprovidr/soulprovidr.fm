function generateIdentifier() {
  return Math.random().toString(36).substring(7);
}

/**
 * Spotify-like marquee library.
 * If the provided node has hidden overflow content, scroll the hidden content into view.
 * If the provided node's content fits without overflow, don't do anything.
 * @param {HTMLElement} $node Marquee container element.
 * @param {Object} params { duration, gradientColor, gradientWidth }
 * @returns {Function} Cleanup function. Use this to remove marquee styles and elements.
 */
export function Marquee($node, params) {
  // Validate $node parameter.
  if (!$node || $node.children.length !== 1) {
    throw new Error("[Marquee] Invalid element.");
  }

  // Plugin parameters.
  const {
    duration = 20,
    gradientColor = "white",
    gradientWidth = 30,
  } = params || {};

  const _$childNode = $node.children[0];
  let _keyframesName = null;
  let _nodeClassName = null;
  let _stylesheet = null;

  const containerWidth = $node.clientWidth;
  const childScrollWidth = _$childNode.scrollWidth;

  /**
   * Add styles to container + child. Insert marquee keyframes into the document.
   * @param {Number} scrollDistance Distance the marquee effect should scroll the container's child.
   * @returns {Function} Teardown function.
   */
  function createAnimation(scrollDistance) {
    _keyframesName = generateIdentifier();
    _nodeClassName = generateIdentifier();
    _stylesheet = document.createElement("style");
    _stylesheet.textContent = `
        .${_nodeClassName} {
          position: relative;
        }
        .${_nodeClassName}::after {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: ${gradientWidth}px;
          transition: background 200ms ease-in-out;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, ${gradientColor} 20%, ${gradientColor} 100%);
          content: ' ';
        }
        @keyframes ${_keyframesName} {
          10% {
            transform: translateX(0);
          }
          40%,
          60% {
            transform: translateX(-${scrollDistance + gradientWidth}px);
          }
          90%{
            transform: translateX(0);
          }
        }
      `;
    document.head.appendChild(_stylesheet);
    $node.classList.add(_nodeClassName);
    _$childNode.style.animation = `${_keyframesName} ${duration}s linear 3s infinite alternate`;
  }

  function cleanup() {
    $node.classList.remove(_nodeClassName);
    document.head.removeChild(_stylesheet);
    _stylesheet = null;
  }

  // If child content extends beyond container, we need to add marquee styles.
  if (childScrollWidth > containerWidth) {
    createAnimation(childScrollWidth - containerWidth);
    // Return a cleanup function.
    return cleanup;
  } else {
    return () => false;
  }
}
