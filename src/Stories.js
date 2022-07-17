function Story(props){
  return(
      <div className="story">
      <div className="imagem">
        <img src={props.imgStory}/>
      </div>
      <div className="usuario">
        {props.username}
      </div>
    </div>
  );
};


export default function Stories(){
  let storiesInfo = [{imgStory:"images/9gag 1 (2).png",username:"9gag"},
  {imgStory:"images/meowed 1.png", username:"meowed"},
  {imgStory:"images/barked 1 (1).png", username:"meowed"},
  {imgStory:"images/nathanwpylestrangeplanet 1 (1).png",username:"nathanwpylestrangeplanet"},
  {imgStory:"images/wawawiwacomicsa 1 (2).png",username:"wawawiwacomicsa"},
  {imgStory:"images/respondeai 1 (1).png",username:"respondeai"},
  {imgStory:"images/filomoderna 1 (1).png",username:"filomoderna"},
  {imgStory:"images/memeriagourmet 1 (1).png",username:"memeriagourmet"}
  ]

    return(
        <div className="stories">
            {storiesInfo.map((value) => <Story imgStory= {value.imgStory} username={value.username}/>)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}