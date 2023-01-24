import { Container, Header, ContainerTop } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Container>
        <ContainerTop>
            <Header>{title}</Header>
            {extraHeaderContent}
        </ContainerTop>
        <div>
            {body}
        </div>
    </Container>
);

export default Section;