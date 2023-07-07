import { useEffect, useState } from "react";
import Card from "./Card";

const GET_CARDS = function (num) {
  const cards = [];
  for (let idx = 0; idx < num; idx++) {
    cards.push({
      idx,
      title: `Title ${idx + 1}`,
      description: "Describe the card.",
      user: "https://3xwil.csb.app/smile.svg",
      thumbnail: `https://dummyimage.com/240x160&text=Title+${idx + 1}`,
    });
  }
  return cards;
};

function CardView() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <h2>Card view</h2>
      <p>
        The skeleton component can infer dimensions from the
        <strong>children</strong>. So you can avoid setting width and height
        manually.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid rgb(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
        }}
      >
        {GET_CARDS(10).map((card, idx) => (
          <Card card={card} key={idx} isLoading={isLoading} />
        ))}
      </div>
    </>
  );
}

export default CardView;
