interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  mainImage: string; // maybe URL next
  locationLink: string; // maybe URL next
  text: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <>
      <img src={props.mainImage}></img>
      <h2>{props.title}</h2>
      <h3>
        {props.placeName}, {props.countryName} (
        <a href={props.locationLink}>map link</a>)
      </h3>
      <p> {props.text} </p>
    </>
  );
}

export default Place;
