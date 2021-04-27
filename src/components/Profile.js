function Profile() {
  return (
    <section className="section-profile">
      {/* <img src="image-profile.jpg" className="image-profile"> */}
      <div className="blank"></div>
      <div>
        <dl className="name-link-profile">
          <dt className="name-profile">윤익</dt>
          <dd id="email-profile" className="link-profile" onClick={
            () => {navigator.clipboard.writeText("89yunik@gmail.com"); alert('클립보드에 복사되었습니다.');}
            }>이메일</dd>
          <dd id="github-profile" className="link-profile"><a href="https://github.com/89yunik">깃허브</a></dd>
        </dl>
        <table>
          <tbody>
            <tr>
              <td>2021.8</td>
              <td>서울시립대학교 전자전기컴퓨터공학부 졸업(예정)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Profile;