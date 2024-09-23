const ImageDisplay = ({images}) => {
  return (
    <section className="gpt-image-image">
        {images && images.map((image, _index) => {
        return <img key={_index} src={image.url} />
        })}
    </section>
  )
}

export default ImageDisplay
