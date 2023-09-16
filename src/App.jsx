import { Route, Routes, NavLink } from 'react-router-dom'

// views
import { Home } from './views/Home'
import { NotFound } from './views/NotFound'
import { Donate } from './views/Donate'
import { About } from './views/About'
import { Contact } from './views/Contact'

// components
import { Colors } from './components/Colors'

function App () {
  return (
    <>
      <header>
        <h1><NavLink to='/'>Random ONG</NavLink></h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/donate'>Donate</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='theme-color'>
          <Colors />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
