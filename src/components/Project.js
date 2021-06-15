import project1_1 from '../project1_1.PNG'
// import prev from '../prev.svg'

function Project() {
  return (
    <section className="section-project">
      <div className="project-container">
        <button className="prev">&lt;</button>
        <div className="project-image-container">
          <button className="prev">&lt;</button>
          <img className="project-image" src={project1_1} alt="" />
          <button className="next">&gt;</button>
        </div>
        <div className="project-desc-container">
          <h3>2021.4.27 ~ 2021.6.12</h3>
          <h2>웹사이트 제작</h2>
          <ul className="project-desc-skills">
            <li>Frontend : React</li>
            <li>Backend : Express</li>
          </ul>
          <ol>
            <li>
              로그인ㆍ회원가입ㆍ회원정보수정ㆍ비밀번호 찾기 기능
            </li>
            <li>
              게시판ㆍ글쓰기ㆍ수정ㆍ삭제 기능
            </li>
          </ol>
        </div>
        <button className="next">&gt;</button>
      </div>
    </section>
  )
}

export default Project;