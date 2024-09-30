document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async(event) =>{
        event.preventDefault();

        const textValue = document.getElementById('text').value;
        const emailValue = document.getElementById('email')?.value;

        const formData = {
            text: textValue,
            email: emailValue
        }

        console.log('Dados coletados ', formData);

        const response = await fetch('https://www.exemplo.com/cadastro',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
            })
        });
});
