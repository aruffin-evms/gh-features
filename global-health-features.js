const elements = document.querySelectorAll('.observe-element');

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  })
});

elements.forEach(element => {
  observer.observe(element);
});