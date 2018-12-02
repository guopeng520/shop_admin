<template>
  <el-container class="home">
    <el-header class="home-header">
      <el-row
        type="flex"
        class="row-bg"
        justify="space-between"
      >
        <el-col
          :span="3"
          class="logo"
        >
          <img
            src="@/assets/images/logo.png"
            alt=""
          >
        </el-col>
        <el-col
          :span="6"
          class="title"
        >
          <div class="grid-content bg-purple-light">
            电商后台管理系统
          </div>
        </el-col>
        <el-col
          :span="5"
          class="desc"
        >
          <div class="grid-content bg-purple">
            欢迎上海前端27期星曜会员
            <a
              href="javascript:;"
              class="logout"
              @click.prevent='logout'
            >退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router='true'
          default-active="1-1"
          class="home-header-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">
              <i class="el-icon-menu"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">
              <i class="el-icon-menu"></i>
              <span slot="title">角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span slot="title">分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              <span slot="title">商品分类</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-menu"></i>
              <span slot="title">订单列表</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-menu"></i>
              <span slot="title">数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",

  methods: {
    logout() {
      this.$confirm("您确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          localStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出"
          });
        });
    }
  }
};
</script>

<style>
.logo img {
  width: 100%;
  margin-top: 7px;
}
.home {
  height: 100%;
  background-color: #eaeef1;
}
.title {
  font-size: 30px;
  color: #fff;
  text-align: right;
  font-weight: bold;
}
.desc {
  font-weight: bold;
  text-align: right;
}
.logout {
  color: #daa520;
}
.home-header {
  line-height: 60px;
  background-color: #b3c1cd;
}

.home-header-menu {
  height: 100%;
}
</style>
