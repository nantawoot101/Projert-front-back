import Navmenu from "./Navmenu";


export default function Contact() {
    return (
        <div>
            <Navmenu/>
        <div className="ml-5 mr-5 mt-5 flex justify-around bg-gray-500 text-white ">
            <div className="w-[500px] mx-[20px]">
                <div className="my-4">
                    ช่องทางการติดต่อ
                </div>
                <hr />
                <div className="my-4">
                    <p className="mb-3">ติดต่อสอบถามปัญหาหรือเรื่องอื่นๆได้ที่</p>
                    <p className="mb-3">
                        <a href="https://www.facebook.com/profile.php?id=100011324381558" className="flex">
                            <img />
                            "Nantawut Boonliam"
                        </a>
                    </p>
                    <p className="mb-3"><a href="https://www.facebook.com/profile.php?id=100011324381558" className="flex">
                            <img />
                            "mosso45180@gmail.com"
                        </a></p>
                </div>
            </div>

            <div className="border-x-[1px]"></div>

            <div className="w-[500px] mx-[20px]">
                <div className="my-4">
                    ติดต่อสอบถามข้อมูล
                </div>
                <hr />
                <div className="my-4">
                    <img src="/src/img/contact.jpg" alt="contact" />
                </div>
            </div>
        </div>
</div>
    )
}