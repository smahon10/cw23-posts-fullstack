import useQueryComments from "@/hooks/use-query-comments";
import Comment from "./comment";

const Comments = () => {
  const postId = "18";
  const { comments } = useQueryComments(postId);

  return (
    <div className="">
      {comments
        .map((comment) => (
          <div className="ml-5">
            <>Comments!!!!</>
            <Comment comment={comment} key={comment.id} />
          </div>

        ))}
    </div>
  );
};

export default Comments;
