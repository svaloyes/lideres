import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Image, Button } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box p={8}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" mb={4} color="blue.800">Welcome to Gimnasio Líderes</Heading>
          <Text fontSize="xl">Empowering Future Leaders Through Education</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="lg" mb={4} color="green.600">Our Mission</Heading>
            <Text>To provide a nurturing environment that fosters academic excellence, personal growth, and leadership skills, preparing our students to become responsible global citizens.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg" mb={4} color="green.600">Our Vision</Heading>
            <Text>To be recognized as a leading educational institution that inspires and empowers students to reach their full potential and make a positive impact on the world.</Text>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading as="h2" size="lg" mb={4} color="blue.800">Upcoming Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[1, 2, 3].map((event) => (
              <Box key={event} borderWidth={1} borderRadius="lg" p={4}>
                <Image src={`/img/event-${event}.jpg`} alt={`Event ${event}`} mb={3} />
                <Heading as="h3" size="md" mb={2}>Event Title {event}</Heading>
                <Text mb={3}>Brief description of the event. Date and time information.</Text>
                <Button colorScheme="blue" size="sm">Learn More</Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default HomePage;
