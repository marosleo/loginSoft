import styled from "styled-components";

export const Title = styled.div`
  gap: 15px;
  font-weight: bold;
`;

export const Container = styled.div`
    overflow: hidden;
    gap: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 5px;
`;

export const Content = styled.div`
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  padding: 50px;
  border-radius: 5px;
  margin: 1%;
`;


export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
  align-items: center;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
