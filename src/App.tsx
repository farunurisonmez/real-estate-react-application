import './App.css';
import {RouterProvider} from "react-router-dom";
import { appRouter } from './AppRouter';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
