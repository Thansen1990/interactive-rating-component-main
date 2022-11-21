const rating_selection = document.querySelector('.rating-selection');
const submit_button = document.querySelector('.rating-submit');
const rating_card = document.querySelector('.rating-card');
const thank_you_card = document.querySelector('.thank-you-card');
const final_rating = document.querySelector('#final-rating');


rating_selection.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		[...document.querySelectorAll('.rating-selection button')].map((element) => {
            console.log('pre remove')
			element.classList.remove('rating-selected');
            console.log('hello2')
		});
		e.target.classList.add('rating-selected');
        rating = e.target.innerText
	};
});


submit_button.addEventListener('click', function helloworld(){
    if (rating === null) {
        return
    } else {
        
        rating_card.classList.remove('reveal');
        rating_card.classList.add('hidden');

        thank_you_card.classList.remove('hidden');
        thank_you_card.classList.add('reveal');

        final_rating.innerText = `${rating}`
    };
});




