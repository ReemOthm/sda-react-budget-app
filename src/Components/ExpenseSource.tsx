import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const ExpenseSource = ({}:IProps)=>{
    return (
        <form>
            <label htmlFor="bill">
                Expense source
                <Input  type="numer" name="bill" id="bill" placeholder="Electricity bill" required/>
            </label>
            <label htmlFor="amount">
                Amount of expense
                <Input  type="numer" name="amount" id="amount" required/>
            </label>
            <label htmlFor="date">
                Date of expense
                <Input  type="date" name="date" id="date" required/>
            </label>
            <Button>Add expense</Button>
        </form>
    )
}

export default ExpenseSource;