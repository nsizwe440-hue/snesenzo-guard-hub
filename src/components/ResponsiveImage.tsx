import { getImage, imageSrcSet } from "@/assets/optimized";

type Props = {
  name: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: number; // width / height for layout reservation
  imgClassName?: string;
};

export function ResponsiveImage({
  name,
  alt,
  sizes = "100vw",
  className,
  priority = false,
  imgClassName,
}: Props) {
  const asset = getImage(name);
  const srcSet = imageSrcSet(asset);
  const fallback = asset.fallback.url;

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-ignore - valid HTML attribute, React types lag
        fetchpriority={priority ? "high" : undefined}
        className={imgClassName}
      />
    </picture>
  );
}
