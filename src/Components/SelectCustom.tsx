import {ICustomSelect} from "../Types/ButtonType.ts";

export const SelectCustom = ({name}: ICustomSelect) => {
    return (
        <button>
            <div className="text-base font-medium text-lg">
                {name}
            </div>
        </button>
    );
};

