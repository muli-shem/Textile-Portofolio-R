"use client"

import { useState, useEffect } from "react"
import DesignerStatement from "../components/portfolio/DesignerStatement"
import MoodBoards from "../components/portfolio/MoodBoards"
import Illustrations from "../components/portfolio/Illustrations"
import TechnicalDrawings from "../components/portfolio/TechnicalDrawings"
import FabricSwatches from "../components/portfolio/FabricSwatches"
import GarmentConstruction from "../components/portfolio/GarmentConstruction"
import FinishedGarments from "../components/portfolio/FinishedGarments"
import DesignProjects from "../components/portfolio/DesignProjects"
import DigitalDesignSkills from "../components/portfolio/DigitalDesignSkills"
import WorkExperience from "../components/portfolio/WorkExperience"
import PortfolioFilter, { type FilterCategory } from "../components/portfolio/PortfolioFilter"

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all")
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    designerStatement: true,
    moodBoards: true,
    illustrations: true,
    technicalDrawings: true,
    fabricSwatches: true,
    garmentConstruction: true,
    finishedGarments: true,
    designProjects: true,
    digitalDesignSkills: true,
    workExperience: true,
  })

  useEffect(() => {
    // Update visible sections based on filter
    const newVisibleSections = {
      designerStatement: activeFilter === "all",
      moodBoards: activeFilter === "all" || activeFilter === "process",
      illustrations: activeFilter === "all" || activeFilter === "sketches",
      technicalDrawings: activeFilter === "all" || activeFilter === "technical",
      fabricSwatches: activeFilter === "all" || activeFilter === "process",
      garmentConstruction: activeFilter === "all" || activeFilter === "process",
      finishedGarments: activeFilter === "all" || activeFilter === "garments",
      designProjects: activeFilter === "all" || activeFilter === "projects",
      digitalDesignSkills: activeFilter === "all" || activeFilter === "technical",
      workExperience: activeFilter === "all" || activeFilter === "projects",
    }
    setVisibleSections(newVisibleSections)
  }, [activeFilter])

  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category)
    // Scroll to top when filter changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center dark:text-white fade-in">Portfolio</h1>

      <PortfolioFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />

      <div className="space-y-24">
        {visibleSections.designerStatement && <DesignerStatement />}
        {visibleSections.moodBoards && <MoodBoards />}
        {visibleSections.illustrations && <Illustrations />}
        {visibleSections.technicalDrawings && <TechnicalDrawings />}
        {visibleSections.fabricSwatches && <FabricSwatches />}
        {visibleSections.garmentConstruction && <GarmentConstruction />}
        {visibleSections.finishedGarments && <FinishedGarments />}
        {visibleSections.designProjects && <DesignProjects />}
        {visibleSections.digitalDesignSkills && <DigitalDesignSkills />}
        {visibleSections.workExperience && <WorkExperience />}
      </div>
    </div>
  )
}

export default PortfolioPage
