import Container from "../../components/Container";
import Sidebar from "../../components/Sidebar";
import styled from "../../styles/page.module.css";

export default function Home() {
  return (
    <main className={styled.mainContainer}>
      <Container />
      <Sidebar />
    </main>
  );
}
