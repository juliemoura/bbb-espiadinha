import { useState } from "react";
import { Container, ContainerInput, ExternalContainer, IconContainer, Input, IconContent, Title, NameWithImage } from "./styles";
import { Image } from "react-native";

const users = [
    {
        name: "Aline",
        nameShowsUp: "Aline Wirley",
        photo: "https://s2.glbimg.com/fUleUpPFtOwzWzhcjXUCT-RF76o=/120x120/top/smart/s2.glbimg.com/xCGyvVlHnMIJKLFz_ncMWQtz6mM=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/P/q/9fJQOPQYupPSYSqTLOGQ/aline-pagina.png",
    },
    {
        name: "Amanda",
        nameShowsUp: "Amanda",
        photo: "https://s2.glbimg.com/E8vDMy2iHsVbzLPqXQQCv0cuUuc=/120x120/top/smart/s2.glbimg.com/j13SWvCHdwRAph2zfvRqRKUoWhQ=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/d/W/K679VmSVugv0HZAHf7IA/amanda-pagina.png",
    },
    {
        name: "Sapato",
        nameShowsUp: "Antonio 'Cara de Sapato'",
        photo: "https://s2.glbimg.com/uAAzNauIwgSoAKN_2N0EEf1gWkE=/120x120/top/smart/s2.glbimg.com/75Wz1MSL1zJyHQtdm1MHYTV5q74=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/p/h/K5RqfaRb24BgipBNuzAQ/antonio-cara-de-sapato-jr.png",
    },
    {
        name: "Bruna",
        nameShowsUp: "Bruna Griphao",
        photo: "https://s2.glbimg.com/w2D7pl--DvN44BIY-u69JqTVkZQ=/120x120/top/smart/s2.glbimg.com/p_I9a4UI6KusEsBFWOQ8U4QYjNU=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/y/x/CE0hq5RhWO1uwQ3v4neQ/bruna-griphao-pagina.png",
    },
    {
        name: "Bruno",
        nameShowsUp: "Bruno",
        photo: "https://s2.glbimg.com/DI3fTVqJ231qZHMF64jxaVfmHKA=/120x120/top/smart/s2.glbimg.com/unB34BfCTt1d-Z4jQSP9HNOVQGI=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/R/Y/Gf28zNTAAxlKmHXxm7SA/bruno-pagina.png",
    },
    {
        name: "Cezar",
        nameShowsUp: "Cezar",
        photo: "https://s2.glbimg.com/KYFCP4LJSjNXR-jf8tUFZPmOhXo=/120x120/top/smart/s2.glbimg.com/t1JhWpbgBuobqsZDB0YsJaadoMY=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/B/M/4BpriXSUyte7qfAlDruw/cezar-pagina.png",
    },
    {
        name: "Cristian",
        nameShowsUp: "Cristian",
        photo: "https://s2.glbimg.com/qCxBRFLegyHtE9Vj2y39BY_0Bjg=/120x120/top/smart/s2.glbimg.com/nKWH6tZGRN5x3naMbxBVSb6k29g=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/w/Z/1BhzfBTPqkPtVUzmzn4g/cristian-pagina.png",
    },
    {
        name: "Domitila",
        nameShowsUp: "Domitila Barros",
        photo: "https://s2.glbimg.com/i5-XtNQHk2wyHpAllvbkuQGrM2U=/120x120/top/smart/s2.glbimg.com/f5uxW1J16NnHbJfsD9JB6JxWJus=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/8/0/alwv1FReKyYvnpFReLBg/domitila-barros-pagina.png",
    },
    {
        name: "Fred",
        nameShowsUp: "Fred",
        photo: "https://s2.glbimg.com/S5Rn5XlwXI1vUVoIxqhwuNak_gA=/120x120/top/smart/s2.glbimg.com/5K-Q7ylFAiPMTtgVKdtUFt6UvSY=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/i/t/rwyRcNRAO0MKeDpslYyg/fred-pagina.png",
    },
    {
        name: "Fred N",
        nameShowsUp: "Fred Nicacio",
        photo: "https://s2.glbimg.com/ozYvf7AnOG7mQZez1U4IgXgolxY=/120x120/top/smart/s2.glbimg.com/Y7vXCpnUqEl0hYM6Jynnxd-vU3k=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/a/B/9s0G9BTAqxRzvKDNirLg/fred-nicacio-pagina.png",
    },
    {
        name: "Gabriel",
        nameShowsUp: "Gabriel",
        photo: "https://s2.glbimg.com/UxGSq3KPLB6fod5SMSv6_PbXOgs=/120x120/top/smart/s2.glbimg.com/QMB6SXPd1XWbHm4umIdBsgYqfK8=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/e/0/3sy3tXRHiS2GHmtkXhIQ/gabriel-enquete-1-.png",
    },
    {
        name: "Gabriel S",
        nameShowsUp: "Gabriel Santana",
        photo: "https://s2.glbimg.com/Xc4_axLju90WZ1P2Lv0ua-IS66s=/120x120/top/smart/s2.glbimg.com/MeIoh5gmPv3rLqau5aREgSc8fq0=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/z/H/Ae0NaqTg6BlQpziMWT9A/gabriel-santana-pagina.png",
    },
    {
        name: "Gustavo",
        nameShowsUp: "Gustavo",
        photo: "https://s2.glbimg.com/kGw2l2KefKq3-coTzLhISdbimAM=/120x120/top/smart/s2.glbimg.com/4t8lR072u_6cRzxHBoyI2V88cq0=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/q/s/uJf23HTOeQS7bzWILASw/gustavo-pagina.png",
    },
    {
        name: "Key",
        nameShowsUp: "Key Alves",
        photo: "https://s2.glbimg.com/XFadb8FHkK59yLinvqqK9oD2aEE=/120x120/top/smart/s2.glbimg.com/rof5hjunB3Us-b0mD9a3KroHSEQ=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/D/J/KRpPGsQOeRuK7n5BiOtQ/key-alves-pagina.png",
    },
    {
        name: "Larissa",
        nameShowsUp: "Larissa",
        photo: "https://s2.glbimg.com/zWtYAovAHKeSx1_EXM4wt7OOx5w=/120x120/top/smart/s2.glbimg.com/T6-7cTULPUuBzX_RvpoB9IxSmxE=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/A/C/cBLmjJTOKIyUsD5SrAMQ/larissa-pagina.png",
    },
    {
        name: "Marilia",
        nameShowsUp: "Marília",
        photo: "https://s2.glbimg.com/1PuQk7xaI-w61KTF05kQ_5cCG_E=/120x120/top/smart/s2.glbimg.com/2hmr-IUcMUv4PbEG1X7769uA9eM=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/s/5/oUdzuxT4uxutKOjtYt1w/marilia-pagina-1-.png",
    },
    {
        name: "Marvvila",
        nameShowsUp: "Marvvila",
        photo: "https://s2.glbimg.com/jgbDmz4h8Q2NjfGIjb3P1l68BZg=/120x120/top/smart/s2.glbimg.com/A7zg63UBFA6yVjxqUtICcLn0kbA=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/y/7/woEYjNTkGviOcQBgbjPw/marvvila-pagina.png",
    },
    {
        name: "Guime",
        nameShowsUp: "MC Guimê",
        photo: "https://s2.glbimg.com/omH8XNCE7IaBJhDA-Mo6nn9LaaQ=/120x120/top/smart/s2.glbimg.com/GdB-ZMRxmn0LAiNapQwdlT-rfYA=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/h/F/yQYAVDQxasPFBI00X5BA/mc-guime-pagina.png",
    },
    {
        name: "Paula",
        nameShowsUp: "Paula",
        photo: "https://s2.glbimg.com/FY6EIolcVBz222Zyy5_MSwOMaF4=/120x120/top/smart/s2.glbimg.com/brfwVB15mKHKU2H3cD4V3w1ZL3I=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/c/q/ryVHRRSwy5XjsIlidy4A/paula-pagina-1-.png",
    },
    {
        name: "Ricardo",
        nameShowsUp: "Ricardo",
        photo: "https://s2.glbimg.com/jalIn8mJFOl4ma8A8J8ma4Y8WSI=/120x120/top/smart/s2.glbimg.com/Bp1afHpLtu6P9UjnX2hvnhJJKNU=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/B/g/b87A8mRSmxgn0OtSL4dg/ricardo-pagina.png",
    },
    {
        name: "Sarah",
        nameShowsUp: "Sarah Aline",
        photo: "https://s2.glbimg.com/EXBGGgFgdmJxtQXR1qBk83oqCE8=/120x120/top/smart/s2.glbimg.com/xm3ITp_xHKg02SMtctt6Ta76s_Q=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/R/Z/TWmhAhRkOM4HBlpzQoUQ/sarah-aline-pagina.png",
    },
    {
        name: "Tina",
        nameShowsUp: "Tina",
        photo: "https://s2.glbimg.com/SN5261gIBFCuVsoWYH__wvIvUiY=/120x120/top/smart/s2.glbimg.com/0svwXs6-qkRRclVpJM0ZHy0Q7eM=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/u/g/Sa3ryFTFOuMm5pvgSzgw/tina-pagina.png",
    },
];

