import ContainerWrapper from "./ContainerWrapper";
import Header from "../Header";
import Footer from "../Footer";

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Header />
            {children}
            <Footer />
        </ContainerWrapper>
    )
}
export default Container;