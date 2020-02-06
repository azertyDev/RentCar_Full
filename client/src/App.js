import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
const Routes = lazy(() => import("./routes"));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Routes />
        </Suspense>
      </Provider>
    );
  }
}

export default App;
