import {
    Heading,
    Flex,
    HStack,
    Image,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react"

import { Link } from 'react-router-dom'

import Logo from '../../assets/marca.png'
import Marca from '../../assets/Asterisco.png'

export default function Footer() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <>
            {!isMobileVersion && (
                <Flex>
                    <HStack
                        h="400px"
                        w="100%"
                        id="contato"
                        align="center"
                        bg="#0D3A40"
                        bgSize="100%"
                        bgRepeat="no-repeat"
                        color="#ffffff"
                        justifyContent="space-around"
                        alignItems="center"
                        gap="250px"
                    >
                        <VStack
                            w="50%"
                            justifyContent="center"
                            h="100%"
                            alignItems="center"
                            gap="160px"
                        >
                            <HStack
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <HStack
                                    w="300px"
                                    alignItems="center"
                                    gap="10"
                                >
                                    <Image
                                        w="25%"
                                        src={Marca}
                                        alt="Dan Abramov"
                                    />
                                    <Image
                                        w="50%"
                                        src={Logo}
                                        alt="Dan Abramov"
                                    />
                                </HStack>
                            </HStack>
                            <HStack
                                w="90%"
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                            >
                                <Link to="/">
                                    Home
                                </Link>
                                <Link to="/sobre">
                                    Sobre
                                </Link>
                            </HStack>
                        </VStack>
                        <VStack
                            w="50%"
                            justify="center"
                            h="100%"
                            align="flex-start"
                            gap="10"
                        >
                            <Heading
                                fontSize="32px"
                                fontFamily="Chivo"
                            >
                                FALE <span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '43px',
                                        fontWeight: '400'
                                    }
                                }
                                >
                                    diretamente
                                </span>
                                <br /><span style={{ paddingRight: '100px' }}></span>
                                COM A NOSSA EQUIPE
                            </Heading>
                            <Heading
                                fontSize="24px"
                                fontFamily="Chivo"
                                fontWeight="400"
                                textAlign="start"
                            >
                                Ligue ou mande um Whatsapp para o número<br />(84)999820-4629.
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="start"
                            >
                                André Luiz Dantas - OAB/RN 9308<br />
                                Rua Dr. Luiz Felipe Câmara, nº 55,  Lagoa Nova<br />
                                Ed. Themis Tower, Sala 1606, Natal / RN, CEP: 59064-200

                            </Heading>
                        </VStack>
                    </HStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex>
                    <VStack
                        h="520px"
                        w="100%"
                        id="contato"
                        bg="#0D3A40"
                        bgSize="100%"
                        bgRepeat="no-repeat"
                        color="#ffffff"
                        justifyContent="center"
                        alignItems="center"
                        pb="40px"
                    >
                        <VStack
                            w="90%"
                            justifyContent="center"
                            h="100%"
                            alignItems="center"
                            gap="10"
                        >
                            <HStack w="100%">
                                <HStack
                                    w="90%"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap="5"
                                >
                                    <Image
                                        w="20%"
                                        src={Marca}
                                        alt="Dan Abramov"
                                    />
                                    <Image
                                        w="40%"
                                        src={Logo}
                                        alt="Dan Abramov"
                                    />
                                </HStack>
                            </HStack>
                            <HStack
                                w="90%"
                                alignItems="center"
                                justifyContent="start"
                                color="white"
                            >
                                <Link
                                    href="#inicio"
                                    pr="35px"
                                    textDecoration="none"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#proposito"
                                    pr="35px"
                                    textDecoration="none"
                                >
                                    Sobre
                                </Link>
                                <Link
                                    href="#fluxo"
                                    pr="35px"
                                    textDecoration="none"
                                >
                                    Serviços
                                </Link>
                                <Link
                                    href="#associar"
                                    pr="35px"
                                    textDecoration="none"
                                >
                                    Contato
                                </Link>
                            </HStack>
                        </VStack>
                        <VStack
                            w="90%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <Heading
                                fontSize="20px"
                                fontFamily="Chivo"
                            >
                                FALE <span style={
                                    {
                                        fontFamily: 'Libre Baskerville',
                                        fontStyle: 'italic',
                                        fontSize: '28px',
                                        fontWeight: '400'
                                    }
                                }
                                >
                                    diretamente
                                </span>
                                <br /><span style={{ paddingRight: '50px' }}></span>
                                COM A NOSSA EQUIPE
                            </Heading>
                            <Heading
                                fontSize="14px"
                                fontFamily="Chivo"
                                fontWeight="300"
                                textAlign="center"
                            >
                                Ligue ou mande um Whatsapp para o número<br />(84)999820-4629.
                            </Heading>
                            <Heading
                                fontSize="14px"
                                fontFamily="Chivo"
                                fontWeight="300"
                                textAlign="center"
                            >
                                André Luiz Dantas - OAB/RN 9308<br />
                                Rua Dr. Luiz Felipe Câmara, nº 55,  Lagoa Nova<br />
                                Ed. Themis Tower, Sala 1606, Natal / RN, CEP: 59064-200

                            </Heading>
                        </VStack>
                    </VStack>
                </Flex>
            )}
        </>
    )

}