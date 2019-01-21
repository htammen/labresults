<template>
  <div id="app">
    <FdShell>
      <FdShellHeader>
        <ShellHeader></ShellHeader>
      </FdShellHeader>
      <FdApp>
        <FdAppNavigation orientation="vertical">
          <FdSideNav>
            <FdSideNavGroup>
              <FdSideNavList>
                <FdSideNavItem>
                  <FdSideNavLink to="/">Home</FdSideNavLink>
                </FdSideNavItem>
                <FdSideNavItem>
                  <FdSideNavLink to="/en/about">About</FdSideNavLink>
                </FdSideNavItem>
              </FdSideNavList>
            </FdSideNavGroup>
          </FdSideNav>
        </FdAppNavigation>
        <FdAppMain>
          <router-view/>
        </FdAppMain>
      </FdApp>
      <FdShellFooter>Footer</FdShellFooter>
    </FdShell>
  </div>
</template>

<script>
import ShellHeader from "@/components/ShellHeader.vue";

export default {
  name: "App",
  components: {
    ShellHeader
  }
}
</script>


<style lang="scss">
@import "./scss/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
