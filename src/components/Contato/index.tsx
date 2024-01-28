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
    useToast,
} from "@chakra-ui/react"

import AsteriscoVerde from '../../assets/AsteriscoVerde.svg'
import bgStack from '../../assets/elementoVerde.svg'
import React, { useRef, useState } from "react"
import axios from "axios"

export default function Contato() {

    const isHigthScreen = window.innerWidth <= 360;

    const HeigthSize = isHigthScreen ? '120' : '80'

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const [value, setValue] = React.useState('1')

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputFiles = e.target.files;

        if (inputFiles && inputFiles.length > 0) {
            const selectedFile = inputFiles[0];
            console.log('Arquivo selecionado:', selectedFile);
        }
    }

    const [insertNome, setInsertNome] = useState('')
    const [insertEmail, setInsertEmail] = useState('')
    const [insertSeguradora, setInsertSeguradora] = useState('')
    const [insertMensagem, setInsertMensagem] = useState('')

    const toast = useToast()

    const handleInputName = (event: any) => {
        setInsertNome(event.target.value);
    }

    const handleInputEmail = (event: any) => {
        setInsertEmail(event.target.value);
    }

    const handleInputSeguradora = (event: any) => {
        setInsertSeguradora(event.target.value);
    }

    const handleInputMensagem = (event: any) => {
        setInsertMensagem(event.target.value);
    }

    function sendEmail(e: any) {
        e.preventDefault()

        if (insertNome === '' ||
            insertEmail === '' ||
            insertSeguradora === '' ||
            insertMensagem == ''
        ) {
            toast({
                title: 'Erro ao enviar o e-mail',
                description: 'Por favor, preencha todos os campos obrigatórios.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            return
        }

        const dados = new FormData()
        dados.append('nome', insertNome);
        dados.append('email', insertEmail);
        dados.append('Seguradora', insertSeguradora);
        dados.append('RadioValue', value);
        dados.append('mensagem', insertMensagem);

        axios.post('https://formspree.io/f/mleqdyod', dados)
            .then(response => {
                console.log(response.data);
                toast({
                    title: 'E-mail enviado com sucesso!',
                    description: 'Em breve entraremos em contato.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                })
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                toast({
                    title: 'Erro ao enviar o e-mail',
                    description: 'Houve um erro ao enviar o formulário, tente novamente.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                })
            })

        setInsertNome('')
        setInsertEmail('')
        setInsertSeguradora('')
        setInsertMensagem('')
    }

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    bg="#DBF6F6"
                    w="100%"
                    id="contato"
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
                            fontSize="77px"
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
                            w="1010px"
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
                        h="80vh"
                        p="20px 0px 20px 0px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack w="80%">
                            <Accordion
                                color="white"
                                defaultIndex={[0]}
                                allowToggle
                            >
                                <AccordionItem
                                    bg="#0D3A40"
                                    borderRadius="30px"
                                    p="10px"
                                >
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left' fontWeight="700">
                                                Tive uma indenização negada pela seguradora. O que fazer?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Quando uma indenização é negada pela seguradora, é importante agir com cautela.
                                        Primeiramente, mantenha a calma e não aceite a decisão sem questionar.
                                        Entre em contato conosco imediatamente para uma avaliação precisa do seu caso.
                                        Podemos analisar os termos da apólice, as circunstâncias do sinistro e as razões para a negativa.
                                        Com nossa experiência em Direito do Seguro, podemos orientá-lo sobre os passos apropriados a tomar
                                        para contestar essa decisão e buscar a justa indenização a que você tem direito.
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
                                            <Box as="span" flex='1' textAlign='left' fontWeight="700">
                                                Tive meu contrato recusado pela seguradora. Quais os meus direitos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Se sua solicitação de seguro foi recusada pela seguradora, você ainda tem direitos e opções.
                                        A recusa deve ser baseada em critérios legais e objetivos. Entre em contato conosco para uma
                                        análise detalhada da situação. Podemos avaliar se a recusa foi justificada e orientá-lo sobre
                                        quais medidas podem ser tomadas para buscar a reconsideração ou contestar a decisão.
                                        Sua proteção é nossa prioridade.
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
                                            <Box as="span" flex='1' textAlign='left' fontWeight="700">
                                                Estou sendo demandado pela seguradora. Qual medida adotar?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Se você está enfrentando uma demanda da seguradora, é crucial agir rapidamente e de maneira estratégica.
                                        Entre em contato conosco para discutir os detalhes da demanda e avaliar suas opções.
                                        Nossa equipe experiente pode analisar a legalidade da demanda, revisar os termos do contrato e
                                        fornecer orientações sobre como responder de maneira eficaz.
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
                                            <Box as="span" flex='1' textAlign='left' fontWeight="700">
                                                Fui indenizado pela seguradora. Como saber se o valor que recebi está correto?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Determinar se o valor da indenização é justo e adequado requer conhecimento especializado.
                                        Nossa equipe pode revisar a apólice, os termos do contrato e as circunstâncias do sinistro
                                        para avaliar se o valor oferecido está em conformidade com o contrato e a legislação aplicável.
                                        Se houver discrepâncias ou preocupações, podemos negociar com a seguradora em seu nome para garantir
                                        uma indenização justa e condizente com suas necessidades.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Stack>
                    </VStack>
                    {/* conteudo 3 */}
                    <HStack
                        w="80%"
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
                            bgSize="29%"
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
                                        fontSize: '50px',
                                        fontWeight: '400'
                                    }
                                } >é outra?</span>
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
                        id="form"
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
                                onChange={handleInputName}
                                value={insertNome}
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
                                onChange={handleInputEmail}
                                value={insertEmail}
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
                                onChange={handleInputSeguradora}
                                value={insertSeguradora}
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
                                    <Radio border="2px solid #0A292D" value='Seguro automotivo'>Seguro automotivo</Radio>
                                    <Radio border="2px solid #0A292D" value='Seguro patriminial'>Seguro patriminial</Radio>
                                    <Radio border="2px solid #0A292D" value='Outros'>Outros</Radio>
                                </Stack>
                                <Stack direction='row' color="#0A292D">
                                    <Radio border="2px solid #0A292D" value='Seguro de vida e acidentes pessoais'>Seguro de vida e<br />acidentes pessoais</Radio>
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
                                onChange={handleInputMensagem}
                                value={insertMensagem}
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
                                    onClick={handleButtonClick}
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
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Stack>
                        </HStack>
                        <Button
                            bg="#0A292D"
                            w="150px"
                            h="55px"
                            color="white"
                            onClick={sendEmail}
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
                        h={`${HeigthSize}vh`}

                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack w="80%">
                            <Accordion
                                color="white"
                                defaultIndex={[0]}
                                allowToggle
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
                                        Quando uma indenização é negada pela seguradora, é importante agir com cautela.
                                        Primeiramente, mantenha a calma e não aceite a decisão sem questionar.
                                        Entre em contato conosco imediatamente para uma avaliação precisa do seu caso.
                                        Podemos analisar os termos da apólice, as circunstâncias do sinistro e as razões para a negativa.
                                        Com nossa experiência em Direito do Seguro, podemos orientá-lo sobre os passos apropriados a tomar
                                        para contestar essa decisão e buscar a justa indenização a que você tem direito.
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
                                        Se sua solicitação de seguro foi recusada pela seguradora, você ainda tem direitos e opções.
                                        A recusa deve ser baseada em critérios legais e objetivos. Entre em contato conosco para uma
                                        análise detalhada da situação. Podemos avaliar se a recusa foi justificada e orientá-lo sobre
                                        quais medidas podem ser tomadas para buscar a reconsideração ou contestar a decisão.
                                        Sua proteção é nossa prioridade.
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
                                        Se você está enfrentando uma demanda da seguradora, é crucial agir rapidamente e de maneira estratégica.
                                        Entre em contato conosco para discutir os detalhes da demanda e avaliar suas opções.
                                        Nossa equipe experiente pode analisar a legalidade da demanda, revisar os termos do contrato e
                                        fornecer orientações sobre como responder de maneira eficaz.
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
                                        Determinar se o valor da indenização é justo e adequado requer conhecimento especializado.
                                        Nossa equipe pode revisar a apólice, os termos do contrato e as circunstâncias do sinistro
                                        para avaliar se o valor oferecido está em conformidade com o contrato e a legislação aplicável.
                                        Se houver discrepâncias ou preocupações, podemos negociar com a seguradora em seu nome para garantir
                                        uma indenização justa e condizente com suas necessidades.
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
                                onChange={handleInputName}
                                value={insertNome}
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
                                onChange={handleInputEmail}
                                value={insertEmail}
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
                                onChange={handleInputSeguradora}
                                value={insertSeguradora}
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
                                    <Radio border="2px solid #0A292D" value='Seguro automotivo'>Seguro automotivo</Radio>
                                    <Radio border="2px solid #0A292D" value='Seguro patriminial'>Seguro patriminial</Radio>
                                </Stack>
                                <Stack direction='row' color="#0A292D" gap="10">
                                    <Radio border="2px solid #0A292D" value='Outros'>Outros</Radio>
                                    <Radio border="2px solid #0A292D" value='Seguro de vida e acidentes pessoais'>Seguro de vida e<br />acidentes pessoais</Radio>
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
                                onChange={handleInputMensagem}
                                value={insertMensagem}
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
                                    onClick={handleButtonClick}
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
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Stack>
                        </HStack>
                        <Button
                            bg="#0A292D"
                            w="150px"
                            h="55px"
                            onClick={sendEmail}
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