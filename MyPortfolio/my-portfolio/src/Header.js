function Navigation() {
    return (
        <div>
            <div class="container-fluid bg-primary">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand text-white" href="#">Prince <i class="fa-regular fa-heart"></i></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Education</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Work</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Experience</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Navigation;