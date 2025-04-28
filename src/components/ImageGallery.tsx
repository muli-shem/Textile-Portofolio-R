"use client"

import { useState } from "react"
import { X } from "lucide-react"


export interface GalleryImage {
  id: number
  title: string
  description?: string
  imageUrl: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: number
}

const ImageGallery = ({ images, columns = 3 }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const getColumnClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-1 md:grid-cols-2"
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <>
      <div className={`grid ${getColumnClass()} gap-6`}>
        {images.map((image) => (
          <div key={image.id} className="group cursor-pointer" onClick={() => openLightbox(image)}>
            <div className="overflow-hidden rounded-lg mb-4 bg-gray-50 dark:bg-gray-800">
              <img
                src={image.imageUrl || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 dark:text-white">{image.title}</h3>
            {image.description && <p className="text-gray-600 dark:text-gray-400 text-sm">{image.description}</p>}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.imageUrl || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                {selectedImage.description && <p className="text-gray-300">{selectedImage.description}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
