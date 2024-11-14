import {ICustomButton} from "../Types/ButtonTypes.ts";


export const CustomButton = ({name}: ICustomButton) => {
    return (
        <button>
            <div className="text-base font-medium text-lg">
            {name}
            </div>
        </button>
    );
};

