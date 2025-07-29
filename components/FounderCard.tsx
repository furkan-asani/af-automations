import Image from "next/image";
import React from "react";

interface FounderCardProps {
  imageUrl: string;
  name: string;
  role: string;
  bio?: string;
  expertise?: string[];
  experience?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const FounderCard: React.FC<FounderCardProps> = ({
  imageUrl,
  name,
  role,
  bio = "Passionate about building innovative solutions that transform businesses.",
  expertise = ["AI & Automation", "Strategy", "Innovation"],
  experience = "5+ Jahre Erfahrung",
  imageWidth = 200,
  imageHeight = 200,
}) => {
  return (
    <div className="group relative max-w-sm transform transition-all duration-500 ease-out hover:scale-105">
      {/* Card Background with Gradient Border */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] p-[2px] shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(48,213,200,0.3)]">
        <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#1e293b]/80 via-[#0f172a]/90 to-[#020617] p-8 backdrop-blur-sm">
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#30D5C8]/20 to-[#50E0D0]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-gradient-to-br group-hover:from-[#30D5C8]/30 group-hover:to-[#50E0D0]/20"></div>
          <div className="absolute -bottom-20 -left-20 h-32 w-32 rounded-full bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-2xl transition-all duration-700 group-hover:scale-125"></div>

          {/* Profile Image */}
          <div className="relative z-10 mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#30D5C8] via-[#50E0D0] to-[#60E6D7] p-[3px] transition-all duration-500 group-hover:rotate-180">
                <div className="h-full w-full rounded-full bg-[#0A192F]"></div>
              </div>
              <div
                className="relative z-10 overflow-hidden rounded-full transition-all duration-500 group-hover:scale-110"
                style={{ width: imageWidth, height: imageHeight }}
              >
                <Image
                  src={imageUrl}
                  alt={`A photo of ${name}`}
                  width={imageWidth}
                  height={imageHeight}
                  className="rounded-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
              </div>
            </div>
          </div>

          {/* Basic Info (Always Visible) */}
          <div className="relative z-10 text-center transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
            <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>
            <p className="text-lg font-medium text-[#30D5C8]">{role}</p>
          </div>

          {/* Expandable Content (Visible on Hover) */}
          <div className="relative z-10 mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-96 group-hover:opacity-100">
            <div className="border-t border-gray-600/30 pt-6">
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                {bio}
              </p>

              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold text-[#30D5C8]">
                  Expertise:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#30D5C8]/20 px-3 py-1 text-xs font-medium text-[#30D5C8] backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-400">
                <span className="font-medium">{experience}</span>
              </div>
            </div>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex items-center text-xs text-gray-400">
              <svg
                className="mr-1 h-3 w-3 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              Hover für mehr Info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
