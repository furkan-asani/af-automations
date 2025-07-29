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
  imageWidth = 120,
  imageHeight = 120,
}) => {
  return (
    <div className="group relative transform transition-all duration-300 ease-out hover:scale-105">
      {/* Sleek Modern Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-md border border-white/20 hover:border-[#30D5C8]/50 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#30D5C8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

        <div className="relative z-10 flex items-center space-x-4">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#30D5C8] to-[#50E0D0] p-[2px] transition-all duration-300 group-hover:scale-110">
              <div className="h-full w-full rounded-full bg-black/50"></div>
            </div>
            <div
              className="relative z-10 overflow-hidden rounded-full transition-all duration-300"
              style={{ width: imageWidth, height: imageHeight }}
            >
              <Image
                src={imageUrl}
                alt={`A photo of ${name}`}
                width={imageWidth}
                height={imageHeight}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-[#30D5C8] font-medium mb-2">{role}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{bio}</p>
          </div>
        </div>

        {/* Expandable Content on Hover */}
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-96 group-hover:opacity-100 mt-4">
          <div className="border-t border-white/20 pt-4">
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-[#30D5C8] mb-2">
                Expertise:
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#30D5C8]/20 border border-[#30D5C8]/30 px-3 py-1 text-xs font-medium text-[#30D5C8]"
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
      </div>
    </div>
  );
};

export default FounderCard;
