import Dither from './components/Dither';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { MenuTabs } from './components/MenuTabs';
import { MainContent } from './components/MainContent';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Dither
        waveColor={[0.3, 0.3, 0.3]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={16}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Container className="px-0">
          <Header />
          <Logo />
          <MenuTabs />
          <MainContent />
        </Container>
      </div>
    </>
  );
}

export default App;
