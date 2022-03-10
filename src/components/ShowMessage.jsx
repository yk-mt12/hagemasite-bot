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

export const ShowMessage = (props) => {
  const { colorcode, fontSize, margin, changed } = props;

  const randomMessage = () => {
    return message[Math.floor(Math.random() * message.length)];
  };

  return (
    <SMessage colorcode={colorcode} fontSize={fontSize} margin={margin} changed={changed}>
      {randomMessage()}
    </SMessage>
  );
};

const SMessage = styled.p`
  font-size: ${(props) =>
    props.changed ? props.fontSize + "px" : props.fontSize + "px"};
  color: ${(props) => (props.changed ? props.colorcode : props.colorcode)};
  margin: ${(props) =>
    props.changed ? props.margin + "px" : props.margin + "px"};
`;
