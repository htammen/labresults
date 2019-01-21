<template>
  <FdShellBar>
    <FdShellBarGroup position="start">
      <FdShellBarLogo src="/img/icons/android-chrome-192x192.png"/>
      <!-- does not work <FdShellBarLogo src="@/assets/logo1.png"/> -->
      <FdShellBarProduct>
        <FdShellBarProductMenu>
          <template slot="title">{{ $t("appName") }}</template>
          <template slot="menu">
            <FdMenuItem><router-link to="/">Home</router-link></FdMenuItem>
            <FdMenuItem><router-link to="/en/about">About</router-link></FdMenuItem>
          </template>-->
        </FdShellBarProductMenu>
      </FdShellBarProduct>
      <FdShellBarSubtitle>{{ $t("appSubtitle") }}</FdShellBarSubtitle>
    </FdShellBarGroup>
    <FdShellBarGroup position="end">
      <FdShellBarActions>
        <FdShellBarAction>
          <FdShellBarUserMenu>
            <FdMenuItem>App Finder</FdMenuItem>
            <FdMenuItem>Settings</FdMenuItem>
            <FdMenuItem>App Settings</FdMenuItem>
            <FdMenuItem>Help</FdMenuItem>
            <FdMenuItem>Give Feedback</FdMenuItem>
            <FdMenuItem>About</FdMenuItem>
            <FdMenuItem><a href="https://experience.sap.com/fiori-design-web/" target="_blank">Fiori Guideline</a></FdMenuItem>
            <FdMenuItem>Sign out</FdMenuItem>
          </FdShellBarUserMenu>
        </FdShellBarAction>
        <FdShellBarAction>
          <FdShellBarProductSwitcher>
            <FdShellBarProductSwitcherItem
              href="https://experience.sap.com/fiori-design-web/"
              src="/images/products/01.png"
              title="Fiori Home"
            />
            <FdShellBarProductSwitcherItem
              href="#"
              src="/images/products/02.png"
              title="S/4 HANA Cloud"
            />
            <FdShellBarProductSwitcherItem
              href="#"
              src="/images/products/03.png"
              title="Analytics Cloud"
            />
            <FdShellBarProductSwitcherItem
              :to="{path:'/test'}"
              src="/images/products/04.png"
              title="Ariba"
            />
            <FdShellBarProductSwitcherItem
              :to="{path:'/'}"
              src="/images/products/05.png"
              title="SuccessFactors"
            />
            <FdShellBarProductSwitcherItem
              :to="{path:'/'}"
              src="/images/products/06.png"
              title="Commerce Cloud"
            />
            <FdShellBarProductSwitcherItem src="/images/products/07.png" title="Gigya"/>
            <FdShellBarProductSwitcherItem src="/images/products/08.png" title="Callidus Cloud"/>
            <FdShellBarProductSwitcherItem src="/images/products/09.png" title="Fieldglass"/>
            <FdShellBarProductSwitcherItem>
              <router-link :to="{path:'/'}">
                <FdShellBarProductSwitcherItemImg src="/images/products/10.png"/>
                <FdShellBarProductSwitcherItemTitle>Concur</FdShellBarProductSwitcherItemTitle>
              </router-link>
            </FdShellBarProductSwitcherItem>
            <FdShellBarProductSwitcherItem src="/images/products/11.png">
              <router-link :to="{path:'/'}">
                <FdShellBarProductSwitcherItemImg src="/images/products/11.png"/>
                <FdShellBarProductSwitcherItemTitle>Cloud for Customer</FdShellBarProductSwitcherItemTitle>
              </router-link>
            </FdShellBarProductSwitcherItem>
            <FdShellBarProductSwitcherItem>
              <router-link :to="{path:'/'}">
                <FdShellBarProductSwitcherItemImg src="/images/products/12.png"/>
                <FdShellBarProductSwitcherItemTitle>Cloud Portal</FdShellBarProductSwitcherItemTitle>
              </router-link>
            </FdShellBarProductSwitcherItem>
          </FdShellBarProductSwitcher>
        </FdShellBarAction>
      </FdShellBarActions>
    </FdShellBarGroup>
  </FdShellBar>
</template>

<script>

export default {
  name: "ShellHeader",
  props: {
  },
  data() {
    return {};
  },
  created: function() {
  },
  methods: {
  },
  computed: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
