/*  Styles */
import { Container, Main } from "@/styles/home";

/*  Components */
import { Header } from "@/src/components/Header/Header";
import { Products } from "@/src/components/Products/Products";
import { Footer } from "@/src/components/Footer/Footer";

/*  utilities */
import { useGet } from "@/src/services/useGate";

/*  Interfaces */
import { IProduct } from "@/src/types/IProduct";

type HomeProps = {
  products: IProduct[];
};

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Products products={products} />
        </Main>
        <Footer />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const products = await useGet();
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};
