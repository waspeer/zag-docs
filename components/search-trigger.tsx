import Icon from "@chakra-ui/icon"
import { chakra, HTMLChakraProps } from "@chakra-ui/system"
import { HiOutlineSearch } from "react-icons/hi"

export function SearchTrigger(props: HTMLChakraProps<"button">) {
  return (
    <chakra.button
      {...props}
      type="button"
      width="full"
      display="flex"
      alignItems="center"
      gap="2"
      bg="white"
      fontSize="sm"
      rounded="md"
      py="2"
      pl="2"
      pr="3"
      ring="1px"
      ringColor="gray.200"
      color="gray.500"
    >
      <Icon as={HiOutlineSearch} fontSize="md" />
      Quick search...
      <chakra.span ml="auto" flex="none" fontWeight="semibold" fontSize="xs">
        ⌘K
      </chakra.span>
    </chakra.button>
  )
}