import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/dataSlice";
import tableDataSlice from "../Features/tableDataSlice";

const store = configureStore({
    reducer: {
        data: dataSlice,
        tableData: tableDataSlice,        
    }
});

export default store;