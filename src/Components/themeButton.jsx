import ThemeContext from "../themeContext";
import { useContext } from 'react';
import darkMode from '../assets/darkmode/dark-mode-button.png';
import lightMode from '../assets/darkmode/light-mode-button.png'


const ThemeButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <>
        <div className='hidden sm:block '>
            <button onClick={toggleTheme} className="cursor-pointer">
                {theme === 'light' ? (
                    <img src={darkMode} alt="" className="w-14"/>
                )
                : (
                    <img src={lightMode} alt="" className="w-14"/>
                ) }
                
            </button>
        </div>

        </>
    )

}

export default ThemeButton;