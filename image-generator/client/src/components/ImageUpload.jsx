const ImageUpload = ({uploadImage}) => {
  return (
    <p className="upload-text">
        <span>
        <label 
            className="text-decoration-underline" 
            htmlFor="files"
        >
        Or Upload an Image
        </label>
        <input 
            onChange={uploadImage} 
            id="files" 
            type="file" 
            accept="image/*" 
            hidden
        />
        </span>
    </p>
  )
}

export default ImageUpload
