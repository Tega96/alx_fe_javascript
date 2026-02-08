
const UserProfile = () => {
    return (
        <div className="">
            <header className="flex flex-row justify-between items-center mx-10 py-4 px-4">
                <div className="">
                    <h1 className="text-2xl">TegaByte</h1>
                </div>
                <nav className="">
                    <ul className="flex flex-row gap-4 ">
                        <li className="hover:underline"><a href="#">Home</a></li>
                        <li className="hover:underline"><a href="#">About</a></li>
                        <li className="hover:underline"><a href="#">Service</a></li>
                        <li className="hover:underline"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className='min-h-screen'>
                <div className="w-full bg- from-blue-500 to-green-400 text-center my-2 p-5 ">
                    <h1 className="text-3xl">Welcome to my page</h1>
                    <p className="mt-5">This is a great way to start today</p>
                </div>
            </main>
            <footer className="text-center text-sm">&copy;Tegabyte - 2026. All rights reserved</footer>
        </div>
    )
}
export default UserProfile;