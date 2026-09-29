import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" width={200}/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="David"
      img="https://pbs.twimg.com/profile_images/2103947483680288768/zUK6HgWR_400x400.jpg"
      tel="+123 456 789"
      email="D@nize.com"
    />
    <Card
      name="Nize"
      img="https://media.licdn.com/dms/image/v2/D4D03AQG4MU9wV9HULQ/profile-displayphoto-crop_800_800/B4DaDfpDdpJEAI-/0/1790458478341?e=1792022400&v=beta&t=h6BuKGQH1u7cYqcXQJnQYorvz6RybMXbfOIeoTJgVes"
      tel="+987 654 321"
      email="nize@yimana.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>
);