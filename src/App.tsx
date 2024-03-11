import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetPage from "./Components/Pages/BudgetPage";
import ErrorPage from "./Components/Pages/ErrorPage";
import Home from "./Components/Pages/Home";

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
        </>
    )
}

export default App;