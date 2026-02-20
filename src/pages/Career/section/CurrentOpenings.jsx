import React from "react";
import {
  Settings,
  Users,
  Wrench,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const openings = [
  {
    title: "Electrical Engineer",
    subtitle: "Industrial Projects",
    experience: "2–5 Years Experience",
    location: "On-Site | Industrial Plants",
    type: "Full Time",
    image:
      "/career1.jpg",
    icon: <Settings size={26} />,
  },
  {
    title: "Mechanical Engineer",
    subtitle: "Utility Piping / Installation",
    experience: "1–4 Years Experience",
    location: "Factory & Utility Sites",
    type: "Full Time",
    image:
      "/career2.png",
    icon: <Wrench size={26} />,
  },
  {
    title: "Site Supervisor / Engineer",
    subtitle: "Project Execution",
    experience: "3+ Years Experience",
    location: "Multiple Locations",
    type: "Full Time",
    image:
      "/career3.webp",
    icon: <Users size={26} />,
  },
  {
    title: "Automation Technician",
    subtitle: "Assembly Line Systems",
    experience: "1–3 Years Experience",
    location: "Manufacturing Units",
    type: "Full Time",
    image:
      "/career4.jpg",
    icon: <Settings size={26} />,
  },
  {
    title: "Project Coordinator",
    subtitle: "Planning & Documentation",
    experience: "2+ Years Experience",
    location: "Head Office",
    type: "Full Time",
    image:
      "/career5.webp",
    icon: <ClipboardList size={26} />,
  },
  {
    title: "Procurement Executive",
    subtitle: "Spare Parts & Vendor Mgmt",
    experience: "1–3 Years Experience",
    location: "Supply Chain Dept.",
    type: "Full Time",
    image:
      "/career6.webp",
    icon: <ShoppingCart size={26} />,
  },
];

const CurrentOpenings = () => {

  const navigate = useNavigate();

  return (
    <section className="relative py-16 px-6 lg:px-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Current <span className="text-orange-500">Openings</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {openings.map((job, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Background Image on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500"
                style={{ backgroundImage: `url(${job.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-900/50 opacity-0 group-hover:opacity-90 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-6 bg-white group-hover:bg-transparent transition duration-500">
                {/* Icon with Flip Animation */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4 transform transition duration-500 group-hover:rotate-y-180 group-hover:bg-orange-500 group-hover:text-white"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {job.icon}
                </div>

                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-white transition duration-500">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-900 group-hover:text-white mt-1 transition duration-500">
                  {job.subtitle}
                </p>

                <div className="mt-4 space-y-1 text-sm text-gray-900 group-hover:text-white transition duration-500">
                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {job.experience}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {job.location}
                  </p>
                  <p>
                    <span className="font-semibold">Job Type:</span> {job.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p
          className="mt-12 text-center text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Freshers with relevant technical qualifications and a strong learning
          mindset are also encouraged to apply.
        </p>
        <div className="mt-6 text-center" data-aos="fade-up">
      <button
        onClick={() => navigate("/contact")}
        className="bg-blue-900 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
      >
        Apply Now
      </button>
    </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
