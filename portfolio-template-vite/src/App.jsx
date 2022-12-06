import { ListOfPosts } from "./components/ListOfPosts";
import { ListOfStories } from "./components/ListOfStories";
import { ListOfSocial } from "./components/ListOfSocial";

import styles from "./app.module.css"

function App() {
  return(
    <div className={styles.app} >
      <ListOfStories />
      <ListOfPosts />
      <ListOfSocial />
    </div>
  )
}

export default App
