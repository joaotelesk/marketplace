import { Footer } from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import { Products } from "@/src/components/Products/Products";
import { Container, Main } from "@/styles/home";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Products />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
