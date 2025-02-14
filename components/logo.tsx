import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 flex items-center justify-center bg-primary rounded-lg overflow-hidden transition-transform group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
        <span className="relative font-bold text-lg text-white">DM</span>
      </div>
      <span className="font-semibold text-lg text-slate-900">David MVOULA</span>
    </Link>
  )
}

