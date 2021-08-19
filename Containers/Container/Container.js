import ContainerWrapper from "./ContainerWrapper";
import Header from "../Header";

const Container = ({children}) => {
    return (
        <ContainerWrapper>
            <Header/>
            {children}
        </ContainerWrapper>
    )
}
export default Container;