import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchData } from '../Features/dataSlice';

const Table = () => {
   
    const {isLoading, userinfo, error} = useSelector(state => state.data);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())      
    }, [])

    if(isLoading) {
        return <h1>Loading....</h1>
    }
    

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

                {
                userinfo &&
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