import Button from "./UI/Button";
import Input from "./UI/Input";

interface IProps {

}

const ExpenseSource = ({}:IProps)=>{
    return (
        <div>
            <label htmlFor="bill">
                Expense source
                <Input  type="numer" name="bill" id="bill" placeholder="Electricity bill"/>
            </label>
            <label htmlFor="amount">
                Amount of expense
                <Input  type="numer" name="amount" id="amount"/>
            </label>
            <label htmlFor="date">
                Date of expense
                <Input  type="date" name="date" id="date"/>
            </label>
            <Button>Add expense</Button>
        </div>
    )
}

export default ExpenseSource;