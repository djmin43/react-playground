import EditableComments from "@/app/editable-comments";

const commentsFetch = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["comment 1", "comment 2", "comment 3"]), 2000)
  );

const Comments = async () => {
  const comments = (await commentsFetch()) as string[];

  return <EditableComments comments={comments} />;
};

export default Comments;
