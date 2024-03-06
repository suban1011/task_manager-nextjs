import BannerSection from "@/components/homepage/BannerSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";


export const metadata = {
  title: "Home: Work Manager",

};
export default function Home() {
  return (
    <>

      <BannerSection />
      <FeatureSection />
      <TestimonialSection />
      <ContactForm />
    </>
  )

}
