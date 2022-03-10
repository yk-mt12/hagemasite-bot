import styled from "styled-components";

export const ShowPositive = (props) => {
  const { count } = props;

  return (
    <CountPositive>今日の励まし回数: {count}</CountPositive>
  )
}

const CountPositive = styled.p`
  color: #333;
  font-wight: bold;
  font-size: 25px;
`;
