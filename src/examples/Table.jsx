import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import "./styles.css";

const GET_TABLE_DATA = function (num) {
  const cards = [];
  for (let idx = 0; idx < num; idx++) {
    cards.push({
      idx,
      title: `Title ${idx + 1}`,
      description: "Describe the card.",
      status: "pending",
    });
  }
  return cards;
};

function Table() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <h2>Table</h2>
      <div className="example">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Desc</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {GET_TABLE_DATA(5).map((item) => (
              <tr key={item.idx}>
                <td>{isLoading ? <Skeleton animation="wave" /> : item.idx}</td>
                <td>
                  {isLoading ? <Skeleton animation="wave" /> : item.title}
                </td>
                <td>
                  {isLoading ? <Skeleton animation="wave" /> : item.description}
                </td>
                <td>
                  {isLoading ? <Skeleton animation="wave" /> : item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
