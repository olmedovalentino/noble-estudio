interface SectionTitleProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  tag,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {tag && (
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#7E7A73] font-medium block">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#141413] tracking-tight font-normal leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-[#7E7A73] font-light leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
