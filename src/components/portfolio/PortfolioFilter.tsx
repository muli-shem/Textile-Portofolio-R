"use client"

export type FilterCategory = "all" | "garments" | "sketches" | "technical" | "process" | "projects"

interface PortfolioFilterProps {
  onFilterChange: (category: FilterCategory) => void
  activeFilter: FilterCategory
}

const PortfolioFilter = ({ onFilterChange, activeFilter }: PortfolioFilterProps) => {
  const filters: { value: FilterCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "garments", label: "Garments" },
    { value: "sketches", label: "Sketches" },
    { value: "technical", label: "Technical" },
    { value: "process", label: "Process" },
    { value: "projects", label: "Projects" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeFilter === filter.value
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default PortfolioFilter
