const imagePreloader = (url: string) => {
    const img = new Image();
    img.src = url;
    return img
}

const preloadImages = (...allImages: Array<Array<string>>) => {
    const images = []
    let c = 0

    for (let i = 0; i < allImages.length; i++) {
        for (let j = 0; j < allImages[i].length; j++) {
            images[c] = imagePreloader(allImages[i][j])
            c++
        }
    }

    return images
}

export { imagePreloader, preloadImages }
