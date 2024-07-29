/*First Example*/
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <div className="title">First</div>
//       <div className="title">Second</div>
//       <div className="title">Third</div>
//       <div className="title">Fourth</div>

//     </div>
    
//   );
// }

// export default App;

/*second example*/

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="item header">Header</div>
      <div className="content">
        <div className="item sidebar">Sidebar</div>
        <div className="item main">Main Content</div>
      </div>
      <div className="item footer">Footer</div>
    </div>
  );
}

export default App;
