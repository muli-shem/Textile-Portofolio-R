const FabricSwatches = () => {
  const fabrics = [
    {
      id: 1,
      name: "Organic Cotton Twill",
      description:
        "Durable and sustainable fabric with a diagonal weave pattern. Used for structured pieces in the collection.",
      properties: "Medium weight, breathable, slight texture",
      imageUrl: "/organiccottontwill.jpg?height=400&width=400",
    },
    {
      id: 2,
      name: "Silk Charmeuse",
      description:
        "Luxurious fabric with a satin finish on one side and matte finish on the other. Perfect for draping and flowing silhouettes.",
      properties: "Lightweight, lustrous, fluid drape",
      imageUrl: "/silkcharmeuse.jpg?height=400&width=400",
    },
    {
      id: 3,
      name: "Merino Wool Blend",
      description: "Fine wool mixed with synthetic fibers for durability and ease of care. Used in outerwear pieces.",
      properties: "Medium weight, warm, slight stretch",
      imageUrl: "/merinowool.jpg?height=400&width=400",
    },
    {
      id: 4,
      name: "Recycled Polyester",
      description:
        "Sustainable fabric made from post-consumer plastic bottles. Used for technical and water-resistant pieces.",
      properties: "Lightweight, durable, quick-drying",
      imageUrl: "/recycledpolyester.jpg?height=400&width=400",
    },
    {
      id: 5,
      name: "Linen Blend",
      description:
        "Natural fiber mixed with cotton for reduced wrinkling while maintaining breathability. Used for summer pieces.",
      properties: "Lightweight, textured, breathable",
      imageUrl: "/linenblend.jpg?height=400&width=400",
    },
    {
      id: 6,
      name: "Japanese Denim",
      description: "Premium selvedge denim with a tight weave and distinctive character. Used for statement pieces.",
      properties: "Heavy weight, durable, develops patina over time",
      imageUrl: "/japanesedenim.jpg?height=400&width=400",
    },
  ]

  return (
    <section id="fabric-swatches" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Fabric Swatches & Textiles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fabrics.map((fabric) => (
          <div
            key={fabric.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex mb-4">
              <div className="w-24 h-24 rounded-md overflow-hidden mr-4">
                <img
                  src={fabric.imageUrl || "/images/Design5.jpg"}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 dark:text-white">{fabric.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{fabric.properties}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{fabric.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FabricSwatches
