import './Post.css';

export default function Post({author, content, image, date}){
    const {name, nickname, photo} = author;

    return (
        <div className="post">
            <div className="wrapper">
                <img className="avatar" src={photo} alt={name} />
                <div className="inner">
                    <div className="header">
                        <h1 className="author-name">{name}</h1>
                        <p className="author-nickname">{nickname}</p>
                        <p className="date">{date}</p>
                    </div>
                    <p className="content">{content}</p>
                    <img className="img" src={image} alt="ray-img" />
                </div>
            </div>
        </div>
    );
}