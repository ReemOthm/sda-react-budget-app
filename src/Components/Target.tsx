import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const Target = ({}:IProps)=>{
    return (
        <form>
            <label htmlFor="target">
                Set Target
                <Input  type="numer" name="target" id="target" required/>
            </label>
            <input type="reset" value='Reset' />
            <div>Current Saving: 0</div>
            <div>Target: 0</div>
            <label htmlFor="progress">
                Progress: 0% 
                <progress id="progress" value={0} max={100} />
            </label>
        </form>
    )
}

export default Target;