import { useEffect, useState } from "react";

interface UseCallbackProps {
  getItems: () => number[];
}

function UseCallbackHelper({ getItems }: UseCallbackProps) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    console.log("Updating items...");
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default UseCallbackHelper;
