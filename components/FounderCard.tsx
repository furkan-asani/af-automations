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
  imageWidth = 80,
  imageHeight = 80,
}) => {
  return (
    <div className="group p-6 rounded-lg bg-white/5 border border-gray-600/20 hover:border-[#30D5C8]/30 transition-all duration-200 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#30D5C8] to-[#50E0D0] p-[2px]">
            <div className="h-full w-full rounded-full bg-[#0A192F]"></div>
          </div>
          <div
            className="relative z-10 overflow-hidden rounded-full"
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

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
          <p className="text-[#30D5C8] text-sm font-medium mb-3">{role}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{bio}</p>

          {/* Expandable expertise on hover */}
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-32 group-hover:opacity-100">
            <div className="mt-4 pt-3 border-t border-gray-600/20">
              <div className="flex flex-wrap gap-2">
                {expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-[#30D5C8]/10 text-[#30D5C8] border border-[#30D5C8]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
