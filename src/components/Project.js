import project1_1 from '../project1_1.PNG'

function Project() {
  return (
    <section className="section-project">
      <div className="project-image-container">
        <button className="prev-image">이전</button>
        <img className="project-image" src={project1_1} alt="" />
        <button className="next-image">다음</button>
      </div>
      <div className="project-desc-container">
        <h3>2021.4.27 ~ 2021.6.12</h3>
        <h2>웹사이트 제작</h2>
        <p>Frontend : ReactJS<br/>Backend : Express</p>
        <ol>
          <li>
            로그인ㆍ회원가입ㆍ회원정보수정ㆍ비밀번호 찾기 기능
          </li>
          <li>
            게시판ㆍ글쓰기ㆍ수정ㆍ삭제 기능
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Project;