import {HeaderLogo} from "../HeaderLogo.tsx";
import {HeaderSearch} from "../HeaderSearch.tsx";
import {UserAccount} from "./UserAccount.tsx";
import {HeaderUser} from "./HeaderUser.tsx";

export const HeaderNav = () => {
    return (
        <div className="flex justify-between items-center p-6 border-b border-gray-200 ">
            <HeaderLogo/>
            <HeaderSearch inputPlaceholder={"search"} type={"search"}/>
            <HeaderUser/>
        </div>
    );
};

