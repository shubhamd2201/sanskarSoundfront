
// import { useEffect } from "react";
import Form from "../components/from";
// import Table from '../components/table';


const Home = ()=>{

    // let localData = [JSON.parse(localStorage.getItem('data'))];
    // let Table;
    // useEffect(()=>{
        

    //     if(localData){
    //         Table = localData.map((e, i)=>{
    //             return( <tr key={i}>
    //                 <td>{e.function}</td>
    //                 <td>{e.eventdata}</td>
    //                 <td>{e.venueName}</td>
    //                 <td>{e.amount}</td>
    //             </tr>);
    //         });
    //     }
    // }, [localData]);


// const submitForm = 



    return(<>
   <main>
    <section>
        <div className="p_tb_50">
            <div className="wrapper">
                <h1>Enter Venue Details</h1>
                <Form/>
                
                <div className="table">
                   
                </div>
            </div>
        </div>
    </section>
    </main></>);
}

export default Home;