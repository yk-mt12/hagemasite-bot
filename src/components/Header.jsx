import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderBox>
      <h1>疲れた心に励ましbot</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled.header`
  width: 100%;
  height: 60px;
  background-color: #fff3f3;
  margin: 0;
`