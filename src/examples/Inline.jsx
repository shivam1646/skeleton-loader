import Skeleton from "../components/Skeleton";
import "./styles.css";

function Inline() {
  return (
    <>
      <h2>Inline</h2>
      <p>
        Use the <strong>inline</strong> prop to display skeletons side by side.
      </p>
      <div className="example">
        <Skeleton inline={true} width="20%" animation="wave" />
        <Skeleton inline={true} width="30%" animation="wave" />
        <Skeleton inline={true} width="50%" animation="wave" />
      </div>
    </>
  );
}

export default Inline;
