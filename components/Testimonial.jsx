import style from "../styles/testimonial.module.css";
import Image from "next/image";
import { users } from "../data";
import Circle from "./Circle";
const Testimonials = () => {
    return (
        <div className={style.container}>
            <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue" />
            <h1 className={style.title}>Testimonials</h1>
            <div className={style.wrapper}>
                {users.map((user) => (
                    <div className={style.card} key={user.id}>
                        <Image src={`/img/${user.logo}`} width="30" height="30" alt="" />
                        <p className={style.comment}>
                            &ldquo;{user.comment}&rdquo;
                        </p>
                        <div className={style.person}>
                            <Image
                                className={style.avatar}
                                src={`/img/${user.avatar}`}
                                width="45"
                                height="45"
                                alt=""
                            />
                            <div className={style.info}>
                                <span className={style.username}>{user.name}</span>
                                <span className={style.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;