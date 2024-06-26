import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImgUrl from "../services/image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGrenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGrenre }: Props) => {
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
              <Button
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGrenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
