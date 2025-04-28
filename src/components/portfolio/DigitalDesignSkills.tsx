const DigitalDesignSkills = () => {
  const digitalSkills = [
    {
      id: 1,
      title: "3D Garment Visualization",
      description: "Digital prototyping using CLO 3D to visualize designs before physical sampling.",
      imageUrl: "/images/Design8.jpg?height=600&width=800",
    },
    {
      id: 2,
      title: "Digital Illustration",
      description: "Fashion illustrations created in Procreate and Adobe Illustrator.",
      imageUrl: "/images/Design7.jpg?height=600&width=800",
    },
    {
      id: 3,
      title: "Pattern Digitization",
      description: "Converting hand-drafted patterns to digital formats using specialized software.",
      imageUrl: "/images/Design2.jpg?height=600&width=800",
    },
    {
      id: 4,
      title: "Textile Design",
      description: "Custom print and pattern development using Adobe Photoshop and Illustrator.",
      imageUrl: "/images/Design6.jpg?height=600&width=800",
    },
  ]

  return (
    <section id="digital-design-skills" className="scroll-mt-20 slide-up">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700 dark:text-white">
        Digital Design Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {digitalSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-4">
              <img
                src={skill.imageUrl || "/placeholder.svg"}
                alt={skill.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DigitalDesignSkills
