import { Image } from "react-native";
import { Container, QueridometroContainer, Quantity, EmojiContainer, EmojiContent, Name, QueridometroExternalContainer, QueridometroInternalContainer, QuantityContainer, QuantityInternalContainer, InternalContainer } from "./styles";

const users = [
    {
        nameShowsUp: "Aline Wirley",
        photo: "https://s2.glbimg.com/fUleUpPFtOwzWzhcjXUCT-RF76o=/120x120/top/smart/s2.glbimg.com/xCGyvVlHnMIJKLFz_ncMWQtz6mM=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/P/q/9fJQOPQYupPSYSqTLOGQ/aline-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [2, 3, 4, 5],
        }],
    },
    {
        nameShowsUp: "Amanda",
        photo: "https://s2.glbimg.com/E8vDMy2iHsVbzLPqXQQCv0cuUuc=/120x120/top/smart/s2.glbimg.com/j13SWvCHdwRAph2zfvRqRKUoWhQ=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/d/W/K679VmSVugv0HZAHf7IA/amanda-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [9, 2, 4, 6],
        }],
    },
    {
        nameShowsUp: "Antonio 'Cara de Sapato'",
        photo: "https://s2.glbimg.com/uAAzNauIwgSoAKN_2N0EEf1gWkE=/120x120/top/smart/s2.glbimg.com/75Wz1MSL1zJyHQtdm1MHYTV5q74=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/p/h/K5RqfaRb24BgipBNuzAQ/antonio-cara-de-sapato-jr.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [10, 4, 2, 1],
        }],
    },
    {
        nameShowsUp: "Bruna Griphao",
        photo: "https://s2.glbimg.com/w2D7pl--DvN44BIY-u69JqTVkZQ=/120x120/top/smart/s2.glbimg.com/p_I9a4UI6KusEsBFWOQ8U4QYjNU=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/y/x/CE0hq5RhWO1uwQ3v4neQ/bruna-griphao-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [6, 3, 2, 1],
        }],
    },
    {
        nameShowsUp: "Bruno",
        photo: "https://s2.glbimg.com/DI3fTVqJ231qZHMF64jxaVfmHKA=/120x120/top/smart/s2.glbimg.com/unB34BfCTt1d-Z4jQSP9HNOVQGI=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/R/Y/Gf28zNTAAxlKmHXxm7SA/bruno-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [3, 10, 2, 1],
        }],
    },
    {
        nameShowsUp: "Cezar",
        photo: "https://s2.glbimg.com/KYFCP4LJSjNXR-jf8tUFZPmOhXo=/120x120/top/smart/s2.glbimg.com/t1JhWpbgBuobqsZDB0YsJaadoMY=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/B/M/4BpriXSUyte7qfAlDruw/cezar-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [2, 1, 10, 3],
        }],
    },
    {
        nameShowsUp: "Cristian",
        photo: "https://s2.glbimg.com/qCxBRFLegyHtE9Vj2y39BY_0Bjg=/120x120/top/smart/s2.glbimg.com/nKWH6tZGRN5x3naMbxBVSb6k29g=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/w/Z/1BhzfBTPqkPtVUzmzn4g/cristian-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [10, 4, 2, 1],
        }],
    },
    {
        nameShowsUp: "Domitila Barros",
        photo: "https://s2.glbimg.com/i5-XtNQHk2wyHpAllvbkuQGrM2U=/120x120/top/smart/s2.glbimg.com/f5uxW1J16NnHbJfsD9JB6JxWJus=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/8/0/alwv1FReKyYvnpFReLBg/domitila-barros-pagina.png",
        quantity: [{
            emojis: ["💔", "🐍", "🤮", "🍪"],
            quantityNumber: [10, 4, 2, 1],
        }],
    },
];

const Queridometro = () => {
    return (
        <Container>
            <InternalContainer>
                {users.map((user, index) => (
                    <QueridometroContainer>
                        <Image source={{ uri: user.photo }} style={{ width: 50, height: 50, borderRadius: 999 }} />
                        <QueridometroExternalContainer>
                            <QueridometroInternalContainer>
                                {user.quantity.map((item) => (
                                    <QuantityContainer key={item.emojis.toString()}>
                                        {item.emojis.map((emoji, index) => (
                                            <QuantityInternalContainer key={emoji}>
                                                <EmojiContent>
                                                    <EmojiContainer>{emoji}</EmojiContainer>
                                                </EmojiContent>
                                                <Quantity>+{item.quantityNumber[index]}</Quantity>
                                            </QuantityInternalContainer>
                                        ))}
                                    </QuantityContainer>
                                ))}
                                <Name>{user.nameShowsUp}</Name>
                            </QueridometroInternalContainer>
                        </QueridometroExternalContainer>
                    </QueridometroContainer>
                ))}
            </InternalContainer>
        </Container>
    )
}

export default Queridometro;
