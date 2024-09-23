import { useRef } from 'react';

const Modal = ({setModalOpen, setSelectedImage, selectedImage, generateVariations, modalOpen}) => {
    console.log("Selected Image", selectedImage)
    const ref = useRef(null)

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    }

    const checkSize = () => {
        if(ref.current.width === 256 && ref.current.height === 256){
            generateVariations()
        }

    }
    
    return (
        <div className="modal-test">
            <div onClick={closeModal}>X</div>
            <div className="img-container">
                {selectedImage && 
                    <img ref={ref} src={URL.createObjectURL(selectedImage)}/>
                }
                <button onClick={generateVariations}>Generate</button>
            </div>
        </div>
    )
}

export default Modal
