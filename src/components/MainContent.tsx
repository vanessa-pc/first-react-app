import Place from "./Place";

import kyoto from '../../src/images/kyoto.jpg'
import seljalandsfoss from '../../src/images/seljalandsfoss.jpeg'
import santorini from '../../src/images/santorini.jpeg'
import veniceBeach from '../../src/images/venice_beach.jpeg'

const kyotoArray = [
  {
    title: "A bamboo trail in Kyoto",
    placeName: "Kyoto",
    countryName: "Japan",
    mainImage: kyoto,
    locationLink: "https://www.google.com/maps/place/Kyoto,+Japan/@35.0978739,135.438682,10z/data=!3m1!4b1!4m5!3m4!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489",
    text: "A set of stairs in a peaceful bamboo trail somewhere in Kyoto."
  } 
];
const seljalandsfossArray = [
{
  title: "Seljalandsfoss, A waterfall in Iceland",
  placeName: "Seljalandsfoss",
  countryName: "Iceland",
  mainImage: seljalandsfoss,
  locationLink: "https://www.google.com/maps/place/Seljalandsfoss,+Iceland/data=!4m2!3m1!1s0x48d71eade8ef2415:0xae01e6205209178d?sa=X&ved=2ahUKEwiTm5vFlq7yAhWjnFwKHSD7C28Q8gF6BAgYEAE",
  text: "A beautiful waterfall located on the South Coast of Iceland"
}
]  
const veniceBeachArray = [
{
  title: "Sunset at Venice Beach",
  placeName: "Los Angeles",
  countryName: "USA",
  mainImage: veniceBeach,
  locationLink: "https://www.google.com/maps/@33.9874948,-118.4967346,13z",
  text: "A beautiful sunset at the backdrop of palm trees down in Venice Beach"
}
];
const santoriniArray = [
{
  title: "Santorini views",
  placeName: "Santorini",
  countryName: "Greece",
  mainImage: santorini,
  locationLink: "https://www.google.com/maps/@36.4203259,25.4234157,15z",
  text: "A stairway with a panorama over the Aegean sea in Thera Santorini."
}
];

function MainContent(): JSX.Element {
  return (
    <section>
      {kyotoArray.map(function (kyoto) {
        return (
          <Place
            key={kyoto.title}
            title={kyoto.title}
            placeName={kyoto.placeName}
            countryName={kyoto.countryName}
            mainImage={kyoto.mainImage}
            locationLink={kyoto.locationLink}
            text={kyoto.text}
            className="Place"
          />
        );
      })};
      {seljalandsfossArray.map(function (seljalandsfoss){
        return (
          <Place
            key={seljalandsfoss.title}
            title = {seljalandsfoss.title}
            placeName={seljalandsfoss.placeName}
            countryName={seljalandsfoss.countryName}
            mainImage={seljalandsfoss.mainImage}
            locationLink={seljalandsfoss.locationLink}
            text={seljalandsfoss.text}
            className="Place"
          />
        );
      })};
      {veniceBeachArray.map(function (venice){
        return (
          <Place
            key={venice.title}
            title = {venice.title}
            placeName={venice.placeName}
            countryName={venice.countryName}
            mainImage={venice.mainImage}
            locationLink={venice.locationLink}
            text={venice.text}
            className="Place"
          />
        );
      })};
      {santoriniArray.map(function (santorini){
        return (
          <Place
            key={santorini.title}
            title = {santorini.title}
            placeName={santorini.placeName}
            countryName={santorini.countryName}
            mainImage={santorini.mainImage}
            locationLink={santorini.locationLink}
            text={santorini.text}
            className="Place"
          />
        );
      })};
    </section>
  );
}

export default MainContent;