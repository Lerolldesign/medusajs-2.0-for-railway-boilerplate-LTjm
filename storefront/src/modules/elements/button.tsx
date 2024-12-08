import React from "react"

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "tertery"
  target?: string
  onClick?: () => void // Add onClick property
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  target = "_self",
  onClick,
}) => {
  const getClassNames = () => {
    let baseClass =
      "group relative inline-flex border focus:outline-none w-full sm:w-auto rounded-full"
    let spanClass =
      "w-full inline-flex items-center justify-center self-stretch px-6 py-4 text-sm text-center font-semibold  ring-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 rounded-full"

    if (variant === "primary") {
      baseClass += " border-lune"
      spanClass += " text-white bg-lune ring-lune ring-offset-lune"
    } else if (variant === "secondary") {
      baseClass += " border-lune"
      spanClass += " text-creamy bg-lune/5 hover:bg-lune ring-lune"
    } else if (variant === "tertery") {
      baseClass += " border-lune"
      spanClass += " text-lune bg-lune/5 hover:bg-lune ring-lune"
    }

    return { baseClass, spanClass }
  }

  const { baseClass, spanClass } = getClassNames()

  return (
    <a
      className={baseClass}
      href={href}
      target={target}
      onClick={onClick} // Attach onClick event
    >
      <span className={spanClass}>{children}</span>
    </a>
  )
}

export default Button
