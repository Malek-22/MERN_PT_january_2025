import { useContext } from "react";
import { NameContext } from "./NameContext";

const Navbar = () => {
    const { name } = useContext(NameContext);

    return (
        <nav style={{ background: "purple", padding: "10px", color: "white" }}>
            <h2>Hi {name}!</h2>
        </nav>
    );
};

export default Navbar;
