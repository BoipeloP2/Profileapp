

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
  event.preventDefault();

  // console.log('form submitted');

  const formData= new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  const sendMessage ={
    name,
    email,
    subject,
    message
  };
  console.log(sendMessage);
});