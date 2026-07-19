function Article({ date, title, image, alt, body }) {
  return (
    <article>
      <p className="post-date">{date}</p>
      <h2 className="post-title">{title}</h2>
      <img src={image} alt={alt} />
      <p className="body-copy">{body}</p>
      <p className="continues">
        <a href="#">Continues ...</a>
      </p>
    </article>
  )
}

export default Article