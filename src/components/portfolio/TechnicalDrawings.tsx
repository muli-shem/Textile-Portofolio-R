const TechnicalDrawings = () => {
  const technicalDrawings = [
    {
      id: 1,
      title: "Structured Blazer",
      description: "Front and back technical flats with construction details.",
      imageUrl: "/images/Design5.jpg?height=600&width=800",
    },
    {
      id: 2,
      title: "Pleated Skirt",
      description: "Technical drawing showing pleat placement and waistband construction.",
      imageUrl: "/images/Design5.jpg?height=600&width=800",
    },
    {
      id: 3,
      title: "Draped Blouse",
      description: "Flat sketch with draping details and sleeve construction.",
      imageUrl: "/images/Design5.jpg?height=600&width=800",
    },
    {
      id: 4,
      title: "Tailored Trousers",
      description: "Technical drawing with pocket placement and fit details.",
      imageUrl: "/images/Design5.jpg?height=600&width=800",
    },
  ]

  return (
    <section id="technical-drawings" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Technical Drawings (Flats)
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {technicalDrawings.map((drawing) => (
          <div
            key={drawing.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <img
                src={drawing.imageUrl || "/images/Design4.jpg"}
                alt={drawing.title}
                className="w-full h-64 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{drawing.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{drawing.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalDrawings
