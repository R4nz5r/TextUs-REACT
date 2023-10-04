export default function About(props) {

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className={`accordion-item bg-${props.mode}`}>
                <div className="col-md-2 mx-auto">
                    <h1 className={`accordion-item-cn text-${props.mode === 'light' ? 'dark' : 'light'}`}>About Me</h1>
                </div>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Created by :<strong>T.M Ragib Shahrier</strong>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`accordion-body text-justify text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>
                                T.M Ragib Shahrier is a passionate and experienced web developer dedicated to crafting exceptional digital experiences. With a background in web development spanning several years, Ragib has honed his skills to create dynamic and visually appealing websites and applications. Ragib is known for his strong problem-solving abilities and a deep understanding of front-end and back-end technologies. His proficiency in HTML, CSS, JavaScript, and various web frameworks allows him to bring creative ideas to life. He thrives on staying up-to-date with the latest web development trends and technologies to deliver cutting-edge solutions. A relentless learner and a detail-oriented professional, Ragib believes in the power of clean and efficient code to create responsive and user-friendly websites. His dedication to optimizing web performance ensures that users have a seamless and enjoyable online experience. Outside of coding, Ragib is a firm believer in open-source communities and often contributes to various projects. He also enjoys sharing his knowledge and expertise through tutorials and blog posts, helping aspiring developers on their learning journeys. Enthusiast who is passionate about making the web a better place, one line of code at a time.
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="accordion-body" style={{ textAlign: "center" }}>
                                <img
                                    src="./p1.jpg"
                                    className="img-thumbnail"
                                    alt="Ragib Shahrier"
                                    style={{
                                        width: '400px',
                                        height: '500px',
                                        borderRadius: '500px',
                                        padding: '0px',
                                    }}
                                />
                                <p className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textAlign: 'center' }}>
                                    <strong>Name:</strong> T.M Ragib Shahrier
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
