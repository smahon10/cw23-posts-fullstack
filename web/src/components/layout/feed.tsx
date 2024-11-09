import AddPost from "./posts/add-post";
import Header from "./header";
import Posts from "./posts/posts";
import { useStore } from "@nanostores/react";
import { $showAddPost, $showAddComment } from "@/lib/store";
import AddComment from "../comments/add-comment";
import Comments from "../comments/comments";

const Feed = () => {
  const showNewPostEditor = useStore($showAddPost);
  const showNewCommentEditor = useStore($showAddComment);

  return (
    <div className="flex flex-col w-full min-h-screen border-x">
      <Header />
      {/* showNewPostEditor && <AddPost /> */}
      {/* <Posts /> */}
      {showNewCommentEditor && <AddComment postId="1" />}
      <Comments postId="1" />
    </div>
  );
};

export default Feed;
