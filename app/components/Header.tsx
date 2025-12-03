import { NavLink, useNavigate } from "react-router";

export function Header() {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between p-4 bg-white text-black">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Proffice</h1>
            <NavLink to="/login" className="text-white rounded-md py-2 px-4 bg-black button hover:text-black hover:bg-white border-1 border-black border-0">Start Free Trial</NavLink>
        </header>
    );
}