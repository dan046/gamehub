import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url"

const GenreList = () => {
  const { data } = useGenres()
  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImgUrl(genre.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
