const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = 'd:/Desktop/tour/public';
const images = [
    'aswan.jpg',
    'grand museum.jpg',
    'guide.jpg',
    'karnk temple.jpg',
    'luxor.jpg',
    'pyramids.jpg',
    'sharm.jpg',
    'siwa.jpg',
    'valley of kings.jpg'
];

async function optimize() {
    for (const image of images) {
        const inputPath = path.join(publicDir, image);
        const outputPath = path.join(publicDir, image.replace(/\.(jpg|jpeg|png)$/, '.webp'));
        
        console.log(`Optimizing ${image} -> ${path.basename(outputPath)}`);
        
        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .resize({ width: 1200, withoutEnlargement: true })
                .toFile(outputPath);
            console.log(`Done: ${image}`);
        } catch (err) {
            console.error(`Error optimizing ${image}:`, err);
        }
    }
}

optimize();
