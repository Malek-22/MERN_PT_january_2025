import { useContext } from "react";
import { NameContext } from "./NameContext";

const Form = () => {
    const { name, setName } = useContext(NameContext);

    return (
        <div style={{ padding: "20px" }}>
            <label>Your Name: </label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "5px", marginLeft: "10px" }}
            />
        </div>
    );
};

export default Form;
