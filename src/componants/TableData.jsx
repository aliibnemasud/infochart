import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makePaid } from '../Features/tableDataSlice';

const TableData = () => {
    const { userinfo } = useSelector(state => state.tableData);

    const dispatch = useDispatch();

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
                            {!data?.isPaid ? <button onClick={()=> dispatch(makePaid(data._id))}>Make Paid</button> : <td> Paid</td>}
                        </tr>
                    })
                }

            </table>


        </div>
    );
};

export default TableData;