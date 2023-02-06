import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Mikołaj Graczyk"
            body={<div style={{ padding: "10px" }}>
                <p>Już w gimnazjum zacząłem interesować się programowaniem. Podstawy <strong>HTML</strong> na lekcjach informatyki zachęciły mnie do rozwijania swoich umiejętności w tej dziedzinie.</p>

                <p>Zacząłem sięgać po internetowe tutoriale, odkrywając coraz bardziej zaawansowane technologie. Niedługo później, postanowiłem rozpocząć naukę języka <strong>C++</strong>, korzystając z materiałów dostępnych na YouTube. Moja przygoda z tym językiem nie potrwała jednak zbyt długo, ponieważ okazał się on bardzo rozbudowany, a ja dotychczas nie miałem żadnego celu w jego nauce. Po pewnym czasie, historia ta powtórzyła się z językiem <strong>Python</strong>.</p>

                <p> W szkole średniej miałem styczność z językami <strong>PHP</strong> oraz <strong>JavaScript</strong>, ale w bardzo podstawowej formie. Był to okres, w którym programowanie było już dla mnie przeszłością, i uczyłem się ich jedynie, by zdać egzamin. W głębi jednak wiedziałem, że po skończeniu edukacji, ponownie zacznę uczyć się tej profesji, tym razem z myślą o przyszłej pracy.</p>
                <p>Bardzo podoba mi się idea tworzenia czegoś za pomocą kodu, który staje się coraz bardziej zaawansowany wraz z postępem prac nad nim. Lubię także wyzwania związane z rozwiązywaniem problemów i tworzeniem nowych rozwiązań.</p>
            </div>}
        />
    </Container>
);
