import styled from "styled-components";

export const Div = styled.div`
  background-color: #0c1e28;
`;

export const BgHeader = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 100%, #000000 100%),
    url(./images/image111.png);
  opacity: 1;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50vw;
`;

export const Nav = styled.div`
  background-color: rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(34px);
  box-sizing: border-box;
  margin: 0.5vw 0;
  padding: 1vw;
  border: 2px solid #eed5a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Upper = styled.div`
  width: calc(100% - 90%);
  display: grid;
  grid-template-areas: "first second" "first third";

  .Logo {
    grid-area: first;
  }

  .Earn {
    grid-area: second;
  }

  .Alliance {
    grid-area: third;
  }
`;

export const Contain = styled.div`
  width: calc(100% - 20%);
  display: flex;
  justify-content: flex-end;
  color: #ffffff;
  align-items: center;

  p {
    margin: 0 1vw;
    font-size: clamp(0.8rem, 1.3vw, 1.5rem);
  }

  i {
    color: #eed5a5;
    margin: 0.5vw 1vw 0;
    font-size: clamp(0.8rem, 1.3vw, 1.5rem);
  }
`;

// center
export const SecNav = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  left: calc(100% - 50%);
  top: calc(100% - 60%);
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;

  .centerImg {
    width: 20vw;
    margin: 0 0 1.5vw;
  }

  p {
    color: white;
    text-align: center;
    margin: 1.5vw 0;
    font-size: clamp(0.5rem, 1vw, 1.5rem);
  }
`;

export const Imges = styled.div`
  display: flex;

  align-items: center;
  text-align: center;

  .left {
    height: clamp(0.8rem, 1.7vw, 3rem);
  }

  h1 {
    color: white;
    font-weight: 700;
    font-size: clamp(1rem, 2.5vw, 3rem);
    margin: 0.1vw 0.5vw 0.4vw;
  }

  .right {
    height: clamp(0.8rem, 1.7vw, 3rem);
  }

  span {
    color: #eed5a5;
  }
`;
