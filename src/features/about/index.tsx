import Section from "@/common/components/section";
import HorizontalProfileCard from "./profile-card";

const About = () => {
  return (
    <section>
      <div className="bg-blue-100 p-4 rounded-md text-center mb-5">
        Hello i'm an indie <b>Software Engineer </b> based in VietNam!
      </div>
      <HorizontalProfileCard />
      <Section title="Bio.">
        Test
      </Section>
    </section>
  )
}

export default About

