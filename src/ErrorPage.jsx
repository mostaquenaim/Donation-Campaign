import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen bg-white flex flex-col text-center justify-center items-center
        text-6xl">
            <h1>404</h1>
            <h1>Kichui nai ekhane</h1>
            <Link to='/'>
                <button className="btn btn-primary">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;