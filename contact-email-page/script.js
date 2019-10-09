const form = document.getElementById('form');
const container = document.querySelector('.contact-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	container.innerHTML = '<p>邮件发送成功. <br /> 我会尽快回复. 😃</p>';
});
