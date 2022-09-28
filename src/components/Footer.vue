<script setup></script>

<template>
  <footer id="footer" class="site-footer">
    <div class="container">
      <div>
        <div>
          <div>
            <div>
              <div class="foot-pic">
                <img
                  class="foot-logo"
                  src="https://themartians.co/wp-content/uploads/2021/07/logo-white2.png"
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
