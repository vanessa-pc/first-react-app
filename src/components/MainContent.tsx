import Place from "./Place"
import kyoto from "../../images/kyoto.jpg"

function MainContent(): JSX.Element{
    return(
        <section>
            <Place
            title={"A bamboo trail in Kyoto"}
            placeName={"Kyoto"}
            countryName={"Japan"}
            mainImage={"kyoto"}
            locationLink={"https://www.google.com/maps/place/Kyoto,+Japan/@35.0978739,135.438682,10z/data=!3m1!4b1!4m5!3m4!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489"}
            text={"A set of stairs in a peaceful bamboo trail somewhere in Kyoto."}
            />
            {/* <Place
            title={}
            placeName={}
            countryName={}
            mainImage={}
            locationLink={}
            text={}
            />
            <Place
            title={}
            placeName={}
            countryName={}
            mainImage={}
            locationLink={}
            text={}
            />
            <Place
            title={}
            placeName={}
            countryName={}
            mainImage={}
            locationLink={}
            text={}
            /> */}
        </section>
    );
}

export default MainContent;