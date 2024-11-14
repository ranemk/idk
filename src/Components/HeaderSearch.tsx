import { SlMagnifier } from "react-icons/sl";
import {HeaderSearchInput} from "../Types/ButtonTypes.ts";

export const HeaderSearch = ({inputPlaceholder, type}:HeaderSearchInput) => {
    return (
        <div className="flex gap-2 align-middle">
            <input type={type} placeholder={inputPlaceholder} className="flex align-middle pl-3 border border-green-800 w-80 h-10 self-center rounded-3xl"/>
            <div className="rounded-full size-12 bg-green-600 text-center flex">
            <SlMagnifier className="block m-auto size-6 text-white"/>
            </div>

        </div>
    );
};

