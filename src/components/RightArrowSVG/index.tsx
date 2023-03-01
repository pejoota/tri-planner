import React from 'react';
import { SvgXml } from "react-native-svg";
import SVGProps from '../../types/SVGProps';
import { TouchableOpacity } from 'react-native';

const RightArrowSVG = ({color, onPress}: Partial<SVGProps>): JSX.Element => {

    const RightArrowXml: string = `<svg fill="${color}" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/></svg>`
    return(
        <TouchableOpacity
            onPress={onPress}
            style={{padding: 10}}
        >
            <SvgXml
                xml={RightArrowXml}
                width={30}
                height={30}
            />
        </TouchableOpacity>
    );
}

export default RightArrowSVG;