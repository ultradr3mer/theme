import { Container } from "react-bootstrap";

export function MenuTabs() {
  return (
    <Container fluid className="text-white py-2 glass-blur">
      <div className="d-flex justify-content-center gap-3">
        <button className="tab-btn">Menu</button>
        <button className="tab-btn inactive">Menu</button>
      </div>
    </Container>
  );
}
