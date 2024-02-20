import React, {useRef, useLayoutEffect} from "react";
import { ContainerItens, Div, Links, Menu, ContainerLinks, Home, H3, H1, Paragrafo, Button, 
  About, H2, Tech, Certificate, Portfolio, Contact,Imagens} from "./style/style.js";
import Link from "./components/links/links.js";
import Img from "./components/img/Img.js";
import github from "./assets/icones/github.svg";
import linkedin from "./assets/icones/linkedin.svg";
import Perfil from "./assets/fotoperfil.png";
import logoReact from "./assets/tecnologias/react.png";
import logoBootstrap from "./assets/tecnologias/bootstrap.png";
import logoNode from "./assets/tecnologias/node.png";
import logoMongoDB from "./assets/tecnologias/mongodb.png";
import logoDocker from "./assets/tecnologias/docker.png";
import Email from "./assets/icones/envelope-at-fill.svg";
import WhatsApp from "./assets/icones/whatsapp.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";






function App() {
  const refContact = useRef(null);
 

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#home',{
      x:0,
      opacity:1,
      scrollTrigger:{
        trigger: ".home",
      }
    })
  

    return() =>{
      gsap.killTweensOf('#home')
    }
  },[])

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#about',{
      x:0,
      opacity:1,
      scrollTrigger:{
        trigger: ".about",
        start: 'top 978',
        end: 'bottom 594',
        scrub: true
      }
    })
  

    return() =>{
      gsap.killTweensOf('#about')
    }
  },[])

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#tech',{
      x:0,
      opacity:1,
      scrollTrigger:{
        trigger: "#tech",
        start: 'top 978',
        end: 'bottom 594',
        scrub: true
      }
    })
  

    return() =>{
      gsap.killTweensOf('#tech')
    }
  },[])

  const goToContact = () => {
    refContact.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <ContainerItens>
        <Links >
          <ul>
            <Menu>
              <Link link="#home" texto="Inicio"></Link>
            </Menu>
            <Menu>
              <Link link="#about" texto="Sobre Mim"></Link>
            </Menu>
            <Menu>
              <Link link="#cetificate" texto="Certificados"></Link>
            </Menu>
            <Menu>
              <Link link="#portifolio" texto="Portifólio"></Link>
            </Menu>
            <Menu>
              <Link link="#contact" texto="Contato"></Link>
            </Menu>
          </ul>
          <ContainerLinks>
            <a href="https://github.com/ViniRivaldar"target="_blank"rel="noreferrer"><Imagens src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/viniciusrivaldar"target="_blank"rel="noreferrer"><Imagens src={linkedin} alt="linkedin" /></a>
          </ContainerLinks>
        </Links>

        <Home id="home" >
          <Div className="home">
          <H3>Olá!</H3>
            <H1>
              Eu sou <br />
              Vinicius
            </H1>
            <H3>-Desenvolvedor FullStack</H3>
            <Paragrafo>
              Um desenvolvedor fullstack é caracterizado por sua presença digital
              única, que engloba seu site pessoal, linguagens de programação e
              estilo de codificação. Essa identidade reflete sua capacidade de
              lidar com todos os aspectos do desenvolvimento de software, do
              front-end ao back-end.
            </Paragrafo>
            <Button onClick={goToContact}>Contato</Button>
          </Div>

          <Div className="home">
          <Img src={Perfil} alt="Vinicius Rivaldar" />
          </Div>
        </Home>

        <About id="about" >
          <Div className="about">
            <Img src={Perfil} alt="Vinicius Rivaldar" />
          </Div>

          <Div className="about">
            <H2>SOBRE MIM</H2>
            <H3>Vinicius Rivaldar</H3>
            <Paragrafo>
              Aos 26 anos, deixei minha profissão como ajudante de pedreiro para
              adentrar ao mundo da programação, impulsionado pela curiosidade e o
              desejo de transição profissional. Após iniciar com Python, migrei
              para JavaScript e React devido à escassez de oportunidades.
              Dominando HTML, CSS e back-end, criei minha primeira API para um
              banco de dados de futebol, demonstrando minha prontidão para
              ingressar como desenvolvedor fullstack e contribuir efetivamente nas
              empresas que me acolherem.
            </Paragrafo>
          </Div>
        </About>
        <Tech id="tech">
          <Div className="tech-1">
            <H2>PRINCIPAIS TECNOLOGIAS</H2>
          </Div>
          <Div className="tech-2">
            <img src={logoReact} alt="reactJS" width={225}/>
            <img src={logoBootstrap} alt="bootstrap" width={225}/>
            <img src={logoNode} alt="NodeJS" width={225}/>
            <img src={logoMongoDB} alt="mongodb" width={225}/>
            <img src={logoDocker} alt="Docker" width={225}/>
          </Div>
        </Tech>
        <Certificate id="cetificate">
          <div>
            <H2>Certificados</H2>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-2.png?alt=media&token=0e395750-26d6-4824-869f-b41e46c2d194"alt="certificado1" width={1000}/><br/>
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-3.png?alt=media&token=b6f72d89-e2f1-4057-8d5e-b89536b90f95" alt="certificado2"width={1000}/><br/>
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-5.png?alt=media&token=c1ed6978-2940-4cc7-a69d-36a482594e0b" alt="certificado3"width={1000}/><br/>
            <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-32.png?alt=media&token=5c035794-b892-49ba-aeb7-2d12921a4ffc" alt="certificado4"width={1000}/><br/>
            
          </div>
        </Certificate>

        <Portfolio id="portifolio" >

        <div>
          <H2>Portifólio</H2>
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-2.png?alt=media&token=0e395750-26d6-4824-869f-b41e46c2d194"alt="certificado1" width={1000}/><br/>
          <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-3.png?alt=media&token=b6f72d89-e2f1-4057-8d5e-b89536b90f95" alt="certificado2"width={1000}/><br/>
          <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-5.png?alt=media&token=c1ed6978-2940-4cc7-a69d-36a482594e0b" alt="certificado3"width={1000}/><br/>
          <img src="https://firebasestorage.googleapis.com/v0/b/portifolio-8ef87.appspot.com/o/certificado-32.png?alt=media&token=5c035794-b892-49ba-aeb7-2d12921a4ffc" alt="certificado4"width={1000}/><br/>
        </div>
        </Portfolio>
      </ContainerItens>
      <Contact id="contact" ref={refContact}>
          <div>
            <h2>Contatos</h2>
          </div>
          <div>
            <img src={Email} alt="email"  /><p>Vinicius-rivaldar@outlook.com</p><br/>
            <img src={WhatsApp} alt="WhatsApp"/><p> 073 9 8124-6136 </p><br/>
            <a href="https://www.linkedin.com/in/viniciusrivaldar" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /><p> Vinicius Rivaldar</p></a><br/>
            <a href="https://github.com/ViniRivaldar" target="_blank" rel="noreferrer"><img src={github} alt="github" /><p>Vinicius Rivaldar</p></a>
          </div>
      </Contact>
    </>
  );
}

export default App;
