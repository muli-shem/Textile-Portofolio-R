import ImageGallery, { type GalleryImage } from "../ImageGallery"

const Illustrations = () => {
  const sketches: GalleryImage[] = [
    {
      id: 1,
      title: "Evening Gown Concept",
      description: "Initial sketch exploring draping techniques for a formal collection.",
      imageUrl: "/images/gown2.png?height=800&width=600",
    },
    {
      id: 2,
      title: "Casual Wear Series",
      description: "Exploring silhouettes for everyday comfort with an elevated aesthetic.",
      imageUrl: "/images/casual1.png?height=800&width=600",
    },
    {
      id: 3,
      title: "Outerwear Study",
      description: "Conceptual drawings for a winter collection focusing on layering.",
      imageUrl: "/images/outerwear1.png?height=800&width=600",
    },
    {
      id: 4,
      title: "Accessory Designs",
      description: "Complementary pieces designed to enhance the main collection.",
      imageUrl: "/images/accessories.png?height=800&width=600",
    },
  ]

  return (
    <section id="illustrations" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Illustrations & Sketches
      </h2>

      <ImageGallery images={sketches} columns={4} />
    </section>
  )
}

export default Illustrations
