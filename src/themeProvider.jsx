import {useState} from 'react'
import ThemeContext from "./themeContext";
import PropsTypes from 'prop-types';
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme)=>{
            return prevTheme === 'light' ? 'dark' : 'light';
        })
        
    }


    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropsTypes.node.isRequired
}


export default ThemeProvider;