import Comments from "../comments/comments";
import Post from "./post";
import useQueryPosts from "@/hooks/use-query-posts";

const Posts = () => {
  const { posts } = useQueryPosts();

  return (
    <div className="">
      {posts
        .map((post) => { 
          console.log(post.id )
          return (
          <>
            <Post post={post} key={post.id} />
            { post.id === 18 && <Comments /> }
          </>
        )}
      
      )}
    </div>
  );
};

export default Posts;
