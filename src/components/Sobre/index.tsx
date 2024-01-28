import {
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    ListItem,
    Stack,
    UnorderedList,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react"

import Logo from '../../assets/Logo_Completo.png'


import Caneta from '../../assets/CanetaElemento.png'

import Elemento from '../../assets/elementoClaro.svg'

import '../../../style/global.css'
import { Link } from "react-router-dom"

export default function Sobre() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    bg="#0A292D"
                    w="100%"
                    id="sobre"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    color="#DBF6F6"
                    flexDirection="column"
                    p="60px 0px 120px 0px"
                >
                    {/* conteudo 1 */}
                    <HStack
                        w="100%"
                        h="90vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack w="40%">
                            <Heading fontSize="68px" fontFamily="Chivo">
                                Conheça a
                                <br />
                                <span style={{ paddingRight: '100px' }}></span>
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '60px',
                                    fontWeight: '400'
                                }}>
                                    Nossa Equipe
                                </span>
                            </Heading>
                        </Stack>
                        <Stack
                            w="30%"
                            h="90vh"
                            gap="60px"
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="60%" src={Logo} />
                            </Stack>
                            <VStack
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                gap="10"
                            >
                                <Image w="55%" src={Elemento} />
                            </VStack>
                        </Stack>
                    </HStack>
                    {/* conteudo 2 */}
                    <HStack
                        h="100vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            w="40%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image w="60%" src={Caneta} />
                        </Stack>
                        <Stack
                            w="36%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                            >
                                Com uma carreira de mais de três décadas
                                no mundo dos seguros, André Dantas é um profissional
                                com uma jornada marcada pela excelência e comprometimento.
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                            >
                                Iniciando sua carreira como corretor de seguros há 34 anos, André
                                desenvolveu um entendimento prático das complexidades do setor, assim
                                como as necessidades e desafios enfrentados por segurados e seguradoras.
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                            >
                                Há 13 anos, André ampliou seu escopo de atuação, tornando-se também um advogado
                                especializado em Direito do Seguro. Essa combinação única de experiência prática
                                como corretor e conhecimento jurídico aprofundado se torna uma vantagem competitiva
                                na atuação de André dentro da área do Direito do Seguro.
                            </Heading>
                        </Stack>
                    </HStack>
                    {/* conteudo 3 */}
                    <VStack
                        w="100%"
                        h="40vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontFamily="Chivo"
                            fontSize="32px"
                            fontWeight="400"
                        >
                            NOSSOS PRINCÍPIOS
                        </Heading>
                        <br />
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <VStack
                                w="280px"
                                h="150px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 1px #0D3A40"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="28px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    PRATICIDADE<br /><span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '35px',
                                        fontWeight: '400'
                                    }} >simplificada</span>
                                </Heading>
                            </VStack>
                            <VStack
                                w="280px"
                                h="150px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 1px #0D3A40"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="28px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    TRANSPARÊNCIA<br /><span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '35px',
                                        fontWeight: '400'
                                    }} >& respeito</span>
                                </Heading>
                            </VStack>
                            <VStack
                                w="280px"
                                h="150px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 1px #0D3A40"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="28px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    ATENÇÃO AOS<br /><span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '35px',
                                        fontWeight: '400'
                                    }} >mínimos detalhes</span>
                                </Heading>
                            </VStack>
                        </HStack>
                    </VStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="50%"
                        h="160vh"
                        mt="100px"
                        ml="-120px"
                        bg="#0A292D"
                        justifyContent="center"
                        alignItems="center"
                        border="solid 2px white"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Heading
                            mt="40px"
                            textAlign="center"
                            fontSize="28px"
                            fontFamily="Chivo"
                            fontWeight="400"
                        >
                            ÁREAS DE <span style={{
                                fontFamily: 'Libre Baskerville',
                                fontStyle: 'italic',
                                fontSize: '35px',
                                fontWeight: '400'
                            }} >atuação</span>
                        </Heading>
                        <HStack
                            w="100%"
                            mt="40px"
                            mr="-180"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Stack
                                bg="#0D3A40"
                                w="620px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="start"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="17px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa para Seguro automotivo
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Para garantir que os danos e prejuízos causados ao seu veículo,
                                    incluindo colisões, incêndios, roubos e vandalismos, sejam
                                    ressarcidos como acordado em apólice.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro para Carros</ListItem>
                                    <ListItem>Seguro para Motos</ListItem>
                                    <ListItem>Defesa em para Bicicletas</ListItem>
                                </UnorderedList>
                            </Stack>
                            <Stack
                                bg="#0D3A40"
                                w="620px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="start"
                                p="40px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="17px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa em Seguros de Vida e Acidentes Pessoais
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Ao fazer um seguro de vida, o que se espera é respeito e cuidado.
                                    Nem sempre é o caso. Nesses momentos, atuamos para garantir a
                                    indenização e a resolução do conflito o quanto antes.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro de Vida</ListItem>
                                    <ListItem>Seguro de Acidentes Pessoais</ListItem>
                                    <ListItem>Seguro para Despesas Médicas e Hospitalares</ListItem>
                                </UnorderedList>
                            </Stack>
                        </HStack>
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            mr="-180"
                            gap="10"
                        >
                            <Stack
                                bg="#0D3A40"
                                w="620px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="start"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="17px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa em Seguros Patrimoniais
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Protegendo o patrimônio de indivíduos e empresas que estão
                                    enfrentando desafios legais em áreas como incêndios em
                                    propriedades, riscos de engenharia, responsabilidade civil e muito mais.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro Residencia</ListItem>
                                    <ListItem>Seguro Empresarial</ListItem>
                                    <ListItem>Defesa para Equipamentos</ListItem>
                                </UnorderedList>
                            </Stack>
                            <Stack
                                bg="#0D3A40"
                                w="620px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="start"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="17px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Responsabilidade Civil
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Defendendo os interesses dos segurados em situações de responsabilidade,
                                    assegurando que eles estejam protegidos pelas seguradoras!
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro de Responsabilidade Civil Geral</ListItem>
                                    <ListItem>Seguro de Responsabilidade Profissional</ListItem>
                                    <ListItem>Seguro de Responsabilidade do Empregador</ListItem>
                                </UnorderedList>
                            </Stack>
                        </HStack>
                        <Stack
                            w="100%"
                            h="130vh"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link to="/servicos" onClick={scrollToTop}>
                                <Button
                                    bg="#DBF6F6"
                                    w="250px"
                                    h="55px"
                                    color="#0A292D"
                                    borderRadius="30px"
                                    fontFamily="Chivo"
                                    fontSize="14px"
                                    fontWeight="400"
                                    _hover={{
                                        bg: 'transparent',
                                        border: 'solid 2px #DBF6F6',
                                        color: '#DBF6F6'
                                    }}
                                >
                                    CONHEÇA NOSSOS SERVIÇOS
                                </Button>
                            </Link>

                        </Stack>
                    </VStack>
                </Flex>
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
                        h="50vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="20px"
                    >
                        <Stack
                            h="30vh"
                            gap="100px"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <HStack
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="70%" src={Logo} />
                            </HStack>
                        </Stack>
                        <Stack
                            h="20vh"
                            bgImage={Elemento}
                            bgSize="120px"
                            bgRepeat="no-repeat"
                            bgPosition="right"
                        >
                            <Heading fontSize="38px" fontFamily="Chivo">
                                Conheça a
                                <br />
                                <span style={{ paddingRight: '30px' }}></span>
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: '400'
                                }}>
                                    Nossa Equipe
                                </span>
                                <br />
                            </Heading>
                        </Stack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        h="110vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="5"
                    >
                        <Stack
                            w="80%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image w="60%" src={Caneta} />
                        </Stack>
                        <Stack
                            w="86%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="justify"
                            >
                                Com uma carreira de mais de três décadas
                                no mundo dos seguros, André Dantas é um profissional
                                com uma jornada marcada pela excelência e comprometimento.
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="justify"
                            >
                                Iniciando sua carreira como corretor de seguros há 34 anos, André
                                desenvolveu um entendimento prático das complexidades do setor, assim
                                como as necessidades e desafios enfrentados por segurados e seguradoras.
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="justify"
                            >
                                Há 13 anos, André ampliou seu escopo de atuação, tornando-se também um advogado
                                especializado em Direito do Seguro. Essa combinação única de experiência prática
                                como corretor e conhecimento jurídico aprofundado se torna uma vantagem competitiva
                                na atuação de André dentro da área do Direito do Seguro.
                            </Heading>
                        </Stack>
                    </VStack>
                    {/* conteudo 3 */}
                    <VStack
                        w="100%"
                        h="40vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="10"
                    >
                        <Heading
                            fontFamily="Chivo"
                            fontSize="28px"
                            fontWeight="400"
                        >
                            NOSSOS PRINCÍPIOS
                        </Heading>
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="2"
                        >
                            <VStack
                                w="280px"
                                h="120px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 1px #0D3A40"
                                borderRadius="20px"
                                gap="5"
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="18px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    PRATICIDADE<br /><span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '20px',
                                        fontWeight: '400'
                                    }} >simplificada</span>
                                </Heading>
                            </VStack>
                            <VStack
                                w="280px"
                                h="120px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 1px #0D3A40"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    textAlign="center"
                                    fontSize="18px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                >
                                    TRANSPARÊNCIA<br /><span style={{
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '20px',
                                        fontWeight: '400'
                                    }} >& respeito</span>
                                </Heading>
                            </VStack>
                        </HStack>
                        <VStack
                            w="280px"
                            h="120px"
                            justifyContent="center"
                            alignItems="center"
                            border="solid 1px #0D3A40"
                            borderRadius="20px"
                            gap="10"
                        >
                            <Heading
                                textAlign="center"
                                fontSize="18px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                ATENÇÃO AOS<br /><span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '20px',
                                    fontWeight: '400'
                                }} >mínimos detalhes</span>
                            </Heading>
                        </VStack>
                    </VStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="95%"
                        h="180vh"
                        mt="100px"
                        ml="-50px"
                        bg="#0A292D"
                        justifyContent="center"
                        alignItems="center"
                        border="solid 2px white"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Heading
                            mt="10px"
                            textAlign="center"
                            fontSize="28px"
                            fontFamily="Chivo"
                            fontWeight="400"
                        >
                            ÁREAS DE <span style={{
                                fontFamily: 'Libre Baskerville',
                                fontStyle: 'italic',
                                fontSize: '35px',
                                fontWeight: '400'
                            }} >atuação</span>
                        </Heading>
                        <VStack
                            w="100%"
                            mt="40px"
                            mr="-70"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Stack
                                bg="#0D3A40"
                                w="350px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa para Seguro automotivo
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Para garantir que os danos e prejuízos causados ao seu veículo,
                                    incluindo colisões, incêndios, roubos e vandalismos, sejam
                                    ressarcidos como acordado em apólice.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro para Carros</ListItem>
                                    <ListItem>Seguro para Motos</ListItem>
                                    <ListItem>Defesa em para Bicicletas</ListItem>
                                </UnorderedList>
                            </Stack>
                            <Stack
                                bg="#0D3A40"
                                w="350px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa em Seguros de Vida e Acidentes Pessoais
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Ao fazer um seguro de vida, o que se espera é respeito e cuidado.
                                    Nem sempre é o caso. Nesses momentos, atuamos para garantir a
                                    indenização e a resolução do conflito o quanto antes.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro de Vida</ListItem>
                                    <ListItem>Seguro de Acidentes Pessoais</ListItem>
                                    <ListItem>Seguro para Despesas Médicas e Hospitalares</ListItem>
                                </UnorderedList>
                            </Stack>
                        </VStack>
                        <VStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            mr="-70"
                            gap="10"
                        >
                            <Stack
                                bg="#0D3A40"
                                w="350px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Defesa em Seguros Patrimoniais
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Protegendo o patrimônio de indivíduos e empresas que estão
                                    enfrentando desafios legais em áreas como incêndios em
                                    propriedades, riscos de engenharia, responsabilidade civil e muito mais.
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro Residencia</ListItem>
                                    <ListItem>Seguro Empresarial</ListItem>
                                    <ListItem>Defesa para Equipamentos</ListItem>
                                </UnorderedList>
                            </Stack>
                            <Stack
                                bg="#0D3A40"
                                w="350px"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="500"
                                >
                                    Responsabilidade Civil
                                </Heading>
                                <Heading
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    Defendendo os interesses dos segurados em situações de responsabilidade,
                                    assegurando que eles estejam protegidos pelas seguradoras!
                                </Heading>
                                <UnorderedList
                                    alignItems="start"
                                    w="90%"
                                    fontSize="13px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                >
                                    <ListItem>Seguro de Responsabilidade Civil Geral</ListItem>
                                    <ListItem>Seguro de Responsabilidade Profissional</ListItem>
                                    <ListItem>Seguro de Responsabilidade do Empregador</ListItem>
                                </UnorderedList>
                            </Stack>
                        </VStack>
                        <Stack
                            w="100%"
                            h="130vh"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link to="/servicos" onClick={scrollToTop}>
                                <Button
                                    bg="#DBF6F6"
                                    w="250px"
                                    h="55px"
                                    color="#0A292D"
                                    borderRadius="30px"
                                    fontFamily="Chivo"
                                    fontSize="14px"
                                    fontWeight="400"
                                    _hover={{
                                        bg: 'transparent',
                                        border: 'solid 2px #DBF6F6',
                                        color: '#DBF6F6'
                                    }}
                                >
                                    CONHEÇA NOSSOS SERVIÇOS
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                </Flex>
            )}
        </>
    )
}