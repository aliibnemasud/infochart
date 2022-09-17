import { createSlice } from "@reduxjs/toolkit";

const allData = {
    userinfo: [
        {
            _id: "63246aeef42efbba4de685a9",
            isPaid: false,
            amountPaid: "No",
            name: "House Duran",
            email: "houseduran@interloo.com"
        },
        {
            _id: "63246aee8f8e1bc82e960e8b",
            isPaid: true,
            amountPaid: "Yes",
            name: "Ingrid Manning",
            email: "ingridmanning@interloo.com"
        },
        {
            _id: "63246aeefd38942619b5e115",
            isPaid: false,
            amountPaid: "No",
            name: "Shelley Delacruz",
            email: "shelleydelacruz@interloo.com"
        },
        {
            _id: "63246aeea7fa84fe32965094",
            isPaid: true,
            amountPaid: "Yes",
            name: "Blackwell Velasquez",
            email: "blackwellvelasquez@interloo.com"
        },
        {
            _id: "63246aee2140e576374cb2e1",
            isPaid: true,
            amountPaid: "Yes",
            name: "Rhodes Moses",
            email: "rhodesmoses@interloo.com"
        },
        {
            _id: "63246aeefc2b91783ea55fd2",
            isPaid: false,
            amountPaid: "No",
            name: "Bolton Riddle",
            email: "boltonriddle@interloo.com"
        }
    ]
}

const tableDataSlice = createSlice({
    name: "tableData",
    initialState: allData,

    reducers: {
        showinfo: state => {
            return state;
        },
        makePaid: (state, action) => {
            const id = action.payload;
            const index = state.userinfo.filter(info => info._id === id);
            if (index) {
                index[0].isPaid = true;
                index[0].amountPaid = "Yes";
            }
        },
    }
})

export const { makePaid } = tableDataSlice.actions;

export default tableDataSlice.reducer;

