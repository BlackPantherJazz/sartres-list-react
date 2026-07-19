import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx'
import brooklyn from './assets/brooklyn.jpg'
import vintage from './assets/vintage.jpg'
import './index.css'

const posts = [
  {
    id: 1,
    date: '11/12/20',
    title: 'On the Street in Brooklyn',
    image: brooklyn,
    alt: 'woman in orange dress looking down with blue walls behind her',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eius at illum ut nulla quis iure perferendis quibusdam animi. Cum, minus culpa odio inventore quia laboriosam a iusto molestias veniam!',
  },
  {
    id: 2,
    date: '11/11/20',
    title: 'Vintage in Vogue',
    image: vintage,
    alt: 'three people looking in different directions',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non consectetur odit debitis nam cupiditate fugit et voluptatem inventore labore eligendi fugiat alias, mollitia, vero vitae repellendus earum. Minus, quis.',
  },
]

function App() {
  return (
    <>
      <Header />
      <main>
        {posts.map((post) => (
          <Article
            key={post.id}
            date={post.date}
            title={post.title}
            image={post.image}
            alt={post.alt}
            body={post.body}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App