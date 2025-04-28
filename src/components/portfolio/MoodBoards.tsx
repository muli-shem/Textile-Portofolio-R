import ImageGallery, { type GalleryImage } from "../ImageGallery"

const MoodBoards = () => {
  const moodboards: GalleryImage[] = [
    {
      id: 1,
      title: "Urban Minimalism",
      description: "Exploring clean lines and monochromatic palettes inspired by modern city architecture.",
      imageUrl: "/Urbanmini.jpg?height=600&width=800",
    },
    {
      id: 2,
      title: "Natural Textures",
      description: "A study of organic materials and earthy tones drawn from landscapes and natural elements.",
      imageUrl: "/Naturaltexture.jpg?height=600&width=800",
    },
    {
      id: 3,
      title: "Geometric Patterns",
      description: "Investigating the interplay of shapes and repetition in contemporary design.",
      imageUrl: "/geopattern.jpg?height=600&width=800",
    },
  ]

  return (
    <section id="mood-boards" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Mood Boards & Concept Development
      </h2>

      <ImageGallery images={moodboards} columns={3} />
    </section>
  )
}

export default MoodBoards
