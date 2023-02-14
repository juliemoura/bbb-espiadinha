import Description from "../commons/description";
import ImageWithBlink from "../commons/imageWithBlink";
import { Container, Content, DescriptionContent, DescriptionContainer } from "./styles";

const Status = () => {
  return (
    <Container>
      <Content>
        <ImageWithBlink uri="https://s2.glbimg.com/w2D7pl--DvN44BIY-u69JqTVkZQ=/120x120/top/smart/s2.glbimg.com/p_I9a4UI6KusEsBFWOQ8U4QYjNU=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/y/x/CE0hq5RhWO1uwQ3v4neQ/bruna-griphao-pagina.png" borderColor="#47D814" />
        <DescriptionContainer>
          <Description title="Disponível" color="#47D814" />
          <DescriptionContent>Significa que a pessoa está conversando com alguém, o que indica que está disponível e pronta para conversar.</DescriptionContent>
        </DescriptionContainer>
      </Content>

      <Content>
        <ImageWithBlink uri="https://s2.glbimg.com/EXBGGgFgdmJxtQXR1qBk83oqCE8=/120x120/top/smart/s2.glbimg.com/xm3ITp_xHKg02SMtctt6Ta76s_Q=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/R/Z/TWmhAhRkOM4HBlpzQoUQ/sarah-aline-pagina.png" borderColor="#D81414" />
        <DescriptionContainer>
          <Description title="Indisponível" color="#D81414" />
          <DescriptionContent>Indica que a pessoa está dormindo, o que significa que não está disponível para conversar.</DescriptionContent>
        </DescriptionContainer>
      </Content>

      <Content>
        <ImageWithBlink uri="https://s2.glbimg.com/ozYvf7AnOG7mQZez1U4IgXgolxY=/120x120/top/smart/s2.glbimg.com/Y7vXCpnUqEl0hYM6Jynnxd-vU3k=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/a/B/9s0G9BTAqxRzvKDNirLg/fred-nicacio-pagina.png" borderColor="#00D1FF" />
        <DescriptionContainer>
          <Description title="Na piscina" color="#00D1FF" />
          <DescriptionContent>Indica que a pessoa está na piscina, pode estar conversando com alguém ou não.</DescriptionContent>
        </DescriptionContainer>
      </Content>

      <Content>
        <ImageWithBlink uri="https://s2.glbimg.com/SN5261gIBFCuVsoWYH__wvIvUiY=/120x120/top/smart/s2.glbimg.com/0svwXs6-qkRRclVpJM0ZHy0Q7eM=/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/u/g/Sa3ryFTFOuMm5pvgSzgw/tina-pagina.png" borderColor="#FFE600" />
        <DescriptionContainer>
          <Description title="Na academia" color="#FFE600" />
          <DescriptionContent>Indica que a pessoa está na academia, também pode ou não estar acompanhado.</DescriptionContent>
        </DescriptionContainer>
      </Content>
    </Container>
  );
};

export default Status;
