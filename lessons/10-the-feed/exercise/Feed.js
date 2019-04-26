import React, { useState, useEffect } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts  } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

function Feed() {
  const [posts, setPosts] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [pivotTime, setPivotTime] = useState(Date.now())
  const [createdBefore ] = useState(Date.now())
  const [limit, setLimit] = useState(3)

  const handleViewNewPosts = () => {
    setPosts(newPosts.concat(posts))
    setNewPosts([])
    setPivotTime(Date.now())
    setLimit(limit + newPosts.length)
  }

  useEffect(() => {
    return subscribeToNewFeedPosts(pivotTime, newPosts =>{
      setNewPosts(newPosts)
    })
  }, [])

  useEffect(() => {
    let isCurrent = true
    loadFeedPosts(createdBefore, limit).then(posts => {
      setPosts(posts)
    })
    return () => isCurrent = false
  }, [createdBefore, limit])
  
  return (
    <div className="Feed">
      {newPosts.length > 0 &&  (
        <div className="Feed_button_wrapper">
          <button
            onClick = {handleViewNewPosts}
            className="Feed_new_posts_button icon_button">
            View {newPosts.length} New Posts
          </button>
        </div>
      )}
      {posts.map(post =>(
        <FeedPost key={post.id} post={fakePost} />
      ))}

      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button">View More</button>
      </div>
    </div>
  )
}

// you can delete this
const fakePost = {
  createdAt: Date.now() - 10000,
  date: "2019-03-30",
  message: "Went for a run",
  minutes: 45,
  uid: "0BrC0fB6r2Rb5MNxyQxu5EnYacf2"
}
