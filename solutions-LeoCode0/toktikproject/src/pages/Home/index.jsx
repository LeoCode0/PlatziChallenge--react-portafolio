import React from 'react'
import { CommentsContextProvider } from "../../context/CommentsContext";


import { Layout } from "../../components/Layout";
import { Video } from "../../components/Video";
import { Comments } from "../../components/Comments";

import videoExample from "../../assets/videos/big_buck_bunny.mp4"

export const Home = () => {
  return (
    <Layout>
      <CommentsContextProvider>
          <Video source={videoExample} poster="https://picsum.photos/900" />
          <Comments />
      </CommentsContextProvider>
    </Layout>
  )
}
