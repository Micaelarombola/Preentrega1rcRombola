import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />

            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Accesorios"
                    itemDos = "Computacion/Gaming"
                    itemTres = "Electrónica"
                    itemCuatro = "Reparación"
                    itemCinco = "Novedades"

                />

            </nav>

            <div className="containerCart">
                <CartWidget />

            </div>
        </header>
    )
}

export default NavBar;