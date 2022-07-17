function Usuario(props){
    return(
        <div class="usuario">
        <img src={props.userImg} />
        <div class="texto">
          <strong>{props.texto}</strong>
          {props.user}
        </div>
      </div>
    )
}

function Sugestao(props){
    return(
        <div class="usuario">
          <img src={props.sugestaoImg}/>
          <div class="texto">
            <div class="nome">{props.sugestaoNome}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>
    )
}

export default function Sidebar(){
    const sugestaoInfo=[
        {sugestaoImg:"images/badvibesmemes 1.png", sugestaoNome:"bad.vibes.memes"},
        {sugestaoImg:"images/chibirdart 1.png", sugestaoNome:"chibirdart"},
        {sugestaoImg:"images/razoesparaacreditar 1.png", sugestaoNome:"razoesparaacreditar"},
        {sugestaoImg:"images/adorableanimals 1.png", sugestaoNome:"adorable_animals"},
        {sugestaoImg:"images/smallcutecats 1.png", sugestaoNome:"smallcutecats"}
    ]
    
    
    const usuario=[{userImg:"images/catanacomics 1 (1).png",
    texto:"catanacomics",user:"Catana"}];
    
    return(
        <div className="sidebar">
            {usuario.map((value)=> 
            <Usuario userImg={value.userImg} texto={value.texto} user={value.user}/>)}
            <div className="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestaoInfo.map((value, index)=>(
                    <div key={index} className="sugestao">
                        <Sugestao sugestaoImg={value.sugestaoImg} sugestaoNome={value.sugestaoNome}/>
                        <div class="seguir">Seguir</div>
                    </div>
                ))}
            
            </div>
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>
          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>

    );
}