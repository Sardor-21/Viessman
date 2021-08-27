import styled from "styled-components";

const LinkCardWrapper = styled.div`
    padding: 100px;
    background-color: white;
    a:hover {
      color: red;
      transition: 0.2s;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;
export default LinkCardWrapper;