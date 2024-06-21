const postFormHTML = document.getElementById('post-form');
const title = document.getElementById('title');
const body = document.getElementById('body');

const handleSubmit = async (event) => {
    event.preventDefault()

    const postData = {
        title: title,
        body: body,
    };
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
   
    if(response.ok){
        console.log('Enviado');

    }
    else {
        console.log('Error al enviar');
    };
  
//   console.log (postData.title.value)
//   console.log (postData.body.value)

}
postFormHTML.addEventListener('submit', handleSubmit)


