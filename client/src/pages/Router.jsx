import { Route, Routes } from "react-router-dom"
import CPageLayout from './CitizenPage/components/CPageLayout';
import CitizenEducation from "./CitizenPage";
import HomePage from "./HomePage"
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" />
        <Route path="/tenders-active" />
        <Route path="/tenders-done" />

        <Route path="/citizen" element={<CPageLayout/>} >
            <Route path="education" element={<CitizenEducation/>}/>
        </Route>
        <Route path="/businessman/edu" />
        <Route path="/businessman/docs" />
    </Routes>
  )
}

export default Router