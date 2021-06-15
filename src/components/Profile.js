function Profile() {
  return (
    <section className="section-profile">
      <div className="container-profile">
        <dl className="name-link-profile">
          <dt className="name-profile">윤익</dt>
          <dd id="email-profile" className="link-profile" onClick={
            () => {navigator.clipboard.writeText("89yunik@gmail.com"); alert('클립보드에 복사되었습니다.');}
            }>이메일</dd>
          <dd id="github-profile" className="link-profile"><a href="https://github.com/89yunik">깃허브</a></dd>
        </dl>
        <ul className="desc-profile">
          <li>신입 프론트엔드 개발자입니다</li>
          <li>간결하고 실용적인 웹 애플리케이션 개발을 지향하고 있습니다</li>
        </ul>
        <h3>Skills</h3>
        <ul className="desc-profile">
          <li>Frontend : HTML5, CSS3, JavaScript - React</li>
          <li>Backend : Node.js - Express</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile;