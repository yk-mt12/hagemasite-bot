import React, { useState } from "react";
import styled from "styled-components";

const message = [
  "天才",
  "かっこいい",
  "可愛い",
  "今日もえらい",
  "まじ可愛い",
  "キュートすぎ",
  "今日もお疲れ様",
  "生きててえらい",
  "生きてるだけで最強",
  "君なら大丈夫",
  "元気出して",
  "だひょーん",
  "にゃんにゃーん",
  "神？！",
  "ゴッド？!",
  "天使？！",
  "未来は明るい",
  "やーーーー！(きんにくん)",
  "やーーー！(やーーーー)",
  "wwwwwww",
  "がんばれがんばれ",
  "21歳！拳で",
  "元気出してこ",
];

export const Count = () => {
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
    <Div>
      <CountPositive>今日の励まし回数: {count}</CountPositive>

      <Button
        onClick={() => {
          countUp();
          changeFlag();
          randomColor();
          randomFontSize();
          randomMargin();
          changeButtonMessage(count);
        }}
        changed={changed}
      >
        {buttonMessage}
      </Button>
      <Message colorcode={colorcode} fontSize={fontSize} margin={margin}>
        {message[Math.floor(Math.random() * message.length)]}
      </Message>
    </Div>
  );
};

const Message = styled.p`
  font-size: ${(props) =>
    props.changed ? props.fontSize + "px" : props.fontSize + "px"};
  color: ${(props) => (props.changed ? props.colorcode : props.colorcode)};
  margin: ${(props) =>
    props.changed ? props.margin + "px" : props.margin + "px"};
`;

const Div = styled.div`
  background-color: #f3f3f3;
  min-height: 500px;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 4px;
  :hover{
    opacity: 50%;
  }
  font-size: 15px;
`;

const CountPositive = styled.p`
  color: #333;
  font-wight: bold;
  font-size: 25px;
`
