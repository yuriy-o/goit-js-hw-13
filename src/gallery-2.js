function markupGallery(data) {
  return data
    .map(
      ({
        largeImageURL,
        tags,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
    <div class="thumb">
      <div class="photo-card">
        <a href="${largeImageURL}" class="gallery__item">
          <img
            src="${webformatURL}"
            alt="${tags}"
            width="300"
            height="300"
            loading="lazy"
            class="gallery__image"
        /></a>
        <div class="info">
          <p class="info-item"><b>Likes </b>${likes}</p>
          <p class="info-item"><b>Views </b>${views}</p>
          <p class="info-item"><b>Comments </b>${comments}</p>
          <p class="info-item"><b>Downloads </b>${downloads}</p>
        </div>
      </div>
    </div>`;
      }
    )
    .join('');
}
async function onLoadMore() {
  // newsApiService.incrementPage();
  // newsApiService
  // const data = await newsApiService.fetchImage();
  try {
    newsApiService.incrementPage();
    const {
      data: { hits, totalHits },
      // console.log(totalHits);
      // renderCard(hits);
      // console.log(newsApiService.page);
      // console.log(totalPages);
    } = await newsApiService.fetchImage();
    renderCard(hits);
    // console.log(newsApiService.page);
    if (newsApiService.page === totalPages) {
      refs.buttonLoad.classList.add('is-hidden');
      Notify.failure(
        'We are sorry, but you have reached the end of search results'
      );
    }
    smoothScroll();
  } catch (error) {
    console.log(error);
  }
}

function smoothScroll() {
  const { height: cardHeight } =
    refs.galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
// const gallery = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   overlayOpacity: 0.8,
//   closeText: '☣',
//   scrollZoom: false,
// });
refs.galleryEl.addEventListener('click', noGalleryContainerClick);
function noGalleryContainerClick(event) {
  event.preventDefault();
  var gallery = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
    animationSpeed: 250,
    overlayOpacity: 0.8,
    closeText: 'x',
    scrollZoom: false,
  });
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
