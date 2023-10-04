export const NavItems = () => {

    const products = [{
        id: 1,
        name: "Pace maker",
        url: "/pace"
    },
    {
        id: 2,
        name: "Oxymeter",
        url: "/oxy"
    },
    {
        id: 3,
        name: "Thermo meter",
        url: "/thermo"
    },
    {
        id: 4,
        name: "S8",
        url: "/S8"
    }];

    const navContent = () => {
        return products.map((item, index) => {
            return (<li class="nav-item"  key={index}>
                <a class="nav-link" href={item.url}>{item.name}</a>
            </li>
            )
        })
    }

    return (
        <ul class="navbar-nav me-auto">
            {navContent()}
        </ul>

    )
}