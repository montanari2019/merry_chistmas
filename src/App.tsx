
import imageNatal from "./assets/christmas-celebration-with-decorated-tree.jpg";
import { Snow } from "./components/snow/snow";
import { Titles } from "./components/titles/titles";
import styled from "./styled.module.css";
export function App() {
 

  return (
    <div className={styled.container}>
      <Snow/>
      <div className={styled.sectionImage}>
        <img className={styled.image} src={imageNatal} />
      </div>
      <section className={styled.section}>
        <header className={styled.header}>
          <a target="_blank" href="https://github.com/montanari2019" className={styled.buttonHeader}>
            about the autor
          </a>
          <a target="_blank" href="https://github.com/montanari2019/merry_chistmas" className={styled.buttonHeader}>
            Repository 
          </a>
        </header>

        <Titles/>
      </section>
    </div>
  );
}

