import React, { useState } from "react";
import styled from "styled-components";

export const Count = () => {
  const message = [
    "天才",
    "かっこいい",
    "可愛い",
    "今日もえらい",
    "まじ可愛い",
  ];
  const [count, setCount] = useState(0);
  const [changed, setChanged] = useState(false);
  const [colorcode, setColorcode] = useState("");
  const [fontSize, setFontSize] = useState(0);
  const [margin, setMargin] = useState(0);

  const countUp = () => {
    setCount((count) => count + 1);
    // console.log(message[Math.floor(Math.random() * message.length)]);
  };

  const changeFlag = () => {
    setChanged(!changed);
  };

  const randomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorcode(randomColor);
    // console.log(colorcode);
  };

  const randomFontSize = () => {
    setFontSize(Math.floor(Math.random() * 150));
    // console.log(fontSize);
  };

  const randomMargin = () => {
    setMargin(Math.floor(Math.random() * 60));
    console.log('margin '+margin);
  };

  return (
    <Div>
      <p>今日の励まし回数: {count}</p>

      <div>
        <button
          onClick={() => {
            countUp();
            changeFlag();
            randomColor();
            randomFontSize();
            randomMargin();
          }}
          changed={changed}
        >
          もっと励ますんや
        </button>
      </div>
      <P colorcode={colorcode} fontSize={fontSize} margin={margin}>
        {message[Math.floor(Math.random() * message.length)]}
      </P>
    </Div>
  );
};

const P = styled.p`
  font-size: ${(props) =>
    props.changed ? props.fontSize + "px" : props.fontSize + "px"};
  color: ${(props) => (props.changed ? props.colorcode : props.colorcode)};
  margin: ${(props) => (props.changed ? props.margin+'px' : props.margin+'px')}
`;

const Div = styled.div`
background-color: #f3f3f3;
min-height: 500px;
margin: 0;
`