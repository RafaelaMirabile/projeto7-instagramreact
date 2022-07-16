export default function Feed(){

    function Post(props){
    console.log(props);

    const imagesPost=[]
    
    return(
        <div class="post">
            <div class="post-header">
                <div>
                    <img src={props.imageAccount}/> 
                    <strong>{props.accountName}</strong> 
                </div>
                <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
            </div>
        <img src={props.imagePost}/>
    </div>

    )


}
    return(
            <div class="feed">
                <Post
                imageAccount="images/meowed 2 (1).png" alt="userImage"
                imagePost="images/gato-telefone 1 (1).png"
                accountName="meowed"
                />
                <Post
                imageAccount="images/barked 1 (1).png" alt="userImage"
                imagePost="images/dog 1 (1).png"
                accountName="barked"
                />
                <Post
                imageAccount="images/meowed 2 (1).png" alt="userImage"
                imagePost="images/gato-telefone 1 (1).png"
                accountName="meowed"
                />
            </div>
    )
}