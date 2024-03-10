import Button from "./Button";
import './../../styles/confirm-delete.css';

interface Props {
    handelToggleConfirmOpen: ()=>void,
    handelToggleConfirmTrue:()=>void,
}

const ConfrmDelete = ({handelToggleConfirmOpen,handelToggleConfirmTrue}:Props)=>{

    // --------HANDLERS----------
    const handleDelete = ()=> {
        handelToggleConfirmTrue();
        handelToggleConfirmOpen();
    }
    const handelCancel = ()=> handelToggleConfirmOpen();

    return (
        <div className="confirm">
            <div>
                <h2>Delete Item</h2>
                <p>Are you sure to delete this item?</p>
                <div className="confirm-buttons">
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handelCancel}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfrmDelete;