import {ICustomButton} from "../Types/ButtonType.ts";


export const CustomButton = ({name}: ICustomButton) => {
    return (
        <button>
            <div className="text-base font-medium text-lg">
            {name}

            </div>
        </button>
    );
};

