

document.addEventListener('DOMContentLoaded', function () {
    // get all image selection links
    const imageLinks = document.querySelectorAll('.img-select a');

    // add click event listeners to each image
    imageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // prevent the default link behavior

            const imgUrl = link.getAttribute('data-url'); // get the image URL from the data attribute
            const productId = link.getAttribute('data-product-id'); // get the product ID from the data attribute

            // find the correct image container for the selected product
            const selectedImage = document.querySelector(`#selected-image-${productId}`);

            if (selectedImage) {
                selectedImage.src = imgUrl; // update the selected image's src
            }
        });
    });
});
