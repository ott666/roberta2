
import { Box, Container, Em, Flex, Heading, Section, Strong } from "@radix-ui/themes";
import './hero.css'
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Section p='0' position={"relative"} height={'100vh'} style={{backgroundColor:'var(--black-a7'}}>
        <Box className="heroSidebox" position={"absolute"} top={'0'} bottom={'0'} left={'0'} width={'60px'}  style={{backgroundColor:'red'}}>

        </Box>
        <Box className="heroSidebox" position={"absolute"} top={'0'} bottom={'0'} right={'0'} width={'60px'} style={{backgroundColor:'red'}}>

        </Box>
        <Image className="heroImage" quality={100} priority src={'/bgHero.png'} style={{zIndex:'-1'}} alt="" fill objectFit="cover"/>
        <Container size={'4'} px={'16px'}>
              <Flex align={"center"} height={'inherit'}>
                <Heading  as="h1"size={{initial:'8'}} align={"center"}>Excelência em <Strong style={{color:'red'}}>Direito Eleitoral</Strong> e Consultoria Jurídica</Heading>
              </Flex>
        </Container>
       
      </Section>
    </main>
  );
}
