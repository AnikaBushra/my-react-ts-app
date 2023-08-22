import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Form from "../components/Form";

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
        path: '/',
        element: <Form></Form>
    }]
}])
export default routes;