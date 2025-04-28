import ImageGallery, { type GalleryImage } from "../ImageGallery"

const FinishedGarments = () => {
  const garments: GalleryImage[] = [
    {
      id: 1,
      title: "Structured Blazer",
      description: "A modern take on the classic blazer with architectural shoulders and clean lines.",
      imageUrl: "/structuredblazer.jpg?height=1200&width=800",
    },
    {
      id: 2,
      title: "Draped Evening Gown",
      description: "Flowing silk gown with asymmetrical draping and subtle texture details.",
      imageUrl: "/DrapedeveDress.jpg?height=1200&width=800",
    },
    {
      id: 3,
      title: "Tailored Trousers",
      description: "High-waisted pants with precision tailoring and subtle pleating details.",
      imageUrl: "/tailoredtrouser.jpg?height=1200&width=800",
    },
    {
      id: 4,
      title: "Statement Coat",
      description: "Oversized wool coat with unique collar construction and hidden closures.",
      imageUrl: "/statementcoat.jpg?height=1200&width=800",
    },
    {
      id: 5,
      title: "Minimalist Dress",
      description: "Clean-lined shift dress with architectural seaming and pocket details.",
      imageUrl: "/minimalisticdress.jpg?height=1200&width=800",
    },
  ]

  return (
    <section id="finished-garments" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Finished Garments / Photoshoots
      </h2>

      <ImageGallery images={garments} columns={3} />
    </section>
  )
}

export default FinishedGarments
