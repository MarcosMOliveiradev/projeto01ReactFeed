import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./app.module.css"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Marcos Monteiro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam quibusdam quaerat ipsam, repudiandae voluptates quisquam! Ratione in sapiente, amet quos animi sunt asperiores, neque consequuntur facilis nostrum explicabo minima."
          />

          <Post 
            author="Guilher da Silva"
            content="Eu to tiltado cara?"
          />
        </main>
      </div>
    </div>
  )
}
