import moment from "moment";
import db from '../../db.json'
import { CustomDateStyle } from "react-native-calendar-picker";
import ThemeProps from "../types/ThemeProps";

export const getCustomDatesStyles = (appColors: ThemeProps): CustomDateStyle[] => {
    const ausencias = db.ausencias;
    const customDatesStyles = [] as CustomDateStyle[];

    ausencias.forEach((ausencia) => {
        let backgroundColor;

        if(ausencia.tipo === 'ferias')
            backgroundColor = appColors.ferias;
        else if(ausencia.tipo === 'abono')
            backgroundColor = appColors.abono;
        else if(ausencia.tipo === 'bancoDeHoras')
            backgroundColor = appColors.bancoDeHoras;
        else
            backgroundColor = appColors.tri;

        customDatesStyles.push({
          date: moment(ausencia.data),
          style: {
            backgroundColor: backgroundColor
        },
          textStyle: {color: appColors.secondaryTextColor}, // sets the font color
        });
      })

      return customDatesStyles;
}
