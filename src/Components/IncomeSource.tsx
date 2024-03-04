import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const IncomeSource = ({}:IProps)=>{
    return (
        <form>
            <label htmlFor="salary">
                Income source
                <Input  type="text" name="salary" id="salary" placeholder="Salary" required/>
            </label>
            <label htmlFor="amount">
                Amount of income
                <Input  type="numer" name="amount" id="amount" required/>
            </label>
            <label htmlFor="date">
                Date of income
                <Input  type="date" name="date" id="date" required/>
            </label>
            <Button>Add income</Button>
        </form>
    )
}

export default IncomeSource;