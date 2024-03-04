import Button from "./UI/Button";
import Input from "./UI/Input";
import './../styles/TransferForSaving.css';

interface IProps {

}

const TransferForSaving = ({}:IProps)=>{
    return (
        <form className="target-saving">
            <p>Current balance: 0</p>
            <label htmlFor="transfer">
                Transfer to saving account
                <div>
                    <Input type="number" id="transfer" name="transfer" />
                    <Button>Transfer</Button>
                </div>
            </label>
        </form>
    )
}

export default TransferForSaving;