import React, {useState} from "react";
import "./styles.scss";

const Counter: React.FC = () => {
  const [value, setValue] = useState(0);
  return <div>
      Counter: {value}
      <input type="button" value={"-"} onClick={() => setValue(value => value - 1)} />
      <input type="button" value={"+"} onClick={() => setValue(value => value + 1)} />
    </div>;
}

export default Counter;
