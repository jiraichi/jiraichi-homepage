import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        <div>header</div>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" pb={2}>
            Shan Valiyev
          </Heading>
          <p>おはよう。 I am Artist / Developer / Designer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
