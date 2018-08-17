import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';

import Events from './events/Events';
import NotFound from './not-found/NotFound';
import Home from './home/Home';
import Settings from './settings/Settings';
import Login from './login/Login';

const App = () => {
    return (
      <Router>
        <div>
        <ul>
          <li>
            <NavLink to={'/'} activeStyle={{fontWeight: 'bold'}} exact>
              Strona główna
            </NavLink>
          </li>
          <li>
            <NavLink to={'/events'} activeStyle={{fontWeight: 'bold'}} exact>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to={'/about'} activeStyle={{fontWeight: 'bold'}}>
            O nas
            </NavLink>
          </li>
          <li>
            <NavLink to={'/settings'} activeStyle={{fontWeight: 'bold'}}>
              Settings
            </NavLink>
          </li>
        </ul>
        <Switch>
        {/* exact - czyli sprawdza Regexem czy pasuje dokładnie do "/" (warunku nie spełniają np: "/second") */}
        <Route path="/about" render={()=> 
            <div>
              <h2>About Us</h2>
              <p>
                Exercitation in minim eiusmod mollit velit. Ad ipsum nulla mollit proident sit nulla exercitation consequat dolore laboris 
                cupidatat nostrud sit ullamco. Pariatur anim ad ut reprehenderit nulla officia. Deserunt nulla qui commodo in laborum. 
                Ex eu nostrud culpa occaecat pariatur enim adipisicing commodo ullamco consectetur laboris sit minim.

                Dolor proident ut qui in sint labore anim cillum consequat fugiat. Ex veniam amet nulla irure fugiat officia sint nulla laborum 
                ullamco amet nostrud do. Cupidatat fugiat officia proident qui Lorem sint sit velit aliqua quis laborum aute. 
                Dolore culpa sit nostrud cillum. Duis elit non sunt aliquip ex. Qui tempor et sint enim. Magna ex magna labore voluptate proident.

                Ut veniam ipsum enim in quis. Fugiat elit eu quis tempor voluptate qui incididunt exercitation ullamco anim elit qui. 
                Aliquip ad proident elit duis commodo ad esse nostrud. Aute irure in ea laborum ullamco. Ipsum excepteur est excepteur labore 
                fugiat est minim ipsum. Qui veniam proident aliquip sit nulla duis officia id adipisicing Lorem pariatur id incididunt ut.
              </p>
            </div>
        } />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />
          <Redirect from='/settings' to='/login'/>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>  
    )
}

export default App;