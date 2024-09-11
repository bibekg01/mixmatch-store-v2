import RouterComponent from "./Router"
import ThemeProvider from "./themeProvider"


const App = () => {
  return (
    <>
    <ThemeProvider>
    <RouterComponent/>
    </ThemeProvider>
    </>
  )
}

export default App