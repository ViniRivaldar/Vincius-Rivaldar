import styled from "styled-components";



export const ContainerItens = styled.div`
    padding: 30px 60px;
    background: #F0F0F0;
    
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    


`

export const Menu = styled.li`

    display: inline-block;
    margin-right: 30px;
    text-decoration: none;
    background: #F0F0F0;

`

export const ContainerLinks = styled.div`

    display: flex;
    gap: 15px;
    margin-right: 30px;
`

export const Imagens = styled.img`

    width: 30px;
`

export const Home = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px ;  
    img{
        position: relative;
        animation: flutuar 2s ease-in-out infinite alternate;
       

    }  

    @keyframes flutuar{
        0%{
            top: 0;
        }
        100%{
            top:30px;
        }
    }
    .efeito-text{
        visibility: hidden;
    }
    .efeito-img{
        visibility: hidden;
    }
`


export const Div = styled.div``

export const H3 = styled.h3`

    color: #024AAC;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 10px;
    
`

export const H1 = styled.h1`

    color: #024AAC;
    font-size: 80px;
    font-weight: bold;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 5px;
`

export const Paragrafo = styled.p`
    width: 410px;
    margin-bottom: 30px;
    
`

export const Button = styled.button`
    width: 220px;
    height: 60px;
    background: #3DB3FA;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.90);
    font-size: 20px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover{
        opacity: 0.8;
        transform: scale(1.2);
    }

    &:active{
        opacity: 0.5;
    }


`
export const About = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 100px;
    margin-top: 60px;

    
    .efeito-text-about{
        visibility: hidden;
    }
    .efeito-img-about{
        visibility: hidden;
    }
`

export const H2 = styled.h2`

    color: #024AAC;
    font-size: 50px;

`

export const Tech = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 60px;
   .titulo{
    visibility: hidden;
   }
   .efeito-img-about{
        visibility: hidden;
    }
`

export const Certificate = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
   
    div{
        margin-top: 10px;
    }
   .slide-item{
        

   }
    .titulo{
    visibility: hidden;
   }
`

export const Portfolio = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 60px;
   
    div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }
    h2{
        
        color: #024AAC;
        font-size: 50px;
    }

    .titulo{
        visibility: hidden;
    }
`
export const Contact = styled.footer`
    display: flex;
    flex-direction: column;
    background: #024AAC;
    padding-top: 60px;
    padding-bottom: 60px;

    div{

        margin-left: 60px;
    }

    h2{
        color: #F0F0F0;
        font-size: 50px;
    }

    p{
        display: inline-block;
        color: #F0F0F0;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 25px;
        margin-top: 18px;
        margin-right: 10px;
    }
`


