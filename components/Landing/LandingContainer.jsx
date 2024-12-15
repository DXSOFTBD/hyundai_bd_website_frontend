import HeroBanner from "./Sections/HeroBanner"
import Products from "./Sections/Products"
import Services from "./Sections/Services"

const LandingContainer = () => {
    return (
        <div>
            <HeroBanner />
            <Services />
            <Products />
        </div>
    )
}

export default LandingContainer