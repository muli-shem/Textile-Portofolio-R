const DesignProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Sustainable Capsule Collection",
      description:
        "A six-piece collection created using only organic and recycled materials, focusing on versatility and longevity.",
      year: "2023",
      imageUrl: "/images/Design1.jpg?height=600&width=800",
    },
    { 
      id: 2,
      title: "Collaborative Runway Show",
      description:
        "Partnered with three other designers to create a cohesive runway collection exploring themes of urban transformation.",
      year: "2022",
      imageUrl: "/images/Design4.jpg?height=600&width=800",
    },
    {
      id: 3,
      title: "Textile Innovation Project",
      description:
        "Developed a series of experimental textiles using natural dyes and unconventional materials, resulting in unique fabric properties.",
      year: "2022",
      imageUrl: "/images/Design5.jpg?height=600&width=800",
    },
    {
      id: 4,
      title: "Adaptive Fashion Line",
      description:
        "Created a collection focused on inclusive design, with adaptable features to accommodate various body types and mobility needs.",
      year: "2021",
      imageUrl: "/images/Design2.jpg?height=600&width=800",
    },
  ]

  return (
    <section id="design-projects" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Design Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={project.id} className="flex flex-col lg:flex-row gap-8">
            <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">{project.year}</div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DesignProjects
