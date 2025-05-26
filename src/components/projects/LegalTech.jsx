import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaGavel,
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaArrowLeft,
  FaAward,
  FaBuilding,
  FaRocket,
  FaClock,
} from "react-icons/fa"

function LegalTech() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    setIsVisible(true)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const achievements = [
    {
      icon: <FaAward />, 
      title: "2nd Runner-Up",
      description: "National LegalTech Hackathon",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <FaUsers />,
      title: "Social Impact",
      description: "Ex-offender Reintegration",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaBuilding />,
      title: "Partnership",
      description: "Thailand Institute of Justice",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaRocket />,
      title: "Ongoing Project",
      description: "Continuous Development",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const responsibilities = [
    {
      title: "Business Model Design",
      description:
        "Designed sustainable business model by estimating market size and identifying monetization strategies",
      icon: <FaChartLine className="text-[#800020] text-2xl" />,
    },
    {
      title: "Market Analysis",
      description:
        "Analyzed labor demand on employer side to ensure effective job matching while maintaining feasibility",
      icon: <FaBuilding className="text-[#800020] text-2xl" />,
    },
    {
      title: "Product Strategy",
      description:
        "Led product ideation workshops and co-developed initial feature roadmap including Matching System",
      icon: <FaLightbulb className="text-[#800020] text-2xl" />,
    },
    {
      title: "Data Interpretation",
      description:
        "Interpreted anonymized data from correctional institutions to inform product strategy and user experience",
      icon: <FaUsers className="text-[#800020] text-2xl" />,
    },
    {
      title: "Legal Compliance",
      description: "Collaborated with Thailand Institute of Justice to ensure legal compliance and ethical standards",
      icon: <FaHandshake className="text-[#800020] text-2xl" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  }
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section
      id="legaltech"
      className="bg-gradient-to-br from-[#f8f9fa] via-[#f5f5f5] to-[#e9ecef] text-gray-900 py-32 px-10 min-h-screen relative overflow-hidden font-mono"
    >
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(128,0,32,0.05)_25px,rgba(128,0,32,0.05)_26px,transparent_27px,transparent_99px,rgba(128,0,32,0.05)_100px),linear-gradient(rgba(128,0,32,0.05)_24px,transparent_25px,transparent_26px,rgba(128,0,32,0.05)_27px,rgba(128,0,32,0.05)_99px,transparent_100px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#800020] rounded-full opacity-20"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Mouse Trailing Effect */}
      <motion.div
        className="absolute w-6 h-6 pointer-events-none z-20"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      >
        <div className="w-full h-full bg-[#800020] rounded-full opacity-40 blur-sm"></div>
        <div className="absolute inset-2 bg-[#800020] rounded-full"></div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-700 hover:bg-white hover:text-[#800020] transition-all duration-300"
            >
              <FaArrowLeft />
              <span>Back to Projects</span>
            </a>
          </motion.div>

          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Project Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#800020]/20 rounded-full text-sm text-[#800020] mb-6"
            >
              <FaGavel className="animate-pulse" />
              <span className="font-medium">LegalTech Project</span>
            </motion.div>

            {/* Project Title */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#800020] via-[#a04060] to-[#800020] bg-[length:200%_100%] animate-gradient">
                Project Restart
              </span>
              <br />
              <span className="text-gray-800 text-3xl md:text-4xl">เริ่มใหม่</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A LegalTech initiative focused on reintegrating ex-offenders into the workforce through innovative job
              matching technology and social impact.
            </motion.p>
          </div>

          {/* Achievement Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${achievement.color} bg-opacity-10 rounded-lg mb-4`}
                >
                  {React.cloneElement(achievement.icon, { className: "text-xl text-white" })}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Status Banner */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <FaClock className="text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Project Status: Active Development</h3>
              </div>
              <p className="text-center text-gray-700 mb-6 leading-relaxed">
                Following our success in the national LegalTech hackathon, ChulaLegalTech Year6, <strong>Project Restart</strong> continues to
                evolve and expand. We are actively collaborating with the{" "}
                <strong>Thailand Institute of Justice (TIJ)</strong> to further develop and implement this impactful
                solution for ex-offender reintegration.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  🚀 Ongoing Development
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  🤝 TIJ Partnership
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  📈 Scaling Impact
                </span>
              </div>
            </div>
          </motion.div>

 {/* Project Image */}
<motion.div variants={itemVariants} className="mb-16">
  <div className="relative w-full aspect-[16/8] bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden">
    <img
      src="/images/Yakkaenglegaltech copy.jpg"
      alt="Team holding second runner-up cheque at Chula LegalTech Pitching Day"
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/5 to-[#a04060]/5 pointer-events-none rounded-2xl" />
  </div>
</motion.div>

          {/* Project Overview */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaLightbulb className="text-[#800020]" />
                  Project Overview
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Restart (เริ่มใหม่)</strong> is a LegalTech initiative focused on reintegrating ex-offenders
                    into the workforce through job matching. As the Co-Founder and Product/Strategy Lead, I played a key
                    role in shaping both the business and technical direction of the project.
                  </p>
                  <p>
                    This project reflects my passion for technology-driven social impact, combining data analysis,
                    product thinking, and LegalTech innovation to address real societal challenges.
                  </p>
                  <p className="font-medium text-[#800020]">
                    The project continues to evolve with ongoing support and collaboration from the Thailand Institute
                    of Justice, working towards real-world implementation and broader social impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Role & Impact */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <FaUsers className="text-[#800020]" />
                  My Role & Impact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800020] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Co-Founder & Product Lead</h4>
                      <p className="text-sm text-gray-600">Strategic direction and product development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800020] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Business Strategy</h4>
                      <p className="text-sm text-gray-600">Market analysis and monetization planning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#800020] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Data Analysis</h4>
                      <p className="text-sm text-gray-600">Correctional data interpretation and insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ongoing Collaboration</h4>
                      <p className="text-sm text-gray-600">Continuing partnership with TIJ for implementation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Responsibilities</h2>
            <div className="space-y-6">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 hover:bg-white/90 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#800020]/10 to-[#a04060]/10 rounded-lg flex items-center justify-center text-[#800020]">
                      {responsibility.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{responsibility.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{responsibility.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact & Recognition */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="max-w-3xl mx-auto p-8 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaAward className="text-[#800020] text-2xl" />
                <h3 className="text-2xl font-bold text-gray-800">Recognition & Future Impact</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Awarded 2nd Runner-Up in a national LegalTech hackathon, demonstrating the project's potential for real
                social impact. The platform addresses critical challenges in ex-offender reintegration while creating
                sustainable business value.{" "}
                <strong>
                  We continue to develop this solution with TIJ to create lasting change in Thailand's justice system.
                </strong>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  National Recognition
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Social Impact
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  LegalTech Innovation
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Data-Driven Solution
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Ongoing Development
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default LegalTech
