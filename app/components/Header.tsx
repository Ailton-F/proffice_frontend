export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-black md:mb-40 mb-20">
            <h1 className="text-2xl font-bold">Proffice</h1>
            <a href="/" className="text-white rounded-md py-2 px-4 bg-black button hover:text-blue-700 border-0">Start Free Trial</a>
        </header>
    );
}