import styled from "styled-components";
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
background-color: red;
  padding: 20px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  .logo {
    height: 30px;
  }
  .menu_navbar{
    display: flex;
    .navbar_link {
      padding: 10px 20px;
      color: white;
      &:hover {
        color: black;
      }} }
  @media screen and  (max-width: 1200px) {
    .menu_navbar {
      position: fixed;
      top: 80px;
      right: 10%;
    } }`;
export default HeaderWrapper;