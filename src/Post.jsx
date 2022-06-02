export function Post({author = "User", content = "Welcome user!"}) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}
