async function onLoadMore() {
  newsApiService.incrementPage();
  // newsApiService
        
  await newsApiService
    .fetchImage()
    .then(({ data: { hits, totalHits } }) => {
      console.log(totalHits);
      renderCard(hits);
      console.log(newsApiService.page);
      console.log(totalPages);
      if (newsApiService.page === totalPages) {
        refs.buttonLoad.classList.add('is-hidden');
        Notify.failure(
          'We are sorry, but you have reached the end of search results'
        );
      }
      
    })
    .catch(error => console.log(error));