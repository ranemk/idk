import {ICustomSelect} from "../Types/ButtonTypes.ts";

export const SelectCustom = ({name}: ICustomSelect) => {
    return (
        <button>
            <div className="text-base font-medium text-lg">
                {name}
            </div>
        </button>
    );
};

