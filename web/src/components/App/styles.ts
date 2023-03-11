import styled from "styled-components";

export const Container = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  width: 1200px;
  height: 700px;

  border: 1px solid #6d6c6c;
  border-radius: 8px;
  background: #121214;

  span {
    color: #fff;
  }
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
  width: 100%;
  padding: 20px;
`;

export const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 65%;
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
  gap: 16px;
  width: 35%;
`;
