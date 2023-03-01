import React from 'react';
import { SvgXml } from "react-native-svg";
import SVGProps from '../../types/SVGProps';
import { TouchableOpacity } from 'react-native';

const LeftArrowSVG = ({color, onPress}: Partial<SVGProps>): JSX.Element => {

    const LeftArrowXml: string = `<svg fill="${color}" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"/></svg>`
    return(
        <TouchableOpacity
            style={{marginRight: 15}}
            onPress={onPress}
        >
            <SvgXml
                xml={LeftArrowXml}
                width={30}
                height={30}
            />
        </TouchableOpacity>
    );
}

export default LeftArrowSVG;