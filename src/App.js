import React from "react"
import {MuiThemeProvider,createMuiTheme} from "@material-ui/core"
import Navbar from "./Components/Navbar/Navbar"
import colors from "./colors"
import BottomPanel from "./Components/BottomPanel/BottomPanel"
import PatientsLeftPane from "./Components/PatientsLeftPane/PatientsLeftPane"
import PatientInfoRightPane from "./Components/PatientInfoRightPane/PatientInfoRightPane"
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      dark:colors.primary.dark,
      
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
    },
  },

});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Navbar />
      <PatientsLeftPane/>
      <PatientInfoRightPane />
      <BottomPanel />
     
      </div>
    </MuiThemeProvider>
  );
}

export default App;
