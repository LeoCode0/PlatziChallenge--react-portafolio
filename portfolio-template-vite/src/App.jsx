import { Profile } from "./components/Profile";
import { ListOfPosts } from "./components/ListOfPosts";
import { ListOfStories } from "./components/ListOfStories";
import { ListOfSocial } from "./components/ListOfSocial";


import styles from "./app.module.css"

function App() {
  return(
      <div className={styles.app} >
        <Profile />
        <div className={styles.middle} >
          <ListOfStories />
          <ListOfPosts />
        </div>
        <ListOfSocial />
      </div>
  )
}

export default App
