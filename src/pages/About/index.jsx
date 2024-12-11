import Layouts from "../../common/components/Layouts";
import style from "./index.module.css";
import circleDown from "images/common/icon-circle-down.svg";
import featureImg1 from "images/about/feature-img-1.png";
import featureImg2 from "images/about/feature-img-2.png";
import featureImg3 from "images/about/feature-img-3.png";
import floorBanner from "images/sample/floor-banner.png";

function About () {
    const featureList = [
        {
            id:0,
            name:"Possibility",
            title:"무한한 가능성을 탐구하고 실현하다",
            subTitle : "크레페스튜디오는 고객의 상상력을 현실로 바꾸는 것을 목표로 합니다.\n우리는 모든 아이디어에 잠재된 가능성을 발견하고, 그것을 실현하는 데 전념합니다.",
            img:featureImg1
        },
        {
            id:1,
            name:"Trust",
            title:"신뢰할 수 있는 파트너십",
            subTitle : "크레페스튜디오는 고객과의 파트너십을 가장 소중히 여깁니다.\n투명하고 정직한 소통을 통해 고객과의 신뢰를 구축하고,\n그 신뢰를 바탕으로 함께 성장해 나갑니다.",
            img:featureImg2
        },
        {
            id:2,
            name:"Creation",
            title:"창작의 즐거움을 공유하다",
            subTitle : "크레페스튜디오는 창의적인 열정으로 가득한 팀입니다.\n우리의 창작 과정은 항상 새로운 시도를 두려워하지 않으며,\n고객과 함께 창작의 즐거움을 나누고자 합니다.",
            img:featureImg3
        }
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_area}>
                    <h3 className={style.title}>
                        Crafting<br/>
                        New Possibilities<br />
                        Creativity
                    </h3>
                    <p className={style.sub_title}>창의로 새로운 가능성을 만들다</p>
                    <button className={style.down_scroll} type="button">
                        <img alt="circle down" src={circleDown} />
                    </button>

                    <p className={style.bottom_text}>
                        크레페 스튜디오는 평범한 아이디어를 <br/>
                        현실로 실현 가능하게 해주며, <br/>
                        창작의 한계를 허물어 함께 새로운 가능성을 열어 갑니다
                    </p>
                </div>

                <div className={style.feature_area}>
                    {featureList.map((item) => (
                        <div className={style.items} key={item.id}>
                            <div className={style.text_box}>
                                <h3 className={style.names}>{item.name}</h3>
                                <p className={style.title}>{item.title}</p>
                                <p className={style.sub_title}>{item.subTitle}</p>
                            </div>
                            <img alt="icon" src={item.img} />
                        </div>
                    ))}
                </div>

                <div className={style.floor_area}>
                    <img alt="floor img" src={floorBanner} />
                    <h3 className={style.floor_title}>
                        창의와 혁신으로<br/>
                        모든 아이디어가 실현되는 세상을 만들고자 합니다
                    </h3>
                </div>
            </div>
        </Layouts>
    )
}

export default About;