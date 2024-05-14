import ImageComponent from "./components/ImagemComponent";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function Home() {

  // Tipagem de variaveis
  const string = 'sajsdaiojisoadjiopsadasjio'
  const number = 1839218731278093120789
  const boolean = true // verdadeiro ou false = true or false
  

  return (
    <main>
      <Navbar />
      <ImageComponent />
      <div>BARRA DE PESQUISA</div>
      <div>LINKS</div>
    </main>
  );
}
