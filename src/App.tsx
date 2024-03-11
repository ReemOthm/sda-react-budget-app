import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import BudgetPage from "./Pages/BudgetPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";

const App = ()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/budget-app" element={<BudgetPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>

            <ToastContainer />
        </>
    )
}

export default App;