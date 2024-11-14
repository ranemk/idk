import {UserAccount} from "./UserAccount.tsx";
import {StoreCart} from "../StoreCart.tsx";

export const HeaderUser = () => {
    return (
        <div className="flex">
            <UserAccount/>
            <StoreCart/>
        </div>
    );
};

