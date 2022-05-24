const Navbar = () => {
    return (
        <nav className="navbar container-fluid bg-dark d-flex justify-content-between">
            <div className="flex-row">
                <a className="navbar-brand" href="#">
                    <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    El Blog de...
                </a>
            </div>
            <span className="flex-row">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li>Holi</li>
                    </ul>
                </div>
            </span>
        </nav>
    )
}


export default Navbar;