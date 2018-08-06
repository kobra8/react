import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';


const App = () => {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Events} />
        {/* exact - czyli robi match dokładnie tego routa "/" (warunku nie spełniają np: "/second") */}
        <Route path="/details/:eventId" component={Details} />
        </div>
      </Router>  
    )
}

export default App;