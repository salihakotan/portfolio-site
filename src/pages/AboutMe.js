import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function AboutMe() {
  return (
    <Box>
      <Heading mb="30px">About Me</Heading>
      <Box padding={5} borderRadius={20} backgroundColor="#ffffffb8" color="#333">
        <Text fontSize="20px">
          Hello. I'm Saliha. I'm 21 years old. I live in Bursa, the green city
          of Turkey. I have 2 very cute cats. I love spending time with them.
          Learning, reading, creating, philosophy, watching documentaries, and
          spending time in nature give me life energy.
        </Text>

        <br />

        <Text fontSize="20px">
         
            I met software when I was 14 years old. I was very interested in
            websites at that time. I started researching how to create them. I
            took my first step into the world of software by creating a
            ready-made website with wix.com. Since then, whenever I have the
            opportunity, I work hard and develop myself in different areas of
            software. Every day, I realize how little I actually know and am
            amazed. I'm still aware that I'm at the beginning of the road. And I
            continue this learning process.
          </Text>

          <br />

          <Text fontSize="20px">
            I started computer programming at Eskisehir Technical University. I
            left university in my first year for some reasons. Currently, I
            continue my education journey with online courses and bootcamps
            without interruption. I also develop games on Google Play. I have
            published some small-scale games. I also benefit from courses and
            trainings prepared by Google. I also have a website called
            Unforgettable Gifts Shop. On this site, I take orders for
            personalized surprise web pages and design them.
          
        </Text>
      </Box>
    </Box>
  );
}

export default AboutMe;
