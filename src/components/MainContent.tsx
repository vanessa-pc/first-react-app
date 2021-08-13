import Place from "./Place";

function MainContent(): JSX.Element {
  return (
    <section>
      <Place
        title={"A bamboo trail in Kyoto"}
        placeName={"Kyoto"}
        countryName={"Japan"}
        mainImage={
          "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        }
        locationLink={
          "https://www.google.com/maps/place/Kyoto,+Japan/@35.0978739,135.438682,10z/data=!3m1!4b1!4m5!3m4!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489"
        }
        text={"A set of stairs in a peaceful bamboo trail somewhere in Kyoto."}
      />
      <Place
        title={"Seljalandsfoss, A waterfall in Iceland"}
        placeName={"Seljalandsfoss"}
        countryName={"Iceland"}
        mainImage={
          "https://images.unsplash.com/photo-1506261423908-ea2559c1f24c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80"
        }
        locationLink={
          "https://www.google.com/maps/place/Seljalandsfoss,+Iceland/data=!4m2!3m1!1s0x48d71eade8ef2415:0xae01e6205209178d?sa=X&ved=2ahUKEwiTm5vFlq7yAhWjnFwKHSD7C28Q8gF6BAgYEAE"
        }
        text={"A beautiful waterfall located on the South Coast of Iceland"}
      />
      <Place
        title={"Sunset at Venice Beach"}
        placeName={"Los Angeles"}
        countryName={"USA"}
        mainImage={
          "https://images.unsplash.com/photo-1523595857-fe9ee689f76f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        }
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
        mainImage={
          "https://images.unsplash.com/photo-1517926967795-31943e805dae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
        locationLink={"https://www.google.com/maps/@36.4203259,25.4234157,15z"}
        text={
          "A stairway with a panorama over the Aegean sea in Thera Santorini."
        }
      />
    </section>
  );
}

export default MainContent;