const Participants = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResult, setFilteredResult] = useState({ name: '', photo: '', nameShowsUp: '' });

    const handleSearch = () => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const foundResult = users.find((nameShowsUp) => nameShowsUp.name.toLowerCase() === lowerCaseSearchTerm);
        setFilteredResult(foundResult || { name: '', photo: '', nameShowsUp: '' });
    };

    return (
        <ExternalContainer>
            <ContainerInput>
                <Input
                    placeholder="Buscar por..."
                    value={searchTerm}
                    onChangeText={(text: string) => setSearchTerm(text)}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                <IconContent onPress={handleSearch} >
                    <IconContainer name="search1" size={20} />
                </IconContent>
            </ContainerInput>
            <Container>
                {filteredResult.name ?
                    <NameWithImage>
                        <Image source={{ uri: filteredResult.photo }} style={{ width: 50, height: 50, borderRadius: 99 }} />
                        <Title>{filteredResult.nameShowsUp}</Title>
                    </NameWithImage>
                    :
                    users.map((item, index) => (
                        <NameWithImage key={index}>
                            <Image source={{ uri: item.photo }} style={{ width: 50, height: 50, borderRadius: 99 }} />
                            <Title>{item.nameShowsUp}</Title>
                        </NameWithImage>
                    ))
                }
            </Container>
        </ExternalContainer>

    );
};

export default Participants;
