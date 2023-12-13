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

import { Link } from 'react-router-dom'

import { HiMenuAlt3 } from 'react-icons/hi'

import Logo from '../../assets/marca.png'

import Marca from '../../assets/Asterisco.png'

export default function Head() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef: MutableRefObject<HTMLButtonElement | null> = React.useRef(null)

    return (
        <>
            {!isMobileVersion && (
                <Flex>
                    <HStack
                        w="100%"
                        h="90px"
                        bg="#0A292D"
                        justifyContent="center"
                        alignItems="center"
                        zIndex={8}
                        fontFamily="Chivo"
                    >
                        <HStack
                            w="90%"
                            alignItems="center"
                            justifyContent="start"
                            color="white"
                            gap="30px"
                        >
                            <Link to="/">
                                Home
                            </Link>
                            <Link to="/sobre">
                                Sobre
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
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://api.whatsapp.com/send?phone=558431131803">
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