const stars = document.querySelectorAll('.rating-stars i');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const ratingValue = star.getAttribute('data-value');
    ratingInput.value = ratingValue;

    stars.forEach(s => {
      if (s.getAttribute('data-value') <= ratingValue) {
        s.classList.add('rated');
      } else {
        s.classList.remove('rated');
      }
    });
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;

  console.log("Form submitted by:", name);
  console.log("Rating given:", rating);

  document.querySelector('.contact-form').reset();
  stars.forEach(s => s.classList.remove('rated'));
  document.getElementById('rating').value = "0";
  document.getElementById('thankyou-message').style.display = 'block';
}
