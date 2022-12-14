import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { BlogInterface } from "./pages/BlogInterface";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle /> 
      
      <BlogInterface />
    </ThemeProvider>
  )
}

