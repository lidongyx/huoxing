
<template>

    <header id="site-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img height="40px" src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/logo-rgb.png" class="custom-logo" alt="火星未来">
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="topnav">
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/"> 首页 </router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/sort">嘉宾分类</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/special">诺奖嘉宾</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/contact">联系我们</router-link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <router-view />

  <footer id="footer" class="site-footer">
    <div class="container">
      <div>
        <div>
          <div>
            <div>
              <div class="foot-pic">
                <img
                  class="foot-logo"
                  src="https://hackweek-1251009918.cos.ap-shanghai.myqcloud.com/themartians/logo-white2.png"
                  alt=""
                />
              </div>
              <div class="menu-list">
                <p class="menu">
                  <a href="https://themartians.co">火星首页</a> |
                  <a href="https://themartians.co/?page_id=328">火星博客</a> |
                  <a href="https://themartians.co/?page_id=298">关于我们</a>
                </p>
                <p class="beian">
                  深圳市南山区科智西路1号科苑西工业区23栋北4层<br />解决一个问题科技（深圳）有限公司
                  © 2020 <a href="http://www.beian.miit.gov.cn">粤ICP备2021072149号-1</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.navbar-brand img{
  height: 40px;
}
#site-header {
  display: block;
  border:1px solid #e5e5e5;
}
#topnav {
  margin-left: auto;
}
#footer {
  display: block;
  overflow: hidden;
  padding: 40px 20px;
  background-color: black;
  color: #fff;
  margin-top: 30px;
  bottom: 0;
}
#footer a {
  color: #fff;
}
#footer p {
  color: #969696;
}
.foot-pic{
  display: block;
  overflow: hidden;
  text-align: center;
  margin: 20px auto;
}
img.foot-logo {
  height: 40px;
}
.menu-list{
  padding-top: 15px;
}
p.menu {
  text-align: center;
  font-size: 14px;
  margin: -10px 0 0 0;
}
p.beian {
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
}
</style>
