import React, { useState } from "react";

const Eight = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "200px", margin: "50px auto" }}>
      <input
        type="text"
        value={value}
        readOnly
        style={{ width: "100%", height: "40px", marginBottom: "10px" }}
      />

      <div>
        {["7","8","9","/",
          "4","5","6","*",
          "1","2","3","-",
          "0",".","=","+"].map((btn) => (
              <button
                key={btn}
                style={{ width: "45px", height: "40px", margin: "2px" }}
                onClick={()=>
                   btn==="="?setValue(eval(value)):setValue(value+btn)

                }
              >{btn}</button>
        ))}

        <button
          style={{ width: "100%", height: "40px", marginTop: "5px" }}
          onClick={() => setValue("")}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Eight;
