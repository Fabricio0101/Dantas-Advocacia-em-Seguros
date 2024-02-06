import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Icon,
    Image,
    VStack,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react"

import React, { MutableRefObject } from "react"

import { Link, useLocation } from 'react-router-dom'

import { HiMenuAlt3 } from 'react-icons/hi'

import Logo from '../../assets/marca.png'

import Marca from '../../assets/Asterisco.png'

import './style.css'

export default function Head() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef: MutableRefObject<HTMLButtonElement | null> = React.useRef(null)

    const location = useLocation()
    const isHomePage = location.pathname === "/"
    const isSobrePage = location.pathname === "/sobre"
    const isServicosPage = location.pathname === "/servicos"
    const isContatoPage = location.pathname === "/contato"

    return (
        <>
            {!isMobileVersion && (
                <Flex>
                    <HStack
                        w="100%"
                        h="90px"
                        bg={
                            isHomePage
                                ? "#0A292D"
                                : isSobrePage
                                    ? "#0A292D"
                                    : isServicosPage
                                        ? "#0D3A40"
                                        : isContatoPage
                                            ? "#DBF6F6"
                                            : "#0A292D"
                        }
                        justifyContent="center"
                        alignItems="center"
                        zIndex={8}
                        fontFamily="Chivo"
                    >
                        <HStack
                            w="90%"
                            alignItems="center"
                            justifyContent="start"
                            color={isContatoPage ? "#0A292D" : "white"}
                            gap="30px"
                        >
                            <Link to="/" className="meu-link">
                                Home
                            </Link>
                            <Link to="/sobre" className="meu-link">
                                Sobre
                            </Link>
                            <Link to="/servicos" className="meu-link">
                                Serviços
                            </Link>
                            <Link to="/contato" className="meu-link">
                                Contato
                            </Link>
                        </HStack>
                    </HStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    w="100vw"
                    bg="#0A292D"
                    justifyContent="end"
                    zIndex="8"
                    h="8vh"
                >
                    <HStack
                        w="100%"
                        justifyContent="end"
                    >
                        <Image w="100%" />
                        <Button
                            colorScheme='teal'
                            onClick={onOpen}
                            bg="transparent"
                            _hover={{
                                background: 'transparent'
                            }}
                        >
                            <Icon as={HiMenuAlt3}
                                boxSize={8}
                                color="white"
                            />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent
                                bg="#0D3A40"
                            >
                                <DrawerCloseButton color="white" />
                                <DrawerHeader>
                                    <HStack
                                        mt="40px"
                                    >
                                        <Image w="25%" src={Marca} />
                                        <Image w="40%" src={Logo} />
                                    </HStack>
                                </DrawerHeader>
                                <DrawerBody>
                                    <VStack
                                        w="100%"
                                        justifyContent="center"
                                        alignItems="start"
                                        gap={5}
                                        color="white"
                                    >
                                        <Link to="/">
                                            Home
                                        </Link>
                                        <Link to="/sobre">
                                            Sobre
                                        </Link>
                                        <Link to="/servicos">
                                            Serviços
                                        </Link>
                                        <Link to="/contato">
                                            Contato
                                        </Link>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://w.app/0emAJs">
                                            <Button
                                                bg="#6097A3"
                                                w="220px"
                                                h="55px"
                                                borderRadius="30px"
                                                fontFamily="Chivo"
                                                fontSize="18px"
                                                fontWeight="400"
                                                color="white"
                                                _hover={{
                                                    bg: 'transparent',
                                                    border: 'solid 2px #6097A3'
                                                }}
                                            >
                                                Fale Conosco
                                            </Button>
                                        </a>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </HStack>
                </Flex>
            )}
        </>
    )
}