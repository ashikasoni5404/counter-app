import { useState } from "react";

function Hooks() {
  const [num, setNum] = useState(0);
  const inc = () => {
    setNum(num + 1);
  };

  return (
    <>
      <div>
        <button onClick={inc()}>increment</button>
      </div>
    </>
  );
}

export default Hooks;
