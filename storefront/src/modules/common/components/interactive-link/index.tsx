import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group border-2 p-2 border-lune rounded-full hover:bg-browny hover:border-browny !text-lune hover:!text-creamy ease-in-out duration-150"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-ui-fg-interactive !text-lune hover:!text-creamy  ease-in-out duration-150">
        {children}
      </Text>
      <ArrowUpRightMini className="group-hover:rotate-45 ease-in-out duration-150 size-5 mt-2 " />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
