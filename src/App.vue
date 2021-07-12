<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/calendar">Calendar</router-link>
      <router-link to="/leads">Leads</router-link>
      <router-link to="/deals">Deals</router-link>
      <router-link to="/shipments">Shipments</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <div class="marketing">
        <h4>Marketing</h4>
        <router-link to="/campaign">Campaign</router-link>
        <router-link to="/media-templates">Media Templates</router-link>
        <router-link to="/media">Media</router-link>
      </div>
      <router-link to="/clients">Clients</router-link>
      <div class="sales">
        <h4>Sales</h4>
        <router-link to="/invoices">Invoices</router-link>
        <router-link to="/estimates">Estimates</router-link>
        <router-link to="/credit-notes">Credit Notes</router-link>
        <router-link to="/expenses">Expenses</router-link>
        <router-link to="/payments">Payments</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/tax-rates">Tax Rates</router-link>
      </div>
      <router-link to="/contracts">Contracts</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/messages">Messages</router-link>
      <router-link to="/tickets">Tickets</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/notes">Notes</router-link>
      <router-link to="/subscriptions">Subscriptions</router-link>
      <router-link to="/knowledgebase">Knowledgebase</router-link>
      <router-link to="/reports">Reports</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/file-manager">File Manager</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  display: flex;
  flex-wrap: wrap;
  width: 175px;
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  left: 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .marketing,
  .sales {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    h4 {
      margin-bottom: 10px;
    }
  }
}
</style>
