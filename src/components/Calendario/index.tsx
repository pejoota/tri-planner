import CalendarPicker from "react-native-calendar-picker";
import { getCustomDatesStyles } from "../../utils/helpers";
import ThemeProps from "../../types/ThemeProps";
import StyledView from "../StyledView";
import { Dimensions } from 'react-native';
import React from "react";
import LeftArrowSVG from "../LeftArrowSVG";
import RightArrowSVG from "../RightArrowSVG";

type CalendarioProps = {
    appColors: ThemeProps
}

const Calendario = ({appColors}: CalendarioProps) => {
    const windowWidth = Dimensions.get('window').width;

    return(
        <StyledView
            style={{
                margin: '10%',
                borderRadius: 10
            }}
            backgroundColor={appColors.secondaryBackgroundColor}
            width="auto"
            height="40%"
        >
            <CalendarPicker
                width={windowWidth * 0.8}
                textStyle={{ color: appColors.primaryTextColor, fontFamily: 'MontserratRegular' }}
                todayBackgroundColor={appColors.highlightBackgroundColor}
                todayTextStyle={{color: appColors.secondaryTextColor}}
                selectedDayColor={appColors.headerColor}
                selectedDayTextColor={appColors.primaryTextColor}

                customDatesStyles={getCustomDatesStyles(appColors)}

                weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
                months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}

                headerWrapperStyle={{backgroundColor: appColors.headerColor, borderRadius: 10}}

                monthTitleStyle={{color: appColors.headerTextColor, fontFamily: 'MontserratSemiBold'}}
                yearTitleStyle={{color: appColors.headerTextColor, fontFamily: 'MontserratSemiBold'}}

                previousComponent={<LeftArrowSVG color={appColors.highlightBackgroundColor}/>}
                nextComponent={<RightArrowSVG color={appColors.highlightBackgroundColor} />}

                // onDateChange={date => setSelectedStartDate(date)}
            />
        </StyledView>
    );
}

export default Calendario