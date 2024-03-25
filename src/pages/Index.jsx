import { Box, Heading, Text, VStack, HStack, Image, Icon, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaFileContract, FaTools, FaQuestionCircle, FaQuoteLeft } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={12} align="center" textAlign="center">
        <Heading as="h1" size="2xl">
          Illimake - Votre partenaire en solutions d'impression
        </Heading>
        <Text fontSize="xl" maxW="3xl">
          Découvrez notre fiche d'aide à la décision pour faire le bon choix de solution d'impression et éviter les pièges des contrats.
        </Text>

        <HStack spacing={12}>
          <VStack>
            <Icon as={FaFileContract} w={12} h={12} color="blue.500" />
            <Heading size="lg">Contrat et Coûts</Heading>
            <Text>Durée, frais, pénalités, options d'achat</Text>
          </VStack>

          <VStack>
            <Icon as={FaTools} w={12} h={12} color="green.500" />
            <Heading size="lg">Services et Maintenance</Heading>
            <Text>Numérisation, interventions, garanties</Text>
          </VStack>

          <VStack>
            <Icon as={FaQuestionCircle} w={12} h={12} color="orange.500" />
            <Heading size="lg">Clarifications du Contrat</Heading>
            <Text>Compréhension des clauses, questions</Text>
          </VStack>
        </HStack>

        <VStack spacing={8} maxW="2xl">
          <Heading size="xl">Témoignages Clients</Heading>

          <Box>
            <Icon as={FaQuoteLeft} w={8} h={8} color="gray.500" mb={4} />
            <Text fontSize="lg" mb={2}>
              "Illimake nous a aidé à y voir clair dans les différentes offres. Leur accompagnement a été précieux."
            </Text>
            <Text fontWeight="bold">Marie D. - Responsable Achats</Text>
          </Box>
        </VStack>

        <VStack spacing={8} maxW="3xl">
          <Heading size="xl">Questions Fréquentes</Heading>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Text flex="1" textAlign="left">
                  Quels sont les principaux pièges à éviter ?
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>Les frais cachés, les pénalités de résiliation et les contrats trop longs sont les pièges les plus fréquents. Nous vous aidons à les identifier.</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>

        <HStack spacing={8}>
          <Button size="lg" colorScheme="blue">
            Prendre rendez-vous
          </Button>
          <Button size="lg">Nous contacter</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
