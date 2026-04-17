import imagem1 from './assets/heart.png'
import imagem2 from './assets/arrow.png'
import './App.css'

export default function App() {
  
  return (
    <>
      
    <main>
      <header>
        <img  src={imagem1} alt="" className='icone1'/>
        <img src={imagem2} alt=""  className='icone'/>
      </header>

      <section>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <h1>Blazer Ane</h1>
          <h2>R$250</h2>
          <p></p>
        </div>
        
      </section>

      <footer>
        <button>ADICIONAR NO CARRINHO</button>
      </footer>
    </main>
    
    </>
  )
}


