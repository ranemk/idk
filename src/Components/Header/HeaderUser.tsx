import {UserAccount} from "./UserAccount.tsx";
import {StoreCart} from "../StoreCart.tsx";

export const HeaderUser = () => {
    return (
        <div className="flex align-center items-center">
            <UserAccount/>
            <StoreCart/>
        </div>
    );
};

