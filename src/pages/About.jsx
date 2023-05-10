import Banner from '../components/Banner'
import bannerAbout from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Collapse from '../components/Collapse'
import infoAbout from '../infoAbout.json'

function About() {
    return (
        <>
            <Banner src={bannerAbout} alt={'bannière'} />
            <div>
                {infoAbout.map((about) => (
                    <Collapse
                        key={about.id}
                        title={about.title}
                        description={about.description}
                    />
                ))}
            </div>
        </>
    )
}

export default About
