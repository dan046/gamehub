import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />
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
