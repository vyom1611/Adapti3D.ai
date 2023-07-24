import { SketchPicker } from 'react-color';
import { useSnapshot } from "valtio";

import state from "../store/index.js";

const ColorPicker = () => {
    const snap = useSnapshot(state);

    return (
        <div className="absolute left-null ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha
                onChangeComplete={(color) => state.color = color.hex}
            />
        </div>
    );
}

export default ColorPicker;
