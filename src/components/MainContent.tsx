import Place from "./Place";

import kyoto from '../../src/images/kyoto.jpg'
import seljalandsfoss from '../../src/images/seljalandsfoss.jpeg'
import santorini from '../../src/images/santorini.jpeg'
import veniceBeach from '../../src/images/venice_beach.jpeg'

function MainContent(): JSX.Element {
  return (
    <section>
      <Place
        title={"A bamboo trail in Kyoto"}
        placeName={"Kyoto"}
        countryName={"Japan"}
        mainImage={kyoto}
        locationLink={
          "https://www.google.com/maps/place/Kyoto,+Japan/@35.0978739,135.438682,10z/data=!3m1!4b1!4m5!3m4!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489"
        }
        text={"A set of stairs in a peaceful bamboo trail somewhere in Kyoto."}
      />
      <Place
        title={"Seljalandsfoss, A waterfall in Iceland"}
        placeName={"Seljalandsfoss"}
        countryName={"Iceland"}
        mainImage={seljalandsfoss}
        locationLink={
          "https://www.google.com/maps/place/Seljalandsfoss,+Iceland/data=!4m2!3m1!1s0x48d71eade8ef2415:0xae01e6205209178d?sa=X&ved=2ahUKEwiTm5vFlq7yAhWjnFwKHSD7C28Q8gF6BAgYEAE"
        }
        text={"A beautiful waterfall located on the South Coast of Iceland"}
      />
      <Place
        title={"Sunset at Venice Beach"}
        placeName={"Los Angeles"}
        countryName={"USA"}
        mainImage={veniceBeach}
        locationLink={
          "https://www.google.com/maps/@33.9874948,-118.4967346,13z"
        }
        text={
          "A beautiful sunset at the backdrop of palm trees down in Venice Beach"
        }
      />
      <Place
        title={"Santorini views"}
        placeName={"Santorini"}
        countryName={"Greece"}
        mainImage={santorini}
        locationLink={"https://www.google.com/maps/@36.4203259,25.4234157,15z"}
        text={
          "A stairway with a panorama over the Aegean sea in Thera Santorini."
        }
      />
    </section>
  );
}

export default MainContent;
