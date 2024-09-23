import { useState } from 'react';
import Modal from './components/Modal';
import Nav from './components/Nav';
import img from './assets/images/hip-hop-shark.png'
import Options from './components/Options';
import Header from './components/Header';
import Search from './components/Search';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [header, setHeader] = useState('Image Generator');

  const selectedOptions = [
    'Blue cow eating pineapples',
    'Shark dancing to hip hop',
    'Baby with pink hair sunbathing',
    'Beach with beautiful mountains in the background',
    'cat meowing',
    'an owl at night'
  ]

  const getImages = async() => {
    try{
      const response = await fetch('http://localhost:8000/api/images', {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
              searchTerm: searchValue
        })
      })
      // const data = await response.json();
      console.log(response);
      // await setImages(data.data);
    }catch(error){
      console.error(error)
    }
  }

  const uploadImage = async(e) => {
    console.log(e.target.files[0])
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setSelectedImage(e.target.files[0])

    try{
      const response = await fetch('http://localhost:8000/api/upload', {
        method: "POST",
        body: formData
      })

      const data = await response.json();
      await setSelectedImage(data);
    }catch(error){
      console.log(error)
    }
    setModalOpen(true);
  }

  const generateVariations = async() => {
    try{
      const response = await fetch('http://localhost:8000/api/variations', {
        method: "POST"
      })
      const data = await response.json();
      await setImages(data.data);
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div>
      <Nav header={header}/>
      <div className="container text-center">
        <Header 
          img={img} 
          header="Select and generate or Type in and generate"
        />
        <Options 
          selectedOptions={selectedOptions} 
          setSearchValue={setSearchValue} 
        />
        <Search 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          getImages={getImages} 
        />
        <ImageUpload 
          uploadImage={uploadImage} 
        />
        <div className="overlay">
          <Modal 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen} 
            setSelectedImage={setSelectedImage} 
            selectedImage={selectedImage}
            generateVariations={generateVariations}
          />
        </div>
        <ImageDisplay images={images} />
      </div>
    </div>
  )
}

export default App

