import './sass/main.scss'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Info from './pages/Info'
import Contact from './pages/Contact'

import InstaIcon from './components/InstaIcon'
import Gallery from './pages/Gallery'

export const App = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <NavLink to="/inicio" activeClassName="selected">
            <li className="nav__item">Inicio</li>
          </NavLink>

          <NavLink to="/info" activeClassName="selected">
            <li className="nav__item">información</li>
          </NavLink>

          {/* <NavLink to="/galeria" activeClassName="selected">
            <li className="nav__item">galería</li>
          </NavLink> */}

          <NavLink to="/contacto" activeClassName="selected">
            <li className="nav__item">Contacto</li>
          </NavLink>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/inicio"></Redirect>
        </Route>

        <Route path="/inicio">
          <Home />
        </Route>

        <Route path="/info">
          <Info />
        </Route>

        {/* <Route path="/galeria">
          <Gallery />
        </Route> */}

        <Route path="/contacto">
          <Contact />
        </Route>

        <Route path="*">
          <Redirect to="/inicio"></Redirect>
        </Route>
      </Switch>

      <footer className="footer">
        <div className="footer__contact">
          <div className="footer__item">
            <InstaIcon />
          </div>
        </div>

        <p className="footer__title">Huerta Comunitaria</p>

        <p className="footer__copy">&copy; 2021</p>

        <p className="footer__credit">
          Design & Development
          <br></br>
          <a
            className="footer__link"
            target="_blank"
            href="https://axelrasmussen.com"
          >
            axelrasmussen.com
          </a>
        </p>
      </footer>
    </>
  )
}
