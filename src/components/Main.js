import Button from "./Button"

const Tech = ({ techs }) => {
    return (
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    );
};
const UserCard = ({ img, firstname, lastname }) => {
    return (
        <div>
            <img scr={img} alt="user" width={150} />
            <h4>
                {firstname} {lastname}
            </h4>
        </div>
    );
};

export default function Main({ user, techs, greetPeople, showDate }) {
    const UserInfo = {
        ...user,
        img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seekpng.com%2Fpng%2Fdetail%2F757-7579850_random-image-from-user.png&imgrefurl=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2t4e6r5w7e6r5t4_random-image-from-user%2F&tbnid=AQikcWlqR22KfM&vet=12ahUKEwjiqsOKha38AhXjS_UHHQKtDvwQMyhMegQIARB2..i&docid=7irYkDA_aPpvfM&w=820&h=599&itg=1&q=img%20png%20user&ved=2ahUKEwjiqsOKha38AhXjS_UHHQKtDvwQMyhMegQIARB2"
    };
    let imgPa = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_QsoYPRoTQjTKZSaLzfQ1a4FZddIMu6jMA&usqp=CAU";
    const users = [
        { img: imgPa, firstname: "Bold", lastname: "Dulam" },
        { img: imgPa, firstname: "Gan", lastname: "Lkham" },
        { img: imgPa, firstname: "Sukh", lastname: "Khorloo" },
        { img: imgPa, firstname: "GonchigSumlaa", lastname: "Lkhagva" },
    ]
    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...UserInfo} />
                {
                    users.map((UserInfo) => {
                        return <UserCard {...UserInfo} />;

                    })
                }
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Greet People" status={false} func={showDate} />
            </div>
        </div>
    );
}