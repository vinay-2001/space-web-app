const panoramaImage = new PANOLENS.ImagePanorama("components/images/r.jpeg");
const imgcon = abc.querySelector("img");

const viewer = new PANOLENS.viewer({
    container: imageContainer,
});

viewer.add(panoramaImage);