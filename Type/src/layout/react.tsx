import Header from "../components/header";
import Fooder from "../components/fooder";
import HomePage from "../components/Home";

const ClientLayout = () =>{
    return(
        <>
            <Header/>
            <br />
            <HomePage/>
            <br />
            <Fooder></Fooder>
        </>
    )
}

export default ClientLayout;