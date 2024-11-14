import {HeaderSale} from "./HeaderSale.tsx";
import {HeaderMenu} from "./HeaderMenu.tsx";
import {HeaderNav} from "./HeaderNav.tsx";

export const Header = () => {
    return (
        <div>
            <HeaderSale/>
            <HeaderNav/>
            <HeaderMenu/>
        </div>
    );
};

