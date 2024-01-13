import styled from 'styled-components';

const StyledLayout = styled.div`
  position: absolute; top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 430px;
  height: 700px;
  padding: 60px 30px;
  margin: auto;
  background-color: #F8F8F8;
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, .15);
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
`;

export default function ToDoLayout() {
  return (
    <StyledLayout>
      <H1>TO DO LIST</H1>
    </StyledLayout>
  );
}
