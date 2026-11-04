import Link from "next/link";
import Image from "next/image";
import { guidePages } from "@/data/guidePages";

/** Sidebar card linking to the other root-level guide pages. */
export default function GuideLinks({ currentSlug }: { currentSlug?: string }) {
  const others = guidePages.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-[1px] flex-1 bg-gray-100"></div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Bangalore Buyer Guides
        </h3>
        <div className="h-[1px] flex-1 bg-gray-100"></div>
      </div>

      <div className="space-y-5">
        {others.map((p) => (
          <Link key={p.slug} href={`/${p.slug}`} className="group flex gap-4 items-start">
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
              <Image
                src={p.image}
                alt={p.altText}
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                {p.category}
              </p>
              <h4 className="text-[13px] font-medium text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                {p.shortTitle}
              </h4>
              <p className="text-[11px] text-gray-400 mt-1">{p.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
