import {HeaderLogo} from "../HeaderLogo.tsx";
import {HeaderSearch} from "../HeaderSearch.tsx";

export const HeaderNav = () => {
    return (
        <div className="flex justify-between items-center">
            <HeaderLogo/>
            <HeaderSearch/>

        </div>
    );
};

