import { SlMagnifier } from "react-icons/sl";
import {HeaderSearchInput} from "../Types/ButtonTypes.ts";

export const HeaderSearch = ({inputPlaceholder, type}:HeaderSearchInput) => {
    return (
        <div className="flex gap-2">
            <input type={type} placeholder={inputPlaceholder} className="flex align-middle pl-3 border border-green-800 rounded-2xl w-80 h-10 self-center"/>
            <div className="rounded-full size-14 bg-green-600 text-center">
                <SlMagnifier className="block m-auto size-8"/>
            </div>
        </div>
    );
};

