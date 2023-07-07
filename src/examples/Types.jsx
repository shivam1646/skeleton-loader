import Skeleton from "../components/Skeleton";
import "./styles.css";

function Types() {
  return (
    <>
      <h2>Shapes</h2>
      <p>
        The component supports 3 shapes <strong>Text</strong>,{" "}
        <strong>Circle</strong>, <strong>Square</strong>. Text is the default
        shape. Use the <strong>type</strong> prop to change the shape. Apart
        from this, the component can infer any shape based on the{" "}
        <strong>children</strong> we pass to it.
      </p>
      <div className="example">
        <Skeleton type="circle" />
        <Skeleton type="square" />
        <Skeleton width="50%" />
      </div>
    </>
  );
}

export default Types;
