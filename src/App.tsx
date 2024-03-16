import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import BudgetPage from "./pages/BudgetPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

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