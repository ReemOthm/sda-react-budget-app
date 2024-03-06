import { ChangeEvent, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const Target = ({}:IProps)=>{

    // ---------------STATES-----------------
    const [target,setTarget] = useState(0)

    // ---------------HANDLERS-----------------
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setTarget(Number(value))
    }

    return (
        <form>
            <label htmlFor="target">
                Set Target
                <Input type="numer" name="target" id="target" onChange={handleChange} required/>
            </label>
            <input type="reset" value='Reset' />
            <p>Current Saving: 0</p>
            <p>Target: {target}</p>
            <label htmlFor="progress">
                Progress: 0% 
                <progress id="progress" value={0} max={100} />
            </label>
        </form>
    )
}

export default Target;