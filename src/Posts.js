import React from 'react';

function Topo(props){
    return(
    <div className="topo">
        <div className="usuario">
            <img src={props.imgUsuario} />
            <strong>{props.usuario}</strong>
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>    
    </div>

    )
}

function Conteudo(props){ 
    
    const[name2,setName]= React.useState("heart-outline");
    const[classe2, setClasse]= React.useState(" heart md hydrated");

    function Click(){
        
        setClasse("heart red md hydrated");
        setName("heart");
        
        if(name2 === "heart"){
            setName("heart-outline");
            setClasse("heart md hydrated");
        }
    }
    
    return(
            <div class="conteudo" onClick={Click}>
                <img  src={props.imgPost}/>
                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon onClick={Click} class={classe2} name={name2}></ion-icon>
                            <ion-icon name={props.icon2}></ion-icon>
                            <ion-icon name={props.icon3}></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={props.icon4}></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
    );
}

function Curtidas(props){
    return(
        <div class="curtidas">
            <img src={props.imgUsuario}/>
            <div class="texto">
                Curtido por <strong>{props.texto}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
      </div>
    )
}

export default function Posts(){
    
    let postInfo =[
        {imgUsuario: "images/meowed 2 (1).png", usuario:"meowed", 
        imgPost: "images/gato-telefone 1 (1).png", imgCurtida:"images/respondeai 2 (1).png", 
        texto:"respondeai",icon2:"chatbubble-outline",icon3:"paper-plane-outline", icon4:"bookmark-outline"},
        
        {imgUsuario: "images/barked 2 (1).png", usuario:"barked", 
        imgPost: "images/dog 1 (1).png",imgCurtida:"images/meowed 2 (1).png", 
        texto:"adorable_animals",icon2:"chatbubble-outline",icon3:"paper-plane-outline", icon4:"bookmark-outline"}
    ];

return(

    postInfo.map((post,index)=>
    <div className="posts">
                <div key={index} className="post">
                    <Topo imgUsuario={post.imgUsuario} usuario ={post.usuario}/>
                    <Conteudo  imgPost={post.imgPost} icon2={post.icon2} icon3={post.icon3} icon4={post.icon4} />
                    <Curtidas imgUsuario={post.imgUsuario} texto={post.texto}/>
                </div>
    </div>
    )
);
}
 


    



