import React, { lazy, Suspense } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import Pie3D from './common/chart/charts/pie';
import { districts } from './districts.js';


let store = createStore(rootReducer, applyMiddleware(thunk));

const DATA = [
  { value: 5, label: 'Apples' },
  { value: 8, label: 'Oranges' },
  { value: 3, label: 'Bananas' },
  { value: 5, label: 'Plums' },
  { value: 2, label: 'Pineapples' },
  { value: 3, label: 'Lemons' },
]

// const config = {
//   angle,
//   height,
//   ir,
//   moveDistance,
//   showTooltips,
//   size,
//   stroke,
//   strokeWidth,
//   tooltipShowName,
//   tooltipShowPercentage,
//   tooltipShowValue,
// }

function getData() {

  var xmlText = districts;
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlText, "text/xml");
  console.log(xmlDoc);
  // var users = xml.getElementsByTagName("user");
  // for (var i = 0; i < users.length; i++) {
  //   var user = users[i];
  //   var names = user.getElementsByTagName("name");
  //   for (var j = 0; j < names.length; j++) {
  //     alert(names[j].childNodes[0].nodeValue);
  //   }
  // }
}
function App() {
  getData();
  const Shell = lazy(() => import('./shell/containers/Shell'));
  return (
    <Suspense
      fallback={<div
        style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
        Loading....
    </div>}>
      <div className="App">
        <Provider store={store}>
          <Shell/>
        </Provider>

      </div>
    </Suspense>
  );
}

export default App;
