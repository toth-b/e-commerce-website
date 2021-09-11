import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import {Container} from 'react-bootstrap'
// Library Core:
import {library} from '@fortawesome/fontawesome-svg-core'
// Brand Icons:
import {fab} from '@fortawesome/free-brands-svg-icons'
// FontAwesome icons used in the project:
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons'
// Collect the icons into the library:
library.add(fab, faShoppingCart, faUser)

function App() {
    return (
        <div>
            <Header/>
            <main className="py-3">
                <Container>
                    <HomePage/>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default App
