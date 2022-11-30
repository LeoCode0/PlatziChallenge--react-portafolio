import { Video } from "./components/Video";
import { Layout } from "./components/Layout";
import { Comments } from "./components/comments";

import videoExample from "./assets/videos/big_buck_bunny.mp4"

function App() {
  return (
    <Layout>
      <Video source={videoExample} poster="https://picsum.photos/900" />
      <Comments />
    </Layout>      
  );
}

export default App;
