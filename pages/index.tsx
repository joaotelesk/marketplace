import { Footer } from "@/src/components/Footer/Footer";
import { Products } from "@/src/components/Products/Products";
import { Container, Main } from "@/styles/home";

export default function Home() {
  return (
    <>
      <Container>
        <Main>
          <Products />
        </Main>
        <Footer />
      </Container>
    </>
  );
}
