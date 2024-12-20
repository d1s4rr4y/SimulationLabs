const navCode = `
<!-- Header (Nav Bar) -->
<nav class="navbar navbar-expand-lg navbar-light bg-light headerStyle">
    <div class="container-fluid">
        <a class="navbar-brand" href="/SimulationLabs">Simulation Labs </a>
        <!-- This collapsible element is needed for the items to align from the left -->
        <div class="collapse navbar-collapse" id="navbarMainContent">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownToggle" role="button" data-bs-toggle="dropdown"> Labs </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="/SimulationLabs/Pages/Boids">
                                Lab 1 - Boids 
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/SimulationLabs/Pages/Boids">
                                Lab 2 - Noise 
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`

document.getElementById("headerBar").insertAdjacentElement("afterbegin", navCode);