import Image from "next/image";

const imagePreloader = (url: string) => {
    const img = <>
        <Image
            src={`${url}`}
            alt={""}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
            priority={true}
            style={{
                objectFit: "cover",
                borderRadius: "6px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "none"
            }}
        />
    </>
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
