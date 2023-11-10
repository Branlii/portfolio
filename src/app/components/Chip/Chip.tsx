import React from 'react'

interface ChipProps {
  color: string
  label: string;
  icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

const colorsStyles: Record<string, string> = {
  "purple": "bg-purple-300/50 text-purple-300 border-purple-300",
  "red": "bg-red-300/50 text-red-300 border-red-300",
  "blue": "bg-blue-300/50 text-blue-300 border-blue-300",
  "green": "bg-green-300/50 text-green-300 border-green-300",
  "yellow": "bg-yellow-300/50 text-yellow-300 border-yellow-300",
  "indigo": "bg-indigo-300/50 text-indigo-300 border-indigo-300",
  "pink": "bg-pink-300/50 text-pink-300 border-pink-300",
  "gray": "bg-gray-300/50 text-gray-300 border-gray-300",
  "white": "bg-white/50 text-white border-white",
  "black": "bg-black/50 text-black border-black",
  "cyan": "bg-cyan-300/50 text-cyan-300 border-cyan-300",
  "dark-blue": "bg-blue-500/50 text-blue-500 border-blue-500",
  "dark-green": "bg-green-500/50 text-green-500 border-green-500",
  "orange": "bg-orange-300/50 text-orange-300 border-orange-300",
  "emerald": "bg-emerald-300/50 text-emerald-300 border-emerald-300",
}

export default function Chip({ color, label, icon }: ChipProps) {
  return (
    <span className={`flex flex-row items-center gap-2 w-fit py-1 px-2 rounded border ${colorsStyles[color]}`}>{label} {icon({ width: 16, height: 16 })}</span>
  )
}
