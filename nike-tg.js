const contactForm = document.getElementById('contact--form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
	e.preventDefault()

	emailjs.sendForm('service_vpnxvcc','template_q1fc6gh','#contact--form','0KdQqaBVjNXYA7JzD')
	.then (() => {

		document.querySelector('.contact__message').style.display = 'block';

		contactMessage.textContent = "Thank you! We'll be in touch soon."

		setTimeout(() => {
			contactMessage.textContent = ''
		}, 10000)
		contactForm.remove()
	})
}

contactForm.addEventListener('submit', sendEmail);


 