import styled from "styled-components";

const FooterWrapper = styled.div`
.row {
    padding: 100px;
    background-color: #09142E;
    margin: 0;
    .footer_logo {
        height: 50px;
    }
    
    
    .footer_social {
        color: #fff;
        transition: .2s;
        font-size: 24px;
        padding: 7px 20px 0 0;
        &:hover{
            color: #FF0000;
            transform: scale(1.1);
        }
    }
    
    .footer_link {
        color: white;
        padding: 10px 20px 10px 0;
        transition: .2s;
        display: block;
        &:hover{
            color: #FF0000;
        }
    }
}

.footer_bootom {
    height: 100px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #00052B;
    color: white;
    padding: 0px 100px;
}

@media screen and (max-width: 768px) {
    .row {
        padding: 50px;
    }
    .footer_bootom {
        padding: 50px;
    }
}
`;
export default FooterWrapper;