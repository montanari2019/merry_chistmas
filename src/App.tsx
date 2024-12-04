
import imageNatal from "./assets/christmas-celebration-with-decorated-tree.jpg";
import { Snow } from "./components/snow/snow";
import { Titles } from "./components/titles/titles";
import styled from "./styled.module.css";
function App() {
 

  return (
    <div className={styled.container}>
      <Snow/>
      <div className={styled.sectionImage}>
        <img className={styled.image} src={imageNatal} />
      </div>
      <section className={styled.section}>
        <header className={styled.header}>
          <a target="_blank" href="#" className={styled.buttonHeader}>
            about the autor
          </a>
          <a target="_blank" href="#" className={styled.buttonHeader}>
            Repository code
          </a>
        </header>

        <Titles/>
      </section>
    </div>
  );
}

export default App;
