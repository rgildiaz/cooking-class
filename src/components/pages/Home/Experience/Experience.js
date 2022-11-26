import "./Experience.css";

export default function Experience(props) {
  return (
    <section className="experience section">
      <h2 className="section-title">Learn from an expert</h2>
      <div className="section-content-container">
        <div className="section-text">
          <p>Short bio here</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id vestibulum augue, vitae placerat nisi. In
            et nunc nec ex congue viverra. Phasellus sollicitudin elit in orci commodo, blandit sollicitudin ligula
            facilisis. Morbi interdum diam in augue convallis ultrices tempus vitae orci. Morbi convallis, magna vel
            tristique molestie, lorem lectus condimentum sem, nec fermentum justo neque at elit. Sed quis nulla a felis
            ultricies viverra. Phasellus rhoncus vestibulum lorem sed convallis. Vestibulum semper massa sapien, eget
            gravida massa gravida vitae. Aliquam malesuada quam ac eros mattis, quis porttitor sem tincidunt. Quisque
            nec egestas augue.
          </p>

          <p>
            In in mi cursus, rhoncus quam id, convallis lorem. Nunc semper, enim non gravida egestas, turpis leo
            eleifend sem, et aliquet nibh ipsum eget ante. Praesent ac mauris quam. Donec in accumsan magna, non mollis
            augue. Vestibulum justo sem, vehicula at gravida eu, tincidunt sit amet dui. Etiam velit massa, blandit at
            rhoncus a, fringilla eget sapien. Ut dignissim elit elit, hendrerit ultrices orci porta ut. Duis bibendum
            sapien quam, sed consectetur massa luctus vitae. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Cras augue nisi, pharetra nec pretium at, sagittis quis ante. In nunc nulla,
            suscipit vel lacus at, facilisis pharetra enim. Sed felis nunc, tempor ut scelerisque sit amet, suscipit ac
            augue. Pellentesque euismod nisi nisi, et pulvinar nibh pulvinar vitae.
          </p>
        </div>
        <div className="section-image">
          <img alt="headshot" />
        </div>
      </div>
    </section>
  );
}
