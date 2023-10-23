
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title="KhaNa KhaZana" bgClass="bg-image">
            <div className="headingbro"><h1>Do You Want To Try New. <br />
            Let' Find It....
            </h1></div>
            <Button
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;