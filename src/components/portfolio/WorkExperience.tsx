const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: "Design Intern",
      company: "Fashion Studio NYC",
      period: "Summer 2022",
      description:
        "Assisted the design team with collection development, created technical flats, and participated in fittings and production meetings.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      position: "Pattern Making Assistant",
      company: "Atelier Paris",
      period: "Fall 2021",
      description:
        "Worked directly with the head pattern maker to develop and refine patterns for the couture collection, learning specialized techniques for luxury garment construction.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      position: "Textile Research Collaborator",
      company: "Sustainable Fabrics Initiative",
      period: "Spring 2021",
      description:
        "Participated in a research project exploring innovative sustainable textiles, contributing to material testing and application in fashion design.",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="work-experience" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Internship & Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={experience.imageUrl || "/placeholder.svg"}
                alt={`${experience.position} at ${experience.company}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <div className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">{experience.period}</div>
              <h3 className="text-xl font-semibold mb-1 dark:text-white">{experience.position}</h3>
              <h4 className="text-lg mb-3 dark:text-gray-200">{experience.company}</h4>
              <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
