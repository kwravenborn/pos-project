<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default ({
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
})
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>P</div>
        <div>O</div>
        <div>S</div>
      </span>
      <span v-else>POS <br> สวัสดี</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">หน้าหลัก</SidebarLink>
    <SidebarLink to="/employee" icon="fas fa-address-book">ข้อมูลพนักงาน</SidebarLink>
    <SidebarLink to="/customer" icon="fas fa-address-card">ข้อมูลลูกค้า</SidebarLink>
    <SidebarLink to="/product" icon="fas fa-archive">ข้อมูลสินค้า</SidebarLink>
    <SidebarLink to="/typeproduct" icon="fas fa-image">ข้อมูลประเภทสินค้า</SidebarLink>
    <SidebarLink to="/order" icon="fas fa-file-alt">ข้อมูลการขาย</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-chart-bar">Dashboard</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>   
</template>

<style>
:root {
  --sidebar-bg-color: #3ab7ff;
  --sidebar-item-hover: #0085d3;
  --sidebar-item-active: #006fb9;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>