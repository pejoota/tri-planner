import * as Font from 'expo-font';
import Fonts from '../constants/fonts/fonts';

const loadFontsAsync = async () => {
    await Font.loadAsync(Fonts);
}

export default loadFontsAsync