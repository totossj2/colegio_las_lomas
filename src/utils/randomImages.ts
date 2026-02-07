// Utility function to get random images from images_general folder
export function getRandomImages(
  count: number = 1
): Array<{ src: string; alt: string; title?: string; description?: string }> {
  // List of all images in the images_general folder
  const imageFiles = [
    'PHOTO-2025-08-12-14-12-15.webp',
    'PHOTO-2025-08-12-14-13-01.webp',
    'PHOTO-2025-08-12-14-16-46.webp',
    'PHOTO-2025-08-12-14-17-02.webp',
    'PHOTO-2025-08-12-14-18-45.webp',
    'PHOTO-2025-08-12-14-18-55.webp',
    'PHOTO-2025-08-12-14-23-09.webp',
    'PHOTO-2025-08-12-14-25-33.webp',
    'PHOTO-2025-08-12-17-09-33.webp',
    'PHOTO-2025-08-12-17-12-07.webp',
    'PHOTO-2025-08-27-13-36-33.webp',
    'PHOTO-2025-08-27-13-39-59.webp',
    'PHOTO-2025-08-27-13-42-19.webp',
    'PHOTO-2025-08-27-13-43-07.webp',
    'PHOTO-2025-08-27-13-46-43.webp',
    'PHOTO-2025-08-27-13-47-08.webp',
    'PHOTO-2025-08-27-13-47-39.webp',
    'PHOTO-2025-08-27-13-50-18.webp',
    'PHOTO-2025-08-27-13-51-33.webp',
    'PHOTO-2025-08-27-13-52-12.webp',
    'PHOTO-2025-08-27-13-53-07.webp',
    'PHOTO-2025-08-27-13-53-41.webp',
  ];

  // Shuffle the array to get random order
  const shuffled = [...imageFiles].sort(() => Math.random() - 0.5);

  // Take the requested number of images
  const selectedImages = shuffled.slice(0, count);

  // Return the images with proper structure
  return selectedImages.map((filename) => ({
    src: `/images_general/${filename}`,
    alt: 'Colegio Las Lomas - Actividades y vida escolar',
    title: 'Colegio Las Lomas',
    description: 'Descubrí nuestra propuesta educativa integral',
  }));
}
