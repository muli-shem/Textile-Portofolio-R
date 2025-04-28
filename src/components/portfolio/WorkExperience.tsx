const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      position: "Fashion Intern (Attachée) ",
      company: "Mureithi Fashions, Nairobi",
      period: "2024 May - 2024 August",
      description:
 `Assisted in garment cutting, sewing, and finishing under close supervision, ensuring high standards of workmanship.

Supported the design team by preparing mood boards, sketches, and basic pattern drafting.

Learned fabric handling techniques and participated in daily production activities.

Observed client consultations and fittings to understand the customization process.

Gained hands-on experience with industrial sewing machines and garment assembly workflows.

Developed a strong foundation in time management, teamwork, and attention to detail in a busy fashion workshop environment.`,
      imageUrl: "/images/Rose2.jpg?height=400&width=600",
    },
    {
      id: 2,
      position: "Assistant Designer",
      company: "Abundance Fashions, Nairobi",
      period: "2024 – Present",
      description:
        `Assisted in garment cutting, sewing, and finishing under close supervision, ensuring high standards of workmanship.

Supported the design team by preparing mood boards, sketches, and basic pattern drafting.

Learned fabric handling techniques and participated in daily production activities.

Observed client consultations and fittings to understand the customization process.

Gained hands-on experience with industrial sewing machines and garment assembly workflows.

Developed a strong foundation in time management, teamwork, and attention to detail in a busy fashion workshop environment.`,
      imageUrl: "/images/Rose1.jpg?height=400&width=600",
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
