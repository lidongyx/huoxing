<template>
  <header id="site-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
                <a class="nav-link active" aria-current="page" href="#">首页</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">嘉宾分类</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">诺奖嘉宾</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">联系我们</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#site-header {
  display: block;
  border:1px solid #e5e5e5;
}
#topnav {
  margin-left: auto;
}
</style>

