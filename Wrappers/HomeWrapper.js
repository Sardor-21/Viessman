import styled from "styled-components";
const HomeWrapper = styled.div`
.home{
  display: flex;
  align-items: center;
  background-image: url("viessman.jpg");
  background-attachment: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  padding: 70px 100px;
  .homeCard {
    width: 80%;
    padding: 40px;
    background-color: rgba(9, 18, 43, 0.85);
    color: white;
    border-radius: 12px;
    h1{
      font-weight: bold;
    }
    p{
      letter-spacing: 1px;
    }
}
  }
  .homeCard {
    padding: 100px;
    background-color: white;
  }
  .homeDesc {
    padding: 100px;
    background-color: #EFE7EE;
  }
@media screen and (max-width: 768px){
  .home {
    padding: 100px 10px;
    .homeCard {
      width: 100%;
    }
  }
}
`;
export default HomeWrapper;