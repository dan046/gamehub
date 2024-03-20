import { HStack, Image } from "@chakra-ui/react"
import gameLogo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={gameLogo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
