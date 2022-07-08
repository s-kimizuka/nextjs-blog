import Link from "next/link";
import {
  Box,
  Stack,
  Heading,
  HStack,
  Flex,
  Spacer,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { useState } from "react";

type Props = {
  url: string;
  title: string;
  date: string;
};

export default function ListItem({ url, title, date }: Props) {
  const [ fav, setFav ] = useState(false);
  const onSelect = () => {
    setFav(!fav);
  };

  return (
    <Stack my={5}>
      <Heading size="md" my={1}>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </Heading>
      <HStack spacing={2.5}>
        <Button
          colorScheme="gray"
          color="gray"
          size="xs"
          shadow="md"
          variant="outline"
          leftIcon={<StarIcon color={fav ? "yellow.500": "gray"} />}
          onClick={onSelect}
        >
          Fav
        </Button>

        <Button
          colorScheme="gray"
          color="gray"
          size="xs"
          shadow="md"
          variant="outline"
          leftIcon={<ExternalLinkIcon />}
        >
          Share
        </Button>

        <Spacer />

        <Box>
          <Text color="gray" fontSize="sm">
            <Date dateString={date} />
          </Text>
        </Box>
      </HStack>
      <Divider />
    </Stack>
  );
}
