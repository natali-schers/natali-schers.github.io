import "./About.css";
import SectionLabel from "../SectionLabel/SectionLabel";

export default function About() {
  return (
    <section className="about section" id="about">
      <div >
        <div>
           <SectionLabel number="01">Sobre mim</SectionLabel>
        </div>
        <div className="about-layout">
          <img
            src="https://natali-schers.github.io/images/natali-schers.png"
            className="profile-picture"
          />
          <div className="about-copy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna quam, vulputate ac consectetur vitae, imperdiet ac massa. Duis semper in libero a lacinia. Nunc elementum velit et odio ornare aliquet. In vehicula fermentum turpis, nec vestibulum nisi aliquet non. Nulla facilisi.
            </p>
            <p>
              Donec justo felis, at lorem at. Class aptent ad litora torquent per conubia nostra, per inceptos himenaeos.Nec accumsan sapien sapien non arcu. Proin gravida nisi magna, sed ullamcorper risus interdum in. Maecenas dignissim felis eu erat fermentum, ac dictum ante commodo.
            </p>
            <p>
              Vivamus vulputate egestas nisl, at consequat elit gravida quis. Sed pulvinar sem eget velit elementum, vitae feugiat tellus ornare. Duis tincidunt vulputate lorem, aliquet commodo nibh gravida eget. Aenean ac quam vitae leo viverra pretium quis et odio. Vivamus nec lectus pharetra iaculis ex. Donec et quam non ex condimentum pellentesque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
