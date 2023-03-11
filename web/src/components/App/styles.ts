import styled from "styled-components";

export const Container = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;

  width: 1200px;
  height: 700px;

  border: 1px solid #6d6c6c;
  border-radius: 8px;
  background: #121214;
`;

export const InitialScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  gap: 24px;
`;

export const ButtonConnect = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 8px;
  background: #030423;
  cursor: pointer;

  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid #6d6c6c;
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 40px;
  padding-right: 40px;
  border-right: 1px solid #6d6d6c;

  img {
    max-width: 60px;
    max-height: 60px;
  }
`;

export const BoxCenter = styled.div`
  display: flex;
  gap: 40px;
`;

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  right: 20px;

  > div {
    background: #d9d9d9;
    border-radius: 9999px;

    img {
      max-width: 40px;
      max-height: 40px;
    }
  }
`;

export const WrapperBody = styled.div`
  display: flex;
  gap: 16px;
  height: calc(100% - 120px);
  max-width: 100%;
  padding: 20px;
`;

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 68%;
`;

export const BoxInputSearch = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonSearch = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 8px;
  background: #030423;
  cursor: pointer;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const BodyRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  width: 32%;

  > span {
    word-break: break-word;
  }
`;

export const PersonData = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 16px;
`;

export const CompleteData = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  border-radius: 8px;
  gap: 4px;
  background: #e1e1e6;
`;

export const Prisons = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 6px;
  gap: 8px;
`;

export const BoxPrison = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 8px;
  background: #e1e1e6;
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #202024;
`;

export const BoxBottom = styled.div``;
