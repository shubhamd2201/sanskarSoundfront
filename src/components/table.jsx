
import { useState, useEffect } from "react";


const Table = ()=>{
    const [localStorageItem, setLocalStorageItem] = useState('');

    let localData = JSON.parse(localStorage.getItem('data'));

      useEffect(() => {

        setLocalStorageItem(localData);
      }, [localData]);

      console.log(localStorageItem);

    return(<table>

        {localStorageItem.map((e, i)=>{
            
            return( <tr key={i}>
                <td>{e.function}</td>
                <td>{e.eventdata}</td>
                <td>{e.venueName}</td>
                <td>{e.amount}</td>
            </tr>)
        })}
       
    </table>);
}

export default Table;