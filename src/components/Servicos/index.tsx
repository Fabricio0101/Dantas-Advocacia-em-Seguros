import {
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    Stack,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react"


import ElementoVerde from '../../assets/AsteriscoVerde.svg'
import Carro from '../../assets/automovel.png'
import Vida from '../../assets/vida-acidentespessoais.png'
import Patrimoniais from '../../assets/patrimonial.png'
import bgStack from '../../assets/elemento.svg'
import Uniao from '../../assets/Uniao.png'
import Anotacao from '../../assets/Anotacao.svg'
import { HashLink as Link } from 'react-router-hash-link';

export default function Servicos() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <>
            {!isMobileVersion && (
                <Flex
                    bg="#0D3A40"
                    w="100%"
                    id="service"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    color="#DBF6F6"
                    flexDirection="column"
                    p="90px 0px 0px 0px"
                >
                    {/* conteudo 1 */}
                    <VStack
                        w="100%"
                        h="120vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="100px"
                    >
                        <HStack
                            w="1005px"
                            h="55vh"
                            justifyContent="center"
                            alignItems="center"
                            gap="90px"
                            p="0px 10px 0px 10px"
                            border="1px solid white"
                            borderRadius="60px"
                        >
                            <Heading
                                fontSize="60px"
                                fontFamily="Chivo"
                                textAlign="end"
                            >
                                Conheça nossas
                                <br />
                                <span style={{ paddingRight: '100px' }}></span>
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '100px',
                                    fontWeight: '400'
                                }}>
                                    Soluções
                                </span>
                            </Heading>
                            <Stack
                                w="305px"
                                h="85vh"
                                mb="340px"
                                justifyContent="end"
                                alignItems="center"
                                gap="40"
                                p="0px 10px 0px 10px"
                                border="1px solid white"
                                borderRadius="60px"
                            >
                                <Heading
                                    pb="90px"
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                    lineHeight="28px"
                                >
                                    Direito do Seguro<br />
                                    para te proteger<br />
                                    de verdade.
                                </Heading>
                            </Stack>
                        </HStack>
                        <HStack
                            w="70%"
                            h="50vh"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                            gap="40"
                        >
                            <Image w="20%" src={ElementoVerde} />
                            <VStack
                                w="50%"
                                justifyContent="center"
                                alignItems="center"
                                gap="10"
                            >
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                    lineHeight="25px"
                                >
                                    Nosso foco é claro e preciso: atuamos apenas com Direito do Seguro.
                                    Isso nos permite mergulhar fundo em cada caso, garantindo que nenhuma
                                    complexidade escape à nossa atenção minuciosa.
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                    lineHeight="25px"
                                >
                                    Seja uma negativa de indenização, cláusulas contratuais confusas ou litígios
                                    com seguradoras, estamos prontos para enfrentar os desafios com determinação.
                                </Heading>
                            </VStack>
                        </HStack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        h="250vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="10"
                    >
                        <HStack
                            w="70%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                h="100%"
                                w="100px"
                                alignItems="start"
                                justifyContent="start"
                            >
                                <Button
                                    bg="transparent"
                                    _hover={{
                                        background: 'transparent'
                                    }}
                                    fontSize="120px"
                                    color="#6097A3"
                                >
                                    .
                                </Button>
                            </Stack>
                            <Stack
                                w="50%"
                                h="65vh"
                                id="automovel"
                                justifyContent="center"
                                alignItems="start"
                                gap="5"
                            >
                                <Heading
                                    fontSize="35px"
                                    fontFamily="Chivo"

                                >
                                    AUTOMOVEL
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                >
                                    Proteção total do seus direitos para seu veículo
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    André Dantas e sua equipe estão preparados para defender seus
                                    direitos em casos de colisão, roubo, incêndio e danos a terceiros.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Nossa assessoria se estende à análise minuciosa dos contratos,
                                    garantindo que você tenha a cobertura que merece.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Se a seguradora negou sua indenização ou se recusou a cumprir
                                    as obrigações contratuais, Dantas Advocacia pode te ajudar a solucionar.
                                </Heading>
                            </Stack>
                            <Stack
                                w="30%"
                                h="60%"
                                justifyContent="start"
                                alignItems="center"
                            >
                                <Image w="40%" src={Carro} />
                            </Stack>
                        </HStack>
                        <HStack
                            w="70%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                w="30%"
                                h="100%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="50%" src={Vida} />
                            </Stack>
                            <Stack
                                w="50%"
                                h="65vh"
                                id="vida"
                                justifyContent="center"
                                alignItems="end"
                                gap="5"
                            >
                                <Heading
                                    fontSize="35px"
                                    fontFamily="Chivo"
                                    textAlign="end"

                                >
                                    VIDA E ACIDENTES PESSOAIS
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                    textAlign="end"
                                >
                                    Garantindo a proteção do que é mais valioso
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="end"
                                >
                                    O escritório Dantas Advocacia atua na área de seguros
                                    de vida e acidentes pessoais, garantindo que as seguradoras
                                    cumpram suas obrigações.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="end"
                                >
                                    Se você enfrentar dificuldades com o cancelamento unilateral de seu seguro
                                    de vida, atrasos injustificados em indenizações ou recusas de pagamento
                                    baseadas em cláusulas abusivas, estamos ao seu lado para garantir que seus
                                    direitos sejam respeitados.
                                </Heading>
                            </Stack>
                            <Stack
                                h="100%"
                                w="100px"
                                alignItems="end"
                                justifyContent="start"
                            >
                                <Button
                                    bg="transparent"
                                    _hover={{
                                        background: 'transparent'
                                    }}
                                    fontSize="120px"
                                    color="#6097A3"
                                >
                                    .
                                </Button>
                            </Stack>
                        </HStack>
                        <HStack
                            w="70%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                h="100%"
                                w="100px"
                                alignItems="start"
                                justifyContent="start"
                            >
                                <Button
                                    bg="transparent"
                                    _hover={{
                                        background: 'transparent'
                                    }}
                                    fontSize="120px"
                                    color="#6097A3"
                                >
                                    .
                                </Button>
                            </Stack>
                            <Stack
                                w="50%"
                                h="65vh"
                                id="patrimoniais"
                                justifyContent="center"
                                alignItems="start"
                                gap="5"
                            >
                                <Heading
                                    fontSize="35px"
                                    fontFamily="Chivo"

                                >
                                    PATRIMONIAIS
                                </Heading>
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                >
                                    Mais segurança para o seu patrimônio
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Seu patrimônio merece proteção sólida, mas nem sempre
                                    as seguradoras cumprem suas promessas. André Dantas é
                                    especialista em seguros patrimoniais, abrangendo desde
                                    incêndios em empresas e residências até riscos diversos
                                    e responsabilidade civil. Se você enfrentar cláusulas abusivas,
                                    negativas injustas ou aplicação indevida de termos contratuais,
                                    nossa equipe está preparada para agir em sua defesa.
                                </Heading>
                            </Stack>
                            <Stack
                                w="30%"
                                h="60%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="40%" src={Patrimoniais} />
                            </Stack>
                        </HStack>
                    </VStack>
                    {/* conteudo 3 */}
                    <HStack
                        w="80%"
                        h="70vh"
                        justifyContent="center"
                        alignItems="center"
                        bg="#0D3A40"
                        borderRadius="30px"
                    >
                        <VStack
                            w="50%"
                            justifyContent="center"
                            alignItems="start"
                        >
                            <VStack
                                h="230px"
                                justifyContent="center"
                                alignItems="center"
                                bgImage={bgStack}
                                bgRepeat="no-repeat"
                                bgSize="40%"
                                bgPosition="left"
                            >
                                <Heading
                                    fontSize="28px"
                                    fontFamily="Chivo"
                                >
                                    Proteção Completa em Diversos<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '50px',
                                            fontWeight: '400'
                                        }
                                    } >Ramos do Seguro</span>
                                </Heading>
                            </VStack>
                            <VStack
                                justifyContent="center"
                                alignItems="center"
                                gap="8"
                            >
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Além das áreas mencionadas acima, o escritório Dantas Advocacia atua em uma
                                    variedade de ramos securitários, incluindo responsabilidade civil, transportes,
                                    riscos diversos e muito mais.
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Nossa equipe dedicada tem o conhecimento e a experiência para orientar você
                                    através de situações complexas e desafiadoras, garantindo que você esteja
                                    plenamente informado sobre seus direitos e opções.
                                </Heading>
                            </VStack>
                        </VStack>
                        <Stack
                            w="40%"
                            justifyContent="center"
                            alignItems="end"
                            gap="10"
                        >
                            <Image w="80%" src={Uniao} />
                        </Stack>
                    </HStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="50%"
                        h="120vh"
                        mt="100px"
                        justifyContent="center"
                        alignItems="center"
                        border="solid 2px white"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Stack
                            w="80%"
                            h="40vh"
                            alignItems="center"
                            justifyContent="center"
                            gap="10"
                        >
                            <Heading
                                mt="40px"
                                textAlign="center"
                                fontSize="28px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                ESTAR SEGURO É SABER<br />
                                COM QUEM
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '35px',
                                    fontWeight: '400'
                                }} > pode contar</span>
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="center"
                            >
                                Na Dantas Advocacia em Seguros, acreditamos em uma abordagem personalizada
                                para cada situação. Ouvimos suas preocupações e estudamos o contrato a
                                fundo para fornecer orientação jurídica sólida através da nossa assessoria.
                            </Heading>
                        </Stack>
                        <HStack
                            w="980px"
                            h="70vh"
                            borderRadius="30px"
                            mb="-40px"
                            justifyContent="center"
                            alignItems="center"
                            bg="#0A292D"
                            gap="10"
                        >
                            <Stack
                                w="40%"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Image w="50%" src={Anotacao} />
                            </Stack>
                            <VStack
                                w="60%"
                                h="280px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="start"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                >
                                    ANTES DE QUALQUER PROBLEMA,<br /><span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '30px',
                                            fontWeight: '400'
                                        }
                                    } >entenda o seu contato a fundo.</span>
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                >
                                    Compreendemos a importância crucial do momento de contratação de um seguro.
                                    Por isso, nossa equipe está pronta para orientá-lo em cada etapa, garantindo
                                    que você compreenda totalmente os termos, cláusulas e obrigações antes de
                                    assinar qualquer apólice.
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                >
                                    A análise minuciosa é nossa especialidade, e estamos empenhados em assegurar
                                    que você faça as escolhas certas para proteger seus interesses.
                                </Heading>
                            </VStack>
                        </HStack>
                    </VStack>
                    {/* conteudo 5 */}
                    <VStack
                        w="100%"
                        h="130vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontSize="28px"
                            fontFamily="Chivo"
                        >
                            CONHEÇA A NOSSA<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                {
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: '400'
                                }
                            } >abordagem</span>
                        </Heading>
                        <br />
                        <HStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <VStack
                                w="300px"
                                h="300px"
                                justifyContent="center"
                                alignItems="center"
                                p="20px"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    ANÁLISE<br />DETALHADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Cada apólice é submetida a uma análise minuciosa por nossa equipe,
                                    identificando claramente os termos e condições para evitar
                                    surpresas desagradáveis no futuro
                                </Heading>
                            </VStack>
                            <VStack
                                w="300px"
                                h="300px"
                                p="20px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    ORIENTAÇÃO<br />SIMPLIFICADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Estaremos à disposição para explicar de forma acessível todas as nuances
                                    das apólices, garantindo que você compreenda plenamente seus direitos
                                    e obrigações.
                                </Heading>
                            </VStack>
                            <VStack
                                w="300px"
                                h="300px"
                                p="30px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    TOMADA DE DECISÕES<br />INFORMADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Nossa assessoria qualificada permite que você tome decisões informadas,
                                    tendo a confiança de que está fazendo a escolha certa para sua proteção
                                    e tranquilidade.
                                </Heading>
                            </VStack>
                        </HStack>
                        <Stack
                            w="100%"
                            h="30vh"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link to="/contato#form">
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
                                    ENTRE EM CONTATO AGORA
                                </Button>
                            </Link>
                        </Stack>
                    </VStack>
                </Flex>
            )}

            {isMobileVersion && (
                <Flex
                    bg="#0D3A40"
                    w="100%"
                    h="100%"
                    justifyContent="center"
                    alignItems="center"
                    color="#DBF6F6"
                    flexDirection="column"
                >
                    {/* conteudo 1 */}
                    <VStack
                        w="95%"
                        h="90vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="20"
                    >
                        <HStack
                            w="100%"
                            h="15vh"
                            gap="5"
                            justifyContent="center"
                            alignItems="center"
                            border="1px solid white"
                            borderRadius="30px"
                        >
                            <Heading fontSize="25px" fontFamily="Chivo">
                                Conheça nossas
                                <br />
                                <span style={{ paddingRight: '30px' }}></span>
                                <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '38px',
                                    fontWeight: '400'
                                }}>
                                    Soluções
                                </span>
                                <br />
                            </Heading>
                            <Stack
                                w="145px"
                                h="50vh"
                                mb="340px"
                                justifyContent="end"
                                alignItems="center"
                                gap="40"
                                p="0px 10px 0px 10px"
                                border="1px solid white"
                                borderRadius="40px"
                            >
                                <Heading
                                    pb="20px"
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="400"
                                    lineHeight="22px"
                                >
                                    Direito do Seguro<br />
                                    para te proteger<br />
                                    de verdade.
                                </Heading>
                            </Stack>
                        </HStack>
                        <VStack
                            w="90%"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                            gap="10"
                        >
                            <Image w="30%" src={ElementoVerde} />
                            <VStack
                                w="100%"
                                justifyContent="center"
                                alignItems="center"
                                gap="10"
                            >
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                    lineHeight="25px"
                                    textAlign="justify"
                                >
                                    Nosso foco é claro e preciso: atuamos apenas com Direito do Seguro.
                                    Isso nos permite mergulhar fundo em cada caso, garantindo que nenhuma
                                    complexidade escape à nossa atenção minuciosa.
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="300"
                                    lineHeight="25px"
                                    textAlign="justify"
                                >
                                    Seja uma negativa de indenização, cláusulas contratuais confusas ou litígios
                                    com seguradoras, estamos prontos para enfrentar os desafios com determinação.
                                </Heading>
                            </VStack>
                        </VStack>
                    </VStack>
                    {/* conteudo 2 */}
                    <VStack
                        w="100%"
                        h="170vh"
                        justifyContent="center"
                        alignItems="center"
                        gap="10"
                    >
                        <VStack
                            w="90%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                w="30%"
                                h="20%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="60%" src={Carro} />
                            </Stack>
                            <Stack
                                w="90%"
                                h="40vh"
                                id="automovel"
                                justifyContent="center"
                                alignItems="center"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                >
                                    AUTOMOVEL
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                    textAlign="center"
                                >
                                    Proteção total do seus direitos para seu veículo
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    André Dantas e sua equipe estão preparados para defender seus
                                    direitos em casos de colisão, roubo, incêndio e danos a terceiros.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Nossa assessoria se estende à análise minuciosa dos contratos,
                                    garantindo que você tenha a cobertura que merece.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Se a seguradora negou sua indenização ou se recusou a cumprir
                                    as obrigações contratuais, Dantas Advocacia pode te ajudar a solucionar.
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            w="90%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                w="30%"
                                h="20%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="80%" src={Vida} />
                            </Stack>
                            <Stack
                                w="90%"
                                h="40vh"
                                id="vida"
                                justifyContent="center"
                                alignItems="center"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    VIDA E ACIDENTES PESSOAIS
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                    textAlign="center"
                                >
                                    Garantindo a proteção do que é mais valioso
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    O escritório Dantas Advocacia atua na área de seguros
                                    de vida e acidentes pessoais, garantindo que as seguradoras
                                    cumpram suas obrigações.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Se você enfrentar dificuldades com o cancelamento unilateral de seu seguro
                                    de vida, atrasos injustificados em indenizações ou recusas de pagamento
                                    baseadas em cláusulas abusivas, estamos ao seu lado para garantir que seus
                                    direitos sejam respeitados.
                                </Heading>
                            </Stack>
                        </VStack>
                        <VStack
                            w="90%"
                            bg="#0A292D"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius="30px"
                        >
                            <Stack
                                w="30%"
                                h="20%"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image w="60%" src={Patrimoniais} />
                            </Stack>
                            <Stack
                                w="90%"
                                h="40vh"
                                id="patrimoniais"
                                justifyContent="center"
                                alignItems="center"
                                gap="5"
                            >
                                <Heading
                                    fontSize="20px"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    PATRIMONIAIS
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                    textAlign="center"
                                >
                                    Mais segurança para o seu patrimônio
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Seu patrimônio merece proteção sólida, mas nem sempre
                                    as seguradoras cumprem suas promessas. André Dantas é
                                    especialista em seguros patrimoniais, abrangendo desde
                                    incêndios em empresas e residências até riscos diversos
                                    e responsabilidade civil. Se você enfrentar cláusulas abusivas,
                                    negativas injustas ou aplicação indevida de termos contratuais,
                                    nossa equipe está preparada para agir em sua defesa.
                                </Heading>
                            </Stack>
                        </VStack>
                    </VStack>
                    {/* conteudo 3 */}
                    <VStack
                        w="80%"
                        h="90vh"
                        justifyContent="center"
                        alignItems="center"
                        bg="#0D3A40"
                        borderRadius="30px"
                    >
                        <Stack
                            w="90%"
                            justifyContent="center"
                            alignItems="end"
                            gap="10"
                        >
                            <Image w="80%" src={Uniao} />
                        </Stack>
                        <VStack
                            w="100%"
                            justifyContent="center"
                            alignItems="start"
                        >
                            <VStack
                                h="230px"
                                justifyContent="center"
                                alignItems="center"
                                bgImage={bgStack}
                                bgRepeat="no-repeat"
                                bgSize="40%"
                                bgPosition="right"
                            >
                                <Heading
                                    fontSize="32px"
                                    fontFamily="Chivo"
                                >
                                    Proteção Completa em Diversos<br /><span style={{ paddingRight: '30px' }}></span><span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '38px',
                                            fontWeight: '400'
                                        }
                                    } >Ramos do Seguro</span>
                                </Heading>
                            </VStack>
                            <VStack
                                justifyContent="center"
                                alignItems="center"
                                gap="8"
                            >
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Além das áreas mencionadas acima, o escritório Dantas Advocacia atua em uma
                                    variedade de ramos securitários, incluindo responsabilidade civil, transportes,
                                    riscos diversos e muito mais.
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Nossa equipe dedicada tem o conhecimento e a experiência para orientar você
                                    através de situações complexas e desafiadoras, garantindo que você esteja
                                    plenamente informado sobre seus direitos e opções.
                                </Heading>
                            </VStack>
                        </VStack>
                    </VStack>
                    {/* conteudo 4 */}
                    <VStack
                        w="90%"
                        h="120vh"
                        mt="100px"
                        justifyContent="center"
                        alignItems="center"
                        border="solid 2px white"
                        borderRadius="30px"
                        gap="10"
                    >
                        <Stack
                            w="80%"
                            h="40vh"
                            alignItems="center"
                            justifyContent="center"
                            gap="10"
                        >
                            <Heading
                                mt="10px"
                                textAlign="center"
                                fontSize="22px"
                                fontFamily="Chivo"
                                fontWeight="400"
                            >
                                ESTAR SEGURO É SABER<br />
                                COM QUEM <span style={{
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '28px',
                                    fontWeight: '400'
                                }} >pode contar</span>
                            </Heading>
                            <Heading
                                fontSize="16px"
                                fontFamily="Chivo"
                                fontWeight="200"
                                textAlign="justify"
                            >
                                Na Dantas Advocacia em Seguros, acreditamos em uma abordagem personalizada
                                para cada situação. Ouvimos suas preocupações e estudamos o contrato a
                                fundo para fornecer orientação jurídica sólida através da nossa assessoria.
                            </Heading>
                        </Stack>
                        <VStack
                            w="400px"
                            h="70vh"
                            borderRadius="20px"
                            mb="-60px"
                            justifyContent="center"
                            alignItems="center"
                            bg="#0A292D"
                            gap="10"
                        >
                            <Stack
                                w="90%"
                                h="210px"
                                borderRadius="10px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Image w="50%" src={Anotacao} />
                            </Stack>
                            <VStack
                                w="95%"
                                h="210px"
                                borderRadius="20px"
                                justifyContent="center"
                                alignItems="center"
                                p="30px"
                                gap="5"
                            >
                                <Heading
                                    fontSize="18px"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    ANTES DE QUALQUER PROBLEMA,<br /><span style={
                                        {
                                            fontFamily: 'Libre Baskerville',
                                            fontStyle: 'italic',
                                            fontSize: '26px',
                                            fontWeight: '400'
                                        }
                                    } >entenda o seu contato a fundo.</span>
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="justify"
                                >
                                    Compreendemos a importância crucial do momento de contratação de um seguro.
                                    Por isso, nossa equipe está pronta para orientá-lo em cada etapa, garantindo
                                    que você compreenda totalmente os termos, cláusulas e obrigações antes de
                                    assinar qualquer apólice.
                                </Heading>
                                <Heading
                                    fontSize="14px"
                                    fontFamily="Chivo"
                                    fontWeight="600"
                                    textAlign="justify"
                                >
                                    A análise minuciosa é nossa especialidade, e estamos empenhados em assegurar
                                    que você faça as escolhas certas para proteger seus interesses.
                                </Heading>
                            </VStack>
                        </VStack>
                    </VStack>
                    {/* conteudo 5 */}
                    <VStack
                        w="100%"
                        h="130vh"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontSize="28px"
                            fontFamily="Chivo"
                        >
                            CONHEÇA A NOSSA<br /><span style={{ paddingRight: '80px' }}></span><span style={
                                {
                                    fontFamily: 'Libre Baskerville',
                                    fontStyle: 'italic',
                                    fontSize: '50px',
                                    fontWeight: '400'
                                }
                            } >abordagem</span>
                        </Heading>
                        <br />
                        <VStack
                            w="100%"
                            justifyContent="center"
                            alignItems="center"
                            gap="10"
                        >
                            <VStack
                                w="95%"
                                h="230px"
                                justifyContent="center"
                                alignItems="center"
                                p="20px"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    ANÁLISE<br />DETALHADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Cada apólice é submetida a uma análise minuciosa por nossa equipe,
                                    identificando claramente os termos e condições para evitar
                                    surpresas desagradáveis no futuro
                                </Heading>
                            </VStack>
                            <VStack
                                w="95%"
                                h="230px"
                                p="20px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    ORIENTAÇÃO<br />SIMPLIFICADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Estaremos à disposição para explicar de forma acessível todas as nuances
                                    das apólices, garantindo que você compreenda plenamente seus direitos
                                    e obrigações.
                                </Heading>
                            </VStack>
                            <VStack
                                w="95%"
                                h="230px"
                                p="30px"
                                justifyContent="center"
                                alignItems="center"
                                border="solid 2px #0A292D"
                                borderRadius="20px"
                                gap="10"
                            >
                                <Heading
                                    fontSize="24px"
                                    fontWeight="400"
                                    fontFamily="Chivo"
                                    textAlign="center"
                                >
                                    TOMADA DE DECISÕES<br />INFORMADA
                                </Heading>
                                <Heading
                                    fontSize="16px"
                                    fontFamily="Chivo"
                                    fontWeight="200"
                                    textAlign="center"
                                >
                                    Nossa assessoria qualificada permite que você tome decisões informadas,
                                    tendo a confiança de que está fazendo a escolha certa para sua proteção
                                    e tranquilidade.
                                </Heading>
                            </VStack>
                        </VStack>
                        <Stack
                            w="100%"
                            h="20vh"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link to="/contato#form">
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