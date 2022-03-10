import styled from "styled-components";

export const Header = () => {
  return (
    <SHeaderBox>
      <h1>疲れた心に励ましbot</h1>
    </SHeaderBox>
  )
}

const SHeaderBox = styled.header`
  width: 100%;
  height: 60px;
  margin: 0px;
`