import Colors  from "./Colors";

const ColorScheme = {
    dark: {
        primaryBackgroundColor: Colors.black,
        secondaryBackgroundColor: Colors.darkGrey,

        headerColor: Colors.wine, 
        headerTextColor: Colors.white,
    
        primaryTextColor: Colors.white,
        secondaryTextColor: Colors.black,
    
        highlightBackgroundColor: Colors.lightOrange,

        ferias: Colors.lightBlue,
        bancoDeHoras: Colors.lightGreen,
        abono: Colors.lightRed,
        tri: Colors.lightPink,
    },

    light: {
        primaryBackgroundColor: Colors.white,
        secondaryBackgroundColor: Colors.offWhite,

        headerColor: Colors.wine, 
        headerTextColor: Colors.white,
    
        primaryTextColor: Colors.black,
        secondaryTextColor: Colors.white,
    
        highlightBackgroundColor: Colors.lightOrange,

        ferias: Colors.darkBlue,
        bancoDeHoras: Colors.darkGreen,
        abono: Colors.darkRed,
        tri: Colors.darkPink,
    }
}

export default ColorScheme;