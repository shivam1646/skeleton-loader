import { PropTypes } from "prop-types";

import "./skeleton.css";

function Skeleton({
  children,
  loading,
  animation,
  type,
  height,
  width,
  classes,
  color,
  waveColor,
  rows = 1,
  inline,
}) {
  const getClasses = () => {
    let className = `skeleton-loader`;
    if (classes) className += ` ${classes}`;
    return type && !children ? `${className} ${type}` : className; // infers shape if children are provided
  };

  const getStyles = () => {
    return {
      ...(color && {
        "--base-color": color,
      }),
      ...(waveColor && {
        "--wave-color": waveColor,
      }),
      ...(inline && {
        "--display": "inline-block",
        transform: "scale(0.95, 0.9)",
      }),
      ...((type === "circle" || type === "square") && {
        transform: "scale(0.9, 0.9)",
        ...(type === "circle" && {
          borderRadius: "50%",
        }),
      }),
      ...(children &&
        !height && {
          height: "auto", // adapts to children if no dimensions are specified
        }),
      ...(children &&
        !width && {
          maxWidth: "fit-content", // adapts to children if no dimensions are specified
        }),
      ...(animation === "wave" && {
        "--psuedo-el-display": "block",
      }),
      ...(animation === "pulse" && {
        animation: "pulse 1.5s ease-in-out 0.5s infinite",
      }),
    };
  };
  const elements = Array.from({ length: Math.floor(rows) }, (_, i) => i).map(
    (idx) => (
      <span
        className={getClasses()}
        style={{ width, height, ...getStyles() }}
        key={idx}
        aria-busy={!!animation} // indicates that the actual element is being loaded
      >
        {/* space adds default height if no children exists */}
        {children || <>&nbsp;</>}
      </span>
    )
  );

  let returnNode = elements;
  if (children && !loading) returnNode = children;

  return returnNode;
}

Skeleton.propTypes = {
  animation: PropTypes.oneOf(["pulse", "wave", false]),
  loading: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(["circle", "text", "square"]),
  height: PropTypes.string,
  width: PropTypes.string,
  classes: PropTypes.string,
  rows: PropTypes.number,
  inline: PropTypes.bool,
  color: PropTypes.string,
  waveColor: PropTypes.string,
};

export default Skeleton;
