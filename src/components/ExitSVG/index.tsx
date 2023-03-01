import React from 'react';
import { SvgXml } from "react-native-svg";
import SVGProps from '../../types/SVGProps';
import { TouchableOpacity } from 'react-native';

const ExitSVG = ({color, onPress}: Partial<SVGProps>): JSX.Element => {

    const ExitXml: string = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.2945 18.9112C9.72155 18.7306 10 18.3052 10 17.8333V15H21C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9H10V6.1667C10 5.69483 9.72155 5.26942 9.2945 5.08884C8.86744 4.90826 8.37588 5.00808 8.04902 5.34174L2.33474 11.175C1.88842 11.6307 1.88842 12.3693 2.33474 12.825L8.04902 18.6583C8.37588 18.9919 8.86744 19.0917 9.2945 18.9112Z" fill="${color}"/>
    </svg>
    `
    return(
        <TouchableOpacity
            style={{marginRight: 15}}
            onPress={onPress}
        >
            <SvgXml
                xml={ExitXml}
                width={30}
                height={30}
            />
        </TouchableOpacity>
    );
}

export default ExitSVG;