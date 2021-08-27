import styled from "styled-components";
const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: red;
  padding: 20px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  height: 78px;
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
    .menu {
      position: fixed;
      top: 78px;
      right: -150%;
      height: 100%;
      width: 250px;
      z-index: 100;
      background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
      backdrop-filter: blur(8px);
      transition: .3s;
      &.right {
        right: 0;
      }
    }
    .menu_navbar {
      flex-direction: column;
        text-align: center;
      .navbar_link {
        padding: 20px 10px;
        display: block;
        &:hover {
          color: red;
        }
      }
    } }`;
export default HeaderWrapper;