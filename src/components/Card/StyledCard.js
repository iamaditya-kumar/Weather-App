import styled from "styled-components";

export const StyledCard = styled.section`
  body {
    background: linear-gradient(45deg, #fc466b, #3f5efb);
    height: 100vh;
    font-family: "Montserrat", sans-serif;
  }

  .cardContainer {
    position: relative;
    width: 90%;
    margin: 0 auto;
  }

  .glassCard {
    background: rgba(255, 255, 255, 0.3);
    padding: 3em;
    // height: 530px;
    border-radius: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  .glassCard p {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .glassCard:hover {
    margin: 4px !important;
  }

  .drop {
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
    position: absolute;
    transition: all 0.2s ease;
  }

  .drop-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }
  .drop-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }
  .drop-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }
  .drop-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }
  .drop-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }
  .parent {
    display: grid;
    grid-template-columns: 3fr repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .flex-summary {
    color: #fff;
    font-weight: 600;
  }

  .flex-details {
    padding: 1.5rem 3rem;
    color: #fff;
  }

  .flex-key {
    font-weight: 500;
    font-size: 18px;
  }

  .flex-value {
    font-weight: 700;
    font-size: 20px;
  }

  .main-temp {
    font-size: 62px;
    font-weight: 600;
    color: #fff;
  }

  @media screen and (max-width: 720px) {
    .flex-details {
      padding: 1.5rem;
    }
    .main-temp {
      font-size: 50px;
    }

    .flex-value {
      font-size: 18px;
    }

    .flex-key {
      font-size: 16px;
    }

    .cardContainer {
      min-width: 300px;
      width: auto;
    }

    .glassCard {
      padding: 1em;
      margin-bottom: 3rem;
      pointer-events: none;
    }

    .drops {
      display: none;
    }
  }
`;
