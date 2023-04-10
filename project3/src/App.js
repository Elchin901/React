import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import MobileApp from 'components/MobileApp'
import Campaigns from 'components/Campaigns'
import Cards from 'components/Cards'
import Categories from 'components/Categories'
import Favorites from 'components/Favorites'
import Footer from 'components/Footer'


function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Categories />
            <Campaigns />
            <Favorites />
            <MobileApp />
            <Cards />
            <Footer />
        </div>

    );
}

export default App;