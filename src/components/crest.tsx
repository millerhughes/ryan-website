import Image from "next/image";

/**
 * British American Tennis and Golf Academy crest — the REAL logo.
 *
 * Extracted from Ryan's official flyer artwork: the cream background was keyed
 * to transparency and the mark stored at public/crest.png. This renders the
 * genuine logo, not a redraw. Size it with a height utility (e.g. h-14) plus
 * w-auto; the intrinsic 151x116 ratio is preserved. It is a full-colour raster
 * (navy shield + clubs, green ball), so text-colour utilities have no effect —
 * on dark grounds sit it on a cream badge (see Contact / the hero seal).
 */
export function Crest({
  className,
  title = "British American Tennis and Golf Academy crest",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <Image
      src="/crest.png"
      alt={title}
      width={151}
      height={116}
      loading="eager"
      className={className}
    />
  );
}
