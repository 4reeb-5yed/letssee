import Image from "next/image";
import type { MediaAsset } from "@/lib/db/types";

interface OptimizedImageProps {
  asset: MediaAsset;
  size?: "thumbnail" | "medium" | "full";
  aspectRatio?: "4:3" | "16:9" | "1:1";
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({
  asset,
  size = "medium",
  aspectRatio = "4:3",
  className = "",
  priority = false,
}: OptimizedImageProps) {
  const variants = asset.variants as Record<string, string>;
  const src = variants[size] || variants.full || asset.originalUrl;

  const aspectRatios = {
    "4:3": { width: 4, height: 3 },
    "16:9": { width: 16, height: 9 },
    "1:1": { width: 1, height: 1 },
  };

  const { width: aspectWidth, height: aspectHeight } = aspectRatios[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-md bg-[--color-paper-alt] ${className}`}
      style={{ aspectRatio: `${aspectWidth} / ${aspectHeight}` }}
    >
      <Image
        src={src}
        alt={asset.altText}
        fill
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
