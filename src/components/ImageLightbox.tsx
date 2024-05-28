/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';



function ImageLightbox({ images }: any) {
	const [mainImage, setMainImage] = useState(images[0]);
	const [isZoomed, setIsZoomed] = useState(false);

	const handleThumbnailClick = (image: any) => {
		setMainImage(image);
		setIsZoomed(false);
	};

	const handleMainImageClick = () => {
		setIsZoomed(!isZoomed);
	};




	return (
		<div className="image-lightbox">
			<div className={`main-image ${isZoomed ? 'zoomed' : ''}`} onClick={handleMainImageClick}>
				<img
					crossOrigin="anonymous"
					src={mainImage}
					alt="Main Image"
					className={isZoomed ? 'zoomed-image' : ''}
				/>
			</div>
			<div className="thumbnails">
				{images?.map((image: any, index: any) => (
					<div
						key={index}
						className={`thumbnail ${mainImage === image ? 'active' : ''}`}
						onClick={() => handleThumbnailClick(image)}
					>
						<img
							crossOrigin="anonymous"
							src={image}
							alt={`Thumbnail ${index}`}
							className="thumbnail-image"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ImageLightbox;
