import Container from "@/layout/Container";
import { store } from "@/redux/store";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
const Canvas = dynamic(() => import("@components/canvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <Provider store={store}>
      <Container>
        <Canvas />
      </Container>
    </Provider>
  );
}
