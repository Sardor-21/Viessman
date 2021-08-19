import styled from "styled-components";

const CardWrapper = styled.div`
  .cardLink {
    transition: 1s;

    &:hover {
      transform: translateY(-20px);
    }
  }

  .card_content {
    transition: 1s;
    background-color: rgba(9, 20, 46, 0.44);

    &:hover {
      height: 200%;
      box-shadow: inset 0 0 0 500px rgba(0, 0, 0, 0.43);
      transition: 1s;
    }
  }
`;
export default CardWrapper;