import Skeleton from "../components/Skeleton";
import "./styles.css";

function Animations() {
  return (
    <>
      <h2>Animations</h2>
      <p>
        The component supports 2 types of animations <strong>Pulse</strong>,{" "}
        <strong>Wave</strong>. Animation is turned off by default. Use the{" "}
        <strong>animation</strong> prop to change the animation.
      </p>
      <p>
        Also you can use the <strong>rows</strong> prop to load multiple
        skeleton components of same type. The <strong>pulse</strong> example
        below is using rows prop with value of <strong>3</strong>.
      </p>
      <div className="example">
        <h3>Pulse</h3>
        <Skeleton rows={3} width="60%" animation="pulse" />
        <h3>Wave</h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Skeleton type="circle" inline={true} animation="wave" />
          <div>
            <Skeleton rows={2} animation="wave" width="100px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Animations;
