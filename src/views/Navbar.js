const Navbar = () => {
    return (
        <nav className="navbar container-fluid bg-dark d-flex justify-content-between">
            <div className="flex-row">
                <a className="navbar-brand" href="#">
                    <img src="https://play-lh.googleusercontent.com/fXQVXTma1ENwAFjsxJ4IT6GntBr3RxWP3HMSLbNdvycl-0tscOQEeJIEAmehcNOt5hCp" alt="" width="30px" height="30px" className="d-inline-block align-text-top image-fluid" />
                    El Blog de...
                </a>
            </div>
            <span className="flex-row">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li>Holi</li>
                    </ul>
                </div>
            </span>
        </nav>
    )
}


export default Navbar;