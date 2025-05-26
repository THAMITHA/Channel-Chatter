import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import Demo from "./components/Demo";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "/watch",
      element: <Watchpage/>
    },
    {
      path: "/demo",
      element: <Demo/>
    }
  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter}/>
        {/**
         * 
         * Head
         * Body
         * Sidebar
         *  MenuItems
         * MainContainer
         *  ButtonList
         *  VideoContainer
         *    VideoCard
         *  
         * 
         */}
      </div>
    </Provider>
  );
}

export default App;
