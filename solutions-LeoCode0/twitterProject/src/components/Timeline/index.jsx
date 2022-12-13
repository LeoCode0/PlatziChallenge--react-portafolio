import React, { useContext } from 'react'
import styles from "./styles.module.css"

import { useApi } from "../../hooks/useApi";
import { TwContext } from "../../context/TweetsContext";
import { getRandomNumber } from "../../utilities/getRandomNumber";

import { PublishTweet } from "../PublishTweet";
import { LoadingTweets } from '../LoadingTweets';
import { Tweet } from "../Tweet";

export const Timeline = () => {
  const { data, error, loading } = useApi(`${import.meta.env.VITE_API}/10`)
  const value = useContext(TwContext)
  return (
    <div className={styles.timeline} >
      <PublishTweet />
      {
        value && 
          value.map(tweet =>       
        <Tweet username={tweet.username} name={tweet.name}>
          <p>{tweet.tweet}</p>
          <img src="https://picsum.photos/540" alt="Img" />
        </Tweet> )
      }
      {
        data && 
          data.map(tweet => {
            const random = getRandomNumber()
            return(
              <Tweet username={tweet.author.split(" ")[0]} name={tweet.author}>
                <p>{tweet.quote}</p>
                {
                  random > 3 && <img src="https://picsum.photos/540" alt="Img" />
                }
              </Tweet>
            )       
          }
        )
      }
      {
        loading && <LoadingTweets />
      }
    </div>
  )
}
