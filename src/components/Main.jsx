import React, { useState } from "react";
import styled from "styled-components";

import { ShowMessage } from "./ShowMessage";
import { ShowPositive } from "./ShowPositive";

export const Main = () => {
  const [count, setCount] = useState(0);
  const [buttonMessage, setButtonMessage] = useState("大丈夫？元気ない？");
  const [changed, setChanged] = useState(false);
  const [colorcode, setColorcode] = useState("");
  const [fontSize, setFontSize] = useState(0);
  const [margin, setMargin] = useState(0);

  const countUp = () => {
    setCount((count) => count + 1);
  };

  const changeFlag = () => {
    setChanged(!changed);
  };

  const randomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorcode(randomColor);
  };

  const randomFontSize = () => {
    setFontSize(Math.floor(Math.random() * 150));
  };

  const randomMargin = () => {
    setMargin(Math.floor(Math.random() * 60));
  };

  const changeButtonMessage = (count) => {
    if (count < 10) setButtonMessage("励まして");
    else if (count < 20) setButtonMessage("もっとかい？");
    else if (count < 30) setButtonMessage("もっともっと？");
    else if (count < 40) setButtonMessage("励ましすぎて好きになりそうだよ");
    else if (count < 50) setButtonMessage("にゃーん");
    else if (count < 70) setButtonMessage("きゅんです。");
    else setButtonMessage("君はこれでもうポジティブモンスター");
  };

  return (
    <SDiv>
      <ShowPositive count={count} />

      <SButton
        onClick={() => {
          countUp();
          changeFlag();
          randomColor();
          randomFontSize();
          randomMargin();
          changeButtonMessage(count);
        }}
      >
        {buttonMessage}
      </SButton>
      <ShowMessage
        colorcode={colorcode}
        fontSize={fontSize}
        margin={margin}
        changed={changed}
      />
    </SDiv>
  );
};

const SDiv = styled.div`
  min-height: 500px;
  max-height 1000px;
`;

const SButton = styled.button`
  padding: 12px;
  border-radius: 4px;
  :hover {
    opacity: 50%;
  }
  font-size: 15px;
  background-color: #FFD28B;
  width: auto;
`;
