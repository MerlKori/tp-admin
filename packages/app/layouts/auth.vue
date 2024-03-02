<template>
  <div class="ui-layout ui-flex-center">
    <div class="auth-layout">
      <aside class="auth-layout__sidebar">
        <div class="auth-layout__sidebar-logo">
          <AppLogo />
        </div>
        <div class="auth-layout__sidebar-preview">
          <img src="@/assets/img/preview.png" alt="preview">
        </div>
      </aside>

      <slot />
    </div>
  </div>
</template>

<style>
.auth-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 960px;
  height: 100%;
  max-height: 624px;
  border-radius: 24px;
  border: var(--border-light);
  overflow: hidden;
}

.auth-layout__sidebar {
  background-color: var(--c-gray-900);
}

.auth-layout__sidebar-logo {
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.auth-layout__sidebar-preview {
  height: calc(100% - 80px);
  padding: 32px;
}
</style>
