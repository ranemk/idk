import {CustomButton} from "../CustomButton.tsx";
import {SelectCustom} from "../SelectCustom.tsx";

export const HeaderMenu = () => {
    return (
        <div className="flex gap-16 justify-center p-4">
            <CustomButton name={'Shop All'}/>
            <SelectCustom name={'Flower'}/>
            <CustomButton name={'Edibles'}/>
            <SelectCustom name={'Concentrates'}/>
            <CustomButton name={'Mushrooms'}/>
            <SelectCustom name={'Promotion/Bundles'}/>
            <SelectCustom name={'Support'}/>
            <CustomButton name={'Rewards'}/>
            <CustomButton name={'Blog'}/>
        </div>
    );
};

