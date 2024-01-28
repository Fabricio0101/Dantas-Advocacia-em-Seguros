import {
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

import Automovel from '../../assets/automovel.png'
import Patrimonial from '../../assets/patrimonial.png'
import Acidentes from '../../assets/vida-acidentespessoais.png'

import Caneta from '../../assets/Caneta.png'
import AsteriscoVerde from '../../assets/AsteriscoVerde.svg'

import bgStack from '../../assets/elemento.svg'

import Logo from '../../assets/Logo_Completo.png'

import '../../../style/global.css'
import React, { useRef, useState } from "react"
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios"

export default function Home() {

    const isHigthScreen = window.innerWidth <= 1396;

    const flexHigth = isHigthScreen ? '88vh' : '83vh'

    const [value, setValue] = React.useState('')

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

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
                    bg="#0A292D"
                    id="home"
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    color="#DBF6F6"
                    flexDirection="column"
                    p="60px 0px 60px 0px"
                >
                    {/* conteudo 1 */}
                    <HStack
                        w="100%"
                        h="100vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            w="60%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Heading fontSize="88px" fontFamily="Chivo">
                                Sinta-se
                                <br />
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '112px',
                                    fontWeight: '400'
                                }}>
                                    Seguro
                                </span>
                                <br />
                                <span style={{ paddingRight: '100px' }}></span>
                                de verdade.
                            </Heading>
                        </Stack>
                        <Stack
                            h="70vh"
                            w="30%"
                            gap="20"
                        >
                            <Image w="60%" src={Logo} />
                            <VStack
                                justifyContent="start"
                                alignItems="start"
                                w="100%"
                                gap="10"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Tenha seus direitos<br />protegidos
                                </Heading>
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <span style={{ textDecoration: 'underline' }}>
                                        Resolva seu conflito
                                    </span> com sua<br />
                                    seguradora de uma vez por<br />
                                    todas.
                                </Heading>
                            </VStack>
                        </Stack>
                    </HStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontFamily="Chivo"
                            fontSize="32px"
                            fontWeight="400"
                        >
                            NOSSAS PRINCIPAIS ÁREAS DE ATUAÇÃO
                        </Heading>
                        <br />
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Link
                                to="/servicos#automovel"
                            >
                                <VStack
                                    w="250px"
                                    h="250px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                    transition="0.2s"
                                    _hover={{
                                        background: '#113237',
                                    }}
                                >

                                    <Image w="40%" src={Automovel} />
                                    <Heading
                                        fontSize="24px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Automóvel
                                    </Heading>

                                </VStack>
                            </Link>
                            <Link to="/servicos#patrimoniais">
                                <VStack
                                    w="250px"
                                    h="250px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                    transition="0.2s"
                                    _hover={{
                                        background: '#113237',
                                    }}
                                >
                                    <Image w="40%" src={Patrimonial} />
                                    <Heading
                                        fontSize="24px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Patrimonial
                                    </Heading>
                                </VStack>
                            </Link>
                            <Link to="/servicos#vida">
                                <VStack
                                    w="250px"
                                    h="250px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                    transition="0.2s"
                                    _hover={{
                                        background: '#113237',
                                    }}
                                >
                                    <Image w="50%" src={Acidentes} />
                                    <Heading
                                        fontSize="24px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Vida e Acidentes<br />Pessoais
                                    </Heading>
                                </VStack>
                            </Link>
                        </HStack>
                    </VStack>
                    {/* conteudo 3 */}
                    <HStack
                        w="60%"
                        h="45vh"
                        mt="150px"
                        justifyContent="center"
                        alignItems="center"
                        bg="#0D3A40"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Stack
                            w="40%"
                            h="210px"
                            justifyContent="center"
                            alignItems="center"
                            bgImage={bgStack}
                            bgRepeat="no-repeat"
                            bgSize="40%"
                            bgPosition="left"
                        >
                            <Heading
                                fontSize="30px"
                                fontFamily="Chivo"
                            >
                                Não desperdiçamos<br /><span style={{ paddingRight: '65px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '45px',
                                        fontWeight: '400'
                                    }
                                } >o seu tempo.</span>
                            </Heading>
                        </Stack>
                        <Stack
                            w="40%"
                            justifyContent="center"
                            alignItems="end"
                            gap="10"
                        >
                            <Heading
                                fontSize="14px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                Antes de entrar com a demanda judicial, fazemos uma análise minuciosa de
                                toda a apólice do seu seguro para traçar um <span style={{ textDecoration: 'underline' }} >plano estratégico de defesa.</span>
                            </Heading>
                            <Link to="#contatar">
                                <Button
                                    borderRadius="30px"
                                    bg="#0A292D"
                                    fontSize="16px"
                                    w="300px"
                                    h="65px"
                                    color="white"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                    textAlign="end"
                                    _hover={{
                                        border: '2px solid white',
                                        background: 'transparent',
                                    }}
                                >
                                    ENTRE EM CONTATO AGORA
                                </Button>
                            </Link>
                        </Stack>
                    </HStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="70%"
                        mt="150px"
                        bg="#0A292D"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <HStack>
                            <Stack
                                w="30%"
                            >
                                <Image w="100%" src={Caneta} />
                            </Stack>
                            <VStack>
                                <Stack
                                    w="850px"
                                    zIndex="3"
                                    ml="-220px"
                                    justifyContent="center"
                                    alignItems="end"
                                    p="30px"
                                    border="1px solid white"
                                    borderRadius="30px"
                                >
                                    <Heading
                                        textAlign="end"
                                        fontSize="32px"
                                        fontFamily="Chivo"
                                        fontWeight="400"
                                    >
                                        Conheça o nosso profissional sênior
                                    </Heading>
                                    <Heading
                                        textAlign="end"
                                        fontSize="24px"
                                        fontFamily="Libre Baskerville"
                                        fontStyle="italic"
                                        fontWeight="400"
                                    >
                                        OAB/RN 9308
                                    </Heading>
                                </Stack>
                                <br />
                                <Heading
                                    textAlign="start"
                                    fontSize="32px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    + DE 30 ANOS DE <span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '42px',
                                        fontWeight: '400'
                                    }} >experiência</span> COM<br />SEGURADORAS
                                </Heading>
                                <br />
                                <Heading
                                    textAlign="start"
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Especialista em Direito do Seguro, André Dantas é ex-professor
                                    da<br />Escola Nacional de Seguros e tem mais de 30 anos de experiência
                                    com<br />seguradoras.
                                </Heading>
                            </VStack>
                        </HStack>
                        <HStack
                            w="100%"
                            zIndex="3"
                            justifyContent="center"
                            alignItems="center"
                            gap="90"
                        >

                            <Image
                                w="200px"
                                src={AsteriscoVerde}
                                mt="-40px"
                            />

                            <Stack
                                w={flexHigth}
                                justifyContent="center"
                                alignItems="center"
                                gap="5"
                            >
                                <Heading
                                    textAlign="start"
                                    fontSize="32px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    NOSSA EQUIPE CONHECE <span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '34px',
                                            fontWeight: '400'
                                        }
                                    }>intimamente</span> AS CLÁUSULAS
                                </Heading>
                                <Heading
                                    textAlign="start"
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Algumas apólices de seguradoras podem conter mais de 120 páginas.
                                    <br />
                                    <br />
                                    Temos a qualificação necessária para prestar assessoria aos segurados
                                    nas etapas pré e pós-contratual, além de análise prévia de aviso de sinistros,
                                    evitando demandas judiciais e também atuando em ações em curso.
                                </Heading>
                            </Stack>
                        </HStack>
                        <VStack
                            w="75%"
                            mt="80px"
                            gap="10"
                            bg="#0A292D"
                            p="0px 40px 0px 40px"
                            zIndex={3}
                            borderRadius="30px"
                            pb="40px"
                        >
                            <Heading
                                textAlign="center"
                                fontSize="32px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                PRATICIDADE <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '42px',
                                    fontWeight: '400'
                                }} >simplificada</span>
                            </Heading>
                            <Heading
                                textAlign="center"
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                Acreditamos na praticidade. Por isso, simplifica os processos para
                                que você entenda a situação de forma clara, oferecendo uma visão geral
                                transparente de como a sua demanda judicial pode ser solucionada!
                            </Heading>
                        </VStack>
                    </VStack>
                    {/* conteudo 5 */}
                    <VStack
                        w="60%"
                        mt="-50px"
                        id="contatar"
                        bg="#DBF6F6"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="30px"
                        zIndex={1}
                        pb="70px"
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
                </Flex >
            )}

            {isMobileVersion && (
                <Flex
                    bg="#0A292D"
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
                        w="95%"
                        h="90vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="100px"
                    >
                        <Stack>
                            <Heading fontSize="40px" fontFamily="Chivo">
                                Sinta-se
                                <br />
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '58px',
                                    fontWeight: '400'
                                }}>
                                    Seguro
                                </span>
                                <br />
                                <span style={{ paddingRight: '100px' }}></span>
                                de verdade.
                            </Heading>
                        </Stack>
                        <Stack
                            h="30vh"
                            gap="100px"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="70%" src={Logo} />

                            </Stack>
                            <VStack
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                gap="10"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Tenha seus direitos protegidos
                                </Heading>
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                    textAlign="center"
                                >
                                    <span style={{ textDecoration: 'underline' }}>
                                        Resolva seu conflito
                                    </span> com sua seguradora de uma vez por todas.
                                </Heading>
                            </VStack>
                        </Stack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap="5"
                    >
                        <Heading
                            fontFamily="Chivo"
                            fontSize="22px"
                            fontWeight="400"
                            textAlign="center"
                        >
                            NOSSAS PRINCIPAIS ÁREAS DE ATUAÇÃO
                        </Heading>
                        <br />
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="5"
                        >
                            <Link
                                to="/servicos#automovel"
                            >
                                <VStack
                                    w="180px"
                                    h="205px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                >
                                    <Image w="30%" src={Automovel} />
                                    <Heading
                                        fontSize="16px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Automóvel
                                    </Heading>
                                </VStack>
                            </Link>
                            <Link to="/servicos#patrimoniais">
                                <VStack
                                    w="180px"
                                    h="205px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                >
                                    <Image w="30%" src={Patrimonial} />
                                    <Heading
                                        fontSize="16px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Patrimonial
                                    </Heading>
                                </VStack>
                            </Link>
                        </HStack>
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Link to="/servicos#vida">
                                <VStack
                                    w="220px"
                                    h="220px"
                                    justifyContent="center"
                                    alignItems="center"
                                    border="solid 1px #0D3A40"
                                    borderRadius="20px"
                                    gap="10"
                                >
                                    <Image w="30%" src={Acidentes} />
                                    <Heading
                                        fontSize="16px"
                                        fontWeight="400"
                                        fontFamily="Chivo"
                                        textAlign="center"
                                    >
                                        Vida e Acidentes<br />Pessoais
                                    </Heading>
                                </VStack>
                            </Link>
                        </HStack>
                    </VStack>
                    {/* conteudo 3 */}
                    <VStack
                        w="90%"
                        h="55vh"
                        mt="130px"
                        justifyContent="center"
                        alignItems="center"
                        bg="#0D3A40"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Stack
                            w="80%"
                            h="210px"
                            justifyContent="center"
                            alignItems="center"
                            bgImage={bgStack}
                            bgRepeat="no-repeat"
                            bgSize="40%"
                            bgPosition="left"
                        >
                            <Heading
                                fontSize="30px"
                                fontFamily="Chivo"
                            >
                                Não desperdiçamos<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '38px',
                                        fontWeight: '400'
                                    }
                                } >o seu tempo.</span>
                            </Heading>
                        </Stack>
                        <Stack
                            w="90%"
                            justifyContent="center"
                            alignItems="end"
                            gap="10"
                        >
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="400"
                                textAlign="justify"
                            >
                                Antes de entrar com a demanda judicial, fazemos uma análise minuciosa de
                                toda a apólice do seu seguro para traçar um <span style={{ textDecoration: 'underline' }} >plano estratégico de defesa.</span>
                            </Heading>
                            <Link to="#contatar">
                                <Button
                                    borderRadius="30px"
                                    bg="#0A292D"
                                    fontSize="13px"
                                    w="210px"
                                    h="55px"
                                    color="white"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                    textAlign="end"
                                    _hover={{
                                        border: '2px solid white',
                                        background: 'transparent',
                                    }}
                                >
                                    ENTRE EM CONTATO AGORA
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="90%"
                        mt="130px"
                        bg="#0A292D"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <HStack>
                            <Stack
                                w="100%"
                            >
                                <Image w="100%" src={Caneta} />
                            </Stack>
                            <VStack
                                justifyContent="start"
                                w="90%"
                                alignItems="start"
                            >
                                <Stack
                                    w="285px"
                                    ml="-90"
                                    zIndex="3"
                                    justifyContent="center"
                                    alignItems="end"
                                    p="30px"
                                    border="1px solid white"
                                    borderRadius="30px"
                                >
                                    <Heading
                                        textAlign="end"
                                        fontSize="20px"
                                        fontFamily="Chivo"
                                        fontWeight="400"
                                    >
                                        Conheça o nosso<br />
                                        profissional sênior
                                    </Heading>
                                    <Heading
                                        textAlign="end"
                                        fontSize="16px"
                                        fontFamily="Libre Baskerville"
                                        fontStyle="italic"
                                        fontWeight="400"
                                    >
                                        OAB/RN 9308
                                    </Heading>
                                </Stack>
                                <Image ml="-8" w="40%" src={AsteriscoVerde} />
                            </VStack>
                        </HStack>
                        <HStack
                            w="100%"
                            zIndex="3"
                            justifyContent="center"
                            alignItems="center"
                            gap="50"
                        >
                            <Stack
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                gap="10"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    + DE 30 ANOS DE <span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '28px',
                                        fontWeight: '400'
                                    }} >experiência</span> COM SEGURADORAS
                                </Heading>
                                <Heading
                                    textAlign="start"
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Especialista em Direito do Seguro, André Dantas é ex-professor
                                    da Escola Nacional de Seguros e tem mais de 30 anos de experiência
                                    comseguradoras.
                                </Heading>
                                <Heading
                                    textAlign="start"
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    NOSSA EQUIPE CONHECE <span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '28px',
                                            fontWeight: '400'
                                        }
                                    }>intimamente</span> AS CLÁUSULAS
                                </Heading>
                                <Heading
                                    textAlign="start"
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    Algumas apólices de seguradoras podem conter mais de 120 páginas.
                                    <br />
                                    <br />
                                    Temos a qualificação necessária para prestar assessoria aos segurados
                                    nas etapas pré e pós-contratual, além de análise prévia de aviso de sinistros,
                                    evitando demandas judiciais e também atuando em ações em curso.
                                </Heading>
                            </Stack>
                        </HStack>
                        <VStack
                            w="90%"
                            mt="80px"
                            gap="10"
                            bg="#0A292D"
                            p="0px 20px 0px 20px"
                            zIndex={3}
                            borderRadius="30px"
                            pb="40px"
                        >
                            <Heading
                                textAlign="center"
                                fontSize="20px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                PRATICIDADE <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '28px',
                                    fontWeight: '400'
                                }} >simplificada</span>
                            </Heading>
                            <Heading
                                textAlign="justify"
                                fontSize="15px"
                                fontFamily="Chivo"
                                fontWeight="300"
                            >
                                Acreditamos na praticidade. Por isso, simplifica os processos para
                                que você entenda a situação de forma clara, oferecendo uma visão geral
                                transparente de como a sua demanda judicial pode ser solucionada!
                            </Heading>
                        </VStack>
                    </VStack>
                    {/* conteudo 5 */}
                    <VStack
                        w="90%"
                        mt="-50px"
                        id="contatar"
                        bg="#DBF6F6"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="30px"
                        zIndex={1}
                        pb="70px"
                    >
                        <HStack
                            mt="180px"
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
            )
            }
        </>
    )
}