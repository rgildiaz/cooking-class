import img from "../../assets/img/test1.jpeg"

export default function Landing(props) {
  return (
    <div class="landing">
      <div class="left-side">
        <div class="image">
          <img src={img} alt=""/>
          <figcaption>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id vestibulum augue, vitae placerat nisi.
          </figcaption>
        </div>
      </div>
      <div class="text">
        <h1>This is the Title</h1>
      </div>
    </div>
  );
}
