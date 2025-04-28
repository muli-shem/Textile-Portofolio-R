const GarmentConstruction = () => {
  const constructionSteps = [
    {
      id: 1,
      title: "Pattern Development",
      description: "Creating and refining patterns based on design sketches and measurements.",
      imageUrl: "/images/Pattern1.png?height=600&width=800",
    },
    {
      id: 2,
      title: "Fabric Cutting",
      description: "Precision cutting of fabric pieces according to pattern specifications.",
      imageUrl: "/images/Pattern2.png?height=600&width=800",
    },
    {
      id: 3,
      title: "Initial Assembly",
      description: "Basting and preliminary construction to test fit and structure.",
      imageUrl: "/images/Pattern3.png?height=600&width=800",
    },
    {
      id: 4,
      title: "Detail Work",
      description: "Adding specialized elements such as pockets, collars, and closures.",
      imageUrl: "/images/Pattern4.png?height=600&width=800",
    },
    {
      id: 5,
      title: "Fitting and Adjustments",
      description: "Testing the garment on a model and making necessary modifications.",
      imageUrl: "/images/Pattern5.png?height=600&width=800",
    },
    {
      id: 6,
      title: "Final Construction",
      description: "Completing all seams, finishes, and details to create the finished piece.",
      imageUrl: "/images/Pattern6.png?height=600&width=800",
    },
  ]

  return (
    <section id="garment-construction" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Garment Construction Process
      </h2>

      <div className="space-y-12">
        {constructionSteps.map((step, index) => (
          <div key={step.id} className="flex flex-col md:flex-row items-center gap-8">
            <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={step.imageUrl || "/placeholder.svg"}
                alt={step.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-semibold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold dark:text-white">{step.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GarmentConstruction
