import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';


const Table = () => {

    const [userinfo, setUserinfo] = useState([]);

    useEffect(() => {
        axios.get('tabledata.json')
            .then(res => setUserinfo(res.data))
    }, [])

    return (
        <div>
            <h1>All the Students Data</h1>



            <table style={{ width: "100%" }}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount Paid</th>
                    <th>Action</th>
                </tr>

                {userinfo &&
                    userinfo.map(data => {
                       return <tr>
                            <td>{data?.name}</td>
                            <td>{data?.email}</td>
                            <td>{data?.amountPaid}</td>                            
                            { !data?.isPaid ? <button>Make Paid</button> : <td> Paid</td> }
                        </tr>
                    })
                }

            </table>


        </div>
    );
};

export default Table;