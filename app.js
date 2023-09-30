
const API_KEY = "INSERT KEY HERE"
const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector('input')
const imageSection = document.querySelector('.images-section')
const getImages = async() => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: "1024x1024"
        })

    }
    try{
       const response = await fetch('https://api.openai.com/v1/images/generations',options)
      const data =  await response.json()
      data?.data.forEach(imageObject =>  {
           
            const ImageContainer = document.createElement('div')
            ImageContainer.classList.add('image-container')
          const imageElenment =  document.createElement('img')
          imageElenment.setAttribute('src', imageObject.url)
          ImageContainer.append(imageElenment)
          imageSection.append(ImageContainer)
        })

    } catch(error){
        console.error(error)
    }
}

submitIcon.addEventListener('click', getImages)
