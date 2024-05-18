
import { useState } from "react";


const Form = ()=>{


    const [forminput, setforminput] = useState({});

    return( <div className="form">
    <form action="" onSubmit={(e)=>{
        e.preventDefault();
        // const form = e.target;
        // const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());`

    }}>
        <div className="row">
            <div className="col-4">
                <div className="col-inr">
                    <input type="text" value={forminput.functionname} name="function" placeholder="Enter Function Name" onChange={(e)=>{setforminput({functionname:e.target.value})}} />
                </div>
            </div>
            <div className="col-4">
                <div className="col-inr">
                    <input type="date" value={forminput.eventdata} name="eventdata" placeholder="Select Date"  onChange={(e)=>{setforminput({eventdata:e.target.value})}} />
                </div>
            </div>
            <div className="col-4">
                <div className="col-inr">
                    <select value={forminput.venueName} name="venueName" onChange={(e)=>{setforminput({venueName:e.target.value})}} >
                        <option>Select Venue Name</option>
                        <option value="saikrishna" id="">Sai Krishna Resort</option>
                        <option value="platinum" id="">Platinum</option>
                        <option value="anandam" id="">Anandam</option>
                    </select>
                </div>
            </div>
            <div className="col-4">
                <div className="col-inr">
                    <input type="Number" value={forminput.amount} name="amount" placeholder="Enter Amount" onChange={(e)=>{setforminput({amount:e.target.value})}}/>
                </div>
            </div>
            <div className="col-1">
                <div className="col-inr">
                   <input type="submit" />
                </div>
            </div>
        </div>
    </form>
</div>)
}


export default Form;