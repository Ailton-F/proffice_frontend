export function Footer(){
    return (
        <footer className="md:mt-80 mt-32 p-4 bg-white text-black">
            <div className="md:flex items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Proffice</h1>
                    <p className="text-grey-800">Your trusted task manager for teachers.</p>
                </div>
                <div className="md:flex gap-x-24">
                    <div className="mt-8">
                        <ul className="space-y-2">
                            <li className="text-sm font-bold text-grey-800">Explore</li>
                            <li className="text-sm text-grey-800">About Us</li>
                            <li className="text-sm text-grey-800">Contact</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <ul className="space-y-2">
                            <li className="text-sm font-bold text-grey-800">Services</li>
                            <li className="text-sm text-grey-800">Features</li>
                            <li className="text-sm text-grey-800">Pricing</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <ul className="space-y-2">
                            <li className="text-sm font-bold text-grey-800">Connect</li>
                            <li className="text-sm text-grey-800">Linkedin</li>
                            <li className="text-sm text-grey-800">Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="text-neutral-300 mb-2 mt-30"/>
            <div className="flex justify-center mt-6">
                <p className="text-sm text-grey-800">© 2025 Proffice. All rights reserved.</p>
            </div>
        </footer>
    );
}