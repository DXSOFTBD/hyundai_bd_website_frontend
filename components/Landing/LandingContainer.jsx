import Faq from "./Sections/Faq"
import HeroBanner from "./Sections/HeroBanner"
import Products from "./Sections/Products"
import Services from "./Sections/Services"
import NewsletterSection from "./Sections/StayConnect"
import WhyChooseUs from "./Sections/WhyChooseMe"

const LandingContainer = () => {
    return (
        <div>
            <HeroBanner />
            <Services />
            <Products />
            <WhyChooseUs />
            <Faq />
            <NewsletterSection />
        </div>
    )
}

export default LandingContainer