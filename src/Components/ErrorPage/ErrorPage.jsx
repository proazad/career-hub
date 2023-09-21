import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col my-40 gap-2 justify-center items-center">
            <h2 className="text-6xl">Oops!!</h2>
            <h3 className="text-4xl font-bold">404</h3>
            <h4 className="text-2xl">Page not Found</h4>
            <NavLink to="/"><button className="text-blue-600 font-medium">Back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;