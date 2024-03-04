import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const IncomeSource = ({}:IProps)=>{
    return (
        <div>
            <label htmlFor="salary">
                Income source
                <Input  type="numer" name="salary" id="salary" placeholder="Salary"/>
            </label>
            <label htmlFor="amount">
                Amount of income
                <Input  type="numer" name="amount" id="amount"/>
            </label>
            <label htmlFor="date">
                Date of income
                <Input  type="date" name="date" id="date"/>
            </label>
            <Button>Add income</Button>
        </div>
    )
}

export default IncomeSource;