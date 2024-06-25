import { Box, Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Col, Row } from "antd";



function Portfolio() {
  return (
    <div>
      <Heading mb="30px">Portfolio</Heading>

    <Row style={{height:"fit-content"}} gutter={20}>
      <Col span={6}>
      <Card height="100%" bgColor="#ffffffb8" maxW="sm">
        <CardBody>
          <Image
            src="https://github.com/salihakotan/react-redux-glitter-notes-app/raw/main/preview/prev2.png"
            alt="Glitter notes app"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="3">
            <Heading size="md">Glitter Notes</Heading>
            <Text marginBottom="50px">
            It is an example of a note-taking application.
            </Text>
           <Box position="absolute" bottom={4} right={4} textAlign="right">
           <a style={{width:"fit-content"}} target="blank" href="https://github.com/salihakotan/react-redux-glitter-notes-app">
            <Button colorScheme="pink">
              Browse
            </Button>
            </a>
           </Box>
          </Stack>
        </CardBody>
      
      </Card>
      </Col>
     

      <Col span={6}>
      <Card height="100%" bgColor="#ffffffb8" maxW="sm">
        <CardBody>
          <Image
            src="https://github.com/salihakotan/react-clothes-e-commerce-app/raw/main/prev1.png"
            alt="Clothes e-Commerce"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="3">
            <Heading size="md">Clothes e-Commerce</Heading>
            <Text marginBottom="50px">
            An e-commerce project where we can shop for clothes.

            </Text>
            <Box position="absolute" bottom={4} right={4} textAlign="right">
           <a style={{width:"fit-content"}} target="blank" href="https://github.com/salihakotan/react-clothes-e-commerce-app">
            <Button colorScheme="pink">
              Browse
            </Button>
            </a>
           </Box>
          </Stack>
        </CardBody>
      
      </Card>
      </Col>

      <Col span={6}>
      <Card height="100%" bgColor="#ffffffb8" maxW="sm">
        <CardBody>
          <Image
            src="https://github.com/salihakotan/graphql-redis-anonymous-chat-app/raw/main/prev1.png"
            alt="Anonymous Chat App"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="3">
            <Heading size="md">Anonymous Chat</Heading>
            <Text marginBottom="50px">
            An anonymous chat application that includes both backend and client and works in real time with GraphQL

            </Text>
            <Box position="absolute" bottom={4} right={4} textAlign="right">
           <a style={{width:"fit-content"}} target="blank" href="https://github.com/salihakotan/graphql-redis-anonymous-chat-app">
            <Button colorScheme="pink">
              Browse
            </Button>
            </a>
           </Box>
          </Stack>
        </CardBody>
      
      </Card>
      </Col>

      <Col span={6}>
      <Card height="100%" bgColor="#ffffffb8" maxW="sm">
        <CardBody>
          <Image
            src="https://github.com/salihakotan/graphql-realtime-voting-app/raw/main/prev4.png"
            alt="Realtime voting app"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="3">
            <Heading size="md">Realtime Voting</Heading>
            <Text marginBottom="50px">
            It is a real-time voting application that includes both backend and client and works with GraphQL.
        
            </Text>
            <Box position="absolute" bottom={4} right={4} textAlign="right">
           <a style={{width:"fit-content"}} target="blank" href="https://github.com/salihakotan/graphql-realtime-voting-app">
            <Button colorScheme="pink">
              Browse
            </Button>
            </a>
           </Box>
          </Stack>
        </CardBody>
      
      </Card>
      </Col>


    </Row>


      
    </div>
  );
}

export default Portfolio;
