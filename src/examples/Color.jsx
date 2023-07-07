import Skeleton from "../components/Skeleton";
import "./styles.css";

function Color() {
  return (
    <>
      <h2>Colors</h2>
      <div className="example" style={{ backgroundColor: "#121212" }}>
        <Skeleton
          width="250px"
          height="250px"
          color="#212121"
          animation="wave"
        />
      </div>
    </>
  );
}

export default Color;
