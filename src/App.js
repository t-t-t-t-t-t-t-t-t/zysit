import { Navigator } from "./compoents/Navigator/Navigator";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Cases } from "./pages/Cases/Cases";
import { Home } from "./pages/Home/Home";
import { News } from "./pages/News/News";
import { Production } from "./pages/Production/Production";
import { Serve } from "./pages/Serve/Serve";
import { Solution } from "./pages/Solution/solution";

import { useEffect, useRef, useState } from "react";
function App() {
  // 获取页面的高
  const navigatorDom = useRef(null)
  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerHeight, innerWidth }
  }
  const [WindowSize, setWindowSize] = useState(getWindowSize())
  const [bodyHeight, setBodyHeight] = useState(WindowSize.innerHeight - 70)
  const [NavigatorHeight, setNavigatorHeight] = useState(0)
  useEffect(() => {
    console.log(navigatorDom)
    setWindowSize(getWindowSize())
    setNavigatorHeight(navigatorDom.current.offsetHeight)
    setBodyHeight(WindowSize.offsetHeight - navigatorDom.current.offsetHeight)

  }, [])
  return (
    <div className="App">
      <Navigator ref={navigatorDom}></Navigator>
      <div className="Body"
        style={{ position: 'relative', top: NavigatorHeight, height: bodyHeight }}>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/cases" Component={Cases}></Route>
          <Route path="/news" Component={News}></Route>
          <Route path="/product" Component={Production}></Route>
          <Route path="/serve" Component={Serve}></Route>
          <Route path="/solution" Component={Solution}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
