import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    Input,
    Radio,
    RadioGroup,
    Stack,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react"

import AsteriscoVerde from '../../assets/AsteriscoVerde.svg'
import bgStack from '../../assets/elementoVerde.svg'
import React from "react"

export default function Contato() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const [value, setValue] = React.useState('1')

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    bg="#DBF6F6"
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    p="60px 0px 60px 0px"
                >
                    {/* conteudo 1 */}
                    <VStack
                        w="100%"
                        h="110vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontSize="88px"
                            fontFamily="Chivo"
                            color="#0A292D"
                            zIndex="3"
                        >
                            Sabemos da complexidade<br />
                            por isso, <span style={{
                                fontFamily: 'Libre Baskerville',
                                fontStyle: 'italic',
                                fontSize: '112px',
                                fontWeight: '400'
                            }}>
                                simplificamos
                            </span>

                        </Heading>
                        <Stack
                            w="80%"
                            zIndex="1"
                            mt="-40"
                            justifyContent="start"
                            alignItems="end"
                        >
                            <Image w="20%" src={AsteriscoVerde} />
                        </Stack>
                        <Stack
                            w="1150px"
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Heading
                                fontSize="24px"
                                fontWeight="600"
                                fontFamily="Chivo"
                                textAlign="start"
                            >
                                Agrupamos as principais dúvidas de nossos<br />
                                clientes para você identificar se está passando<br />
                                por alguma dessas situações.
                            </Heading>
                        </Stack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        h="60vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack w="80%">
                            <Accordion
                                color="white"
                                defaultIndex={[0]}
                                allowMultiple
                            >
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Tive uma indenização negada pela seguradora. O que fazer?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Tive meu contrato recusado pela seguradora. Quais os meus direitos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Estou sendo demandado pela seguradora. Qual medida adotar?                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Fui indenizado pela seguradora. Como saber se o valor que recebi está correto?                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    </VStack>
                    {/* conteudo 3 */}
                    <HStack
                        w="60%"
                        h="35vh"
                        mt="150px"
                        justifyContent="center"
                        alignItems="center"
                        gap="60"
                    >
                        <Stack
                            w="50%"
                            h="210px"
                            justifyContent="center"
                            alignItems="center"
                            bgImage={bgStack}
                            bgRepeat="no-repeat"
                            bgSize="40%"
                            bgPosition="right"
                        >
                            <Heading
                                fontSize="38px"
                                fontFamily="Chivo"
                                fontWeight="400"
                                color="#0D3A40"
                            >
                                SUA DÚVIDA<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '45px',
                                        fontWeight: '400'
                                    }
                                } >é outra?.</span>
                            </Heading>
                        </Stack>
                        <Stack
                            w="50%"
                            justifyContent="center"
                            alignItems="start"
                            gap="10"
                        >
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                Entre em contato com a gente e<br />
                                explique o seu caso.
                            </Heading>
                            <Button
                                borderRadius="30px"
                                bg="#0D3A40"
                                fontSize="16px"
                                w="300px"
                                h="65px"
                                color="white"
                                fontFamily="Chivo"
                                fontWeight="400"
                                textAlign="end"
                                _hover={{
                                    border: '2px solid #0D3A40',
                                    background: 'transparent',
                                    color: '#0D3A40'
                                }}
                            >
                                ENTRE EM CONTATO AGORA
                            </Button>
                        </Stack>
                    </HStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="60%"
                        mt="90px"
                        bg="#DBF6F6"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="30px"
                        zIndex={1}
                        pb="70px"
                        border="2px solid #0D3A40"
                    >
                        <HStack
                            mt="170px"
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Heading
                                fontSize="32px"
                                fontFamily="Chivo"
                                color="#0A292D"
                                fontWeight="400"
                            >
                                VAMOS ANALISAR<br /><span style={{ paddingRight: '100px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '50px',
                                        fontWeight: '400'
                                    }
                                } >o seu conflito</span>
                            </Heading>
                        </HStack>
                        <VStack
                            justifyContent="center"
                            alignItems="start"
                            w="80%"
                        >
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual o seu nome?
                            </Heading>
                            <Input
                                mb="20px"
                                w="100%"
                                color="#0A292D"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                O seu email para contato?
                            </Heading>
                            <Input
                                mb="20px"
                                w="100%"
                                color="#0A292D"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual a sua seguradora?
                            </Heading>
                            <Input
                                mb="20px"
                                color="#0A292D"
                                w="100%"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual o tipo de seguro que você contratou?
                            </Heading>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack
                                    direction='row'
                                    color="#0A292D"
                                    gap="10"
                                    pb="10px"
                                >
                                    <Radio border="2px solid #0A292D" value='1'>Seguro automotivo</Radio>
                                    <Radio border="2px solid #0A292D" value='2'>Seguro patriminial</Radio>
                                    <Radio border="2px solid #0A292D" value='3'>Outros</Radio>
                                </Stack>
                                <Stack direction='row' color="#0A292D">
                                    <Radio border="2px solid #0A292D" value='4'>Seguro de vida e<br />acidentes pessoais</Radio>
                                </Stack>
                            </RadioGroup>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Descreva brevemente o seu problema:
                            </Heading>
                            <Input
                                mb="20px"
                                color="#0A292D"
                                w="100%"
                                borderRadius="30px"
                                h="110px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                        </VStack>
                        <HStack
                            justifyContent="center"
                            alignItems="start"
                            w="80%"
                        >
                            <Stack
                                w="100%"
                                justifyContent="center"
                                alignItems="start"
                                pb="100px"
                                gap="10"
                            >
                                <Heading
                                    color="#0A292D"
                                    fontSize="16px"
                                    fontWeight="600"
                                    fontFamily="Chivo"
                                >
                                    Se você possui o arquivo digital da sua apólice de seguros, anexe aqui:
                                </Heading>
                                <Button
                                    bg="#6097A3"
                                    w="220px"
                                    h="55px"
                                    borderRadius="30px"
                                    fontFamily="Chivo"
                                    fontSize="14px"
                                    fontWeight="400"
                                    _hover={{
                                        bg: 'transparent',
                                        border: 'solid 2px #6097A3'
                                    }}
                                >
                                    ADICIONAR ARQUIVO
                                </Button>
                            </Stack>
                        </HStack>
                        <Button
                            bg="#0A292D"
                            w="150px"
                            h="55px"
                            color="white"
                            borderRadius="30px"
                            fontFamily="Chivo"
                            fontSize="14px"
                            fontWeight="400"
                            _hover={{
                                bg: 'transparent',
                                border: 'solid 2px #0A292D',
                                color: '#0A292D'
                            }}
                        >
                            Enviar
                        </Button>
                    </VStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    bg="#DBF6F6"
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    color="#DBF6F6"
                    flexDirection="column"
                    pb="40px"
                >
                    {/* conteudo 1 */}
                    <VStack
                        w="90%"
                        h="60vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="10"
                    >
                        <Heading
                            fontSize="48px"
                            fontFamily="Chivo"
                            color="#0A292D"
                            zIndex="3"
                        >
                            Sabemos da complexidade<br />
                            por isso, <span style={{
                                fontFamily: 'Libre Baskerville',
                                fontStyle: 'italic',
                                fontSize: '52px',
                                fontWeight: '400'
                            }}>
                                simplificamos
                            </span>

                        </Heading>
                        <Stack
                            w="90%"
                            zIndex="1"
                            mt="-182px"
                            justifyContent="start"
                            alignItems="end"
                        >
                            <Image w="35%" src={AsteriscoVerde} />
                        </Stack>
                        <Stack
                            w="100%"
                            justifyContent="start"
                            alignItems="start"
                        >
                            <Heading
                                fontSize="14px"
                                fontWeight="600"
                                color="#0A292D"
                                fontFamily="Chivo"
                                textAlign="start"
                            >
                                Agrupamos as principais dúvidas<br />
                                de nossos clientes para você identificar<br />
                                se está passando por alguma dessas situações.
                            </Heading>
                        </Stack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        h="60vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack w="80%">
                            <Accordion
                                color="white"
                                defaultIndex={[0]}
                                allowMultiple
                            >
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Tive uma indenização negada pela seguradora. O que fazer?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Tive meu contrato recusado pela seguradora. Quais os meus direitos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Estou sendo demandado pela seguradora. Qual medida adotar?                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    mt="20px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Fui indenizado pela seguradora. Como saber se o valor que recebi está correto?                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    </VStack>
                    {/* conteudo 3 */}
                    <VStack
                        w="90%"
                        h="50vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="5"
                    >
                        <Stack
                            w="100%"
                            h="310px"
                            justifyContent="center"
                            alignItems="center"
                            bgImage={bgStack}
                            bgRepeat="no-repeat"
                            bgSize="40%"
                            bgPosition="right"
                        >
                            <Heading
                                fontSize="38px"
                                fontFamily="Chivo"
                                fontWeight="400"
                                color="#0D3A40"
                            >
                                SUA DÚVIDA<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '45px',
                                        fontWeight: '400'
                                    }
                                } >é outra?.</span>
                            </Heading>
                        </Stack>
                        <VStack
                            w="90%"
                            justifyContent="center"
                            alignItems="center"
                            gap="5"
                        >
                            <Heading
                                fontSize="18px"
                                fontFamily="Chivo"
                                fontWeight="400"
                                color="#0A292D"
                                textAlign="center"
                            >
                                Entre em contato com a gente e<br />
                                explique o seu caso.
                            </Heading>
                            <Button
                                borderRadius="30px"
                                bg="#0D3A40"
                                fontSize="16px"
                                w="300px"
                                h="65px"
                                color="white"
                                fontFamily="Chivo"
                                fontWeight="400"
                                textAlign="end"
                                _hover={{
                                    border: '2px solid #0D3A40',
                                    background: 'transparent',
                                    color: '#0D3A40'
                                }}
                            >
                                ENTRE EM CONTATO AGORA
                            </Button>
                        </VStack>
                    </VStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="90%"
                        mt="50px"
                        bg="#DBF6F6"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="30px"
                        border="2px solid #0A292D"
                        zIndex={1}
                        pb="70px"
                    >
                        <HStack
                            mt="60px"
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Heading
                                fontSize="28px"
                                fontFamily="Chivo"
                                color="#0A292D"
                                fontWeight="400"
                            >
                                VAMOS ANALISAR<br /><span style={{ paddingRight: '100px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '35px',
                                        fontWeight: '400'
                                    }
                                } >o seu conflito</span>
                            </Heading>
                        </HStack>
                        <VStack
                            justifyContent="center"
                            alignItems="start"
                            w="80%"
                        >
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual o seu nome?
                            </Heading>
                            <Input
                                mb="20px"
                                w="100%"
                                color="#0A292D"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                O seu email para contato?
                            </Heading>
                            <Input
                                mb="20px"
                                w="100%"
                                color="#0A292D"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual a sua seguradora?
                            </Heading>
                            <Input
                                mb="20px"
                                color="#0A292D"
                                w="100%"
                                borderRadius="30px"
                                h="40px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                            <Heading
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Qual o tipo de seguro que você contratou?
                            </Heading>
                            <RadioGroup onChange={setValue} value={value}>
                                <Stack
                                    direction='row'
                                    color="#0A292D"
                                    gap="10"
                                    pb="20px"
                                >
                                    <Radio border="2px solid #0A292D" value='1'>Seguro automotivo</Radio>
                                    <Radio border="2px solid #0A292D" value='2'>Seguro patriminial</Radio>
                                </Stack>
                                <Stack direction='row' color="#0A292D" gap="10">
                                    <Radio border="2px solid #0A292D" value='3'>Outros</Radio>
                                    <Radio border="2px solid #0A292D" value='4'>Seguro de vida e<br />acidentes pessoais</Radio>
                                </Stack>
                            </RadioGroup>
                            <Heading
                                mt="20px"
                                color="#0A292D"
                                fontSize="16px"
                                fontWeight="600"
                                fontFamily="Chivo"
                            >
                                Descreva brevemente o seu problema:
                            </Heading>
                            <Input
                                mb="20px"
                                color="#0A292D"
                                w="100%"
                                borderRadius="30px"
                                h="110px"
                                bg="transparent"
                                border="2px solid #0A292D"
                                _hover={{
                                    border: '2px solid #3C7178'
                                }}
                            ></Input>
                        </VStack>
                        <HStack
                            justifyContent="center"
                            alignItems="center"
                            w="80%"
                        >
                            <Stack
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                pb="50px"
                                gap="10"
                            >
                                <Heading
                                    color="#0A292D"
                                    fontSize="16px"
                                    fontWeight="600"
                                    fontFamily="Chivo"
                                >
                                    Se você possui o arquivo digital da sua apólice de seguros, anexe aqui:
                                </Heading>
                                <Button
                                    bg="#6097A3"
                                    w="220px"
                                    h="55px"
                                    borderRadius="30px"
                                    fontFamily="Chivo"
                                    fontSize="14px"
                                    fontWeight="400"
                                    _hover={{
                                        bg: 'transparent',
                                        border: 'solid 2px #6097A3'
                                    }}
                                >
                                    ADICIONAR ARQUIVO
                                </Button>
                            </Stack>
                        </HStack>
                        <Button
                            bg="#0A292D"
                            w="150px"
                            h="55px"
                            color="white"
                            borderRadius="30px"
                            fontFamily="Chivo"
                            fontSize="14px"
                            fontWeight="400"
                            _hover={{
                                bg: 'transparent',
                                border: 'solid 2px #0A292D',
                                color: '#0A292D'
                            }}
                        >
                            Enviar
                        </Button>
                    </VStack>
                </Flex>
            )}
        </>
    )
}